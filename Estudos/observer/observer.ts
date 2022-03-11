//console.log('Oi');

//Padrão utilizado quando 1 objeto precisa notificar outros objetos sobre alguma alteração de estado
//Usa o SRP (single response principle) e OCP (open close principle) e facilita a comunicação entre objetos em tempo de execução (não precisa alterar a classe)


//Objeto que será observado e que será o responsável por conter métodos para adicionar, remover e notificar todos os seus dependentes 
interface Observable{
   subscribe(...observers: Observer[]): void; //envia 1 ou vários observers
   unsubscribe(observer: Observer): void;
   notify(): void; //notifica os oververs
}

interface Observer{
   update(...args: unknown[]): void; //método que será utilizado pelo observable para atualizar os observers
}

//Concrete Observable
//classe input que implementa o observable
class InputObservable implements Observable{
   private observers: Observer[] = []; //adiciona um observer do tipo Observer iniciando com array vazio

   constructor(public element: HTMLInputElement){} // recebe o emento de um input, public pois precisou acessar o valor do elemento fora da classe

   //recebe um array de observers
   subscribe(...observers: Observer[]): void {
      observers.forEach((observer) => {
         //if criado para caso o observer seja chamado mais de uma vez ele não seja emplementado novamente
         if (!this.observers.includes(observer)){
            this.observers.push(observer)
         }
      });
   }

   unsubscribe(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer) //chamada para saber se o observer existe e obter o intex ou -1

      // se receber -1 significa que ele não existe dentro do observers, se for diferente de -1 ele receberá 1
      if(observerIndex !== -1){
         this.observers.splice(observerIndex, 1);
      }
   }

   notify(): void {
      this.observers.forEach(observer => observer.update(this)) //observer recebe a notificação de atualização
   }
}

//Concret Observer
class ParagraphObserver implements Observer{
   constructor(public element: HTMLParagraphElement){}
   //quando houver uma atualização ele enviará para este método (update)
   update(observable: Observable):void {
      if(observable instanceof InputObservable){ //condição para validar se é uma instância deste elemento
         this.element.innerText = observable.element.value; //recebe o valor do elemento do input
      }
   }
}

class DivObserver implements Observer{
   constructor(public element: HTMLDivElement){}

   update(observable: Observable):void {
      if(observable instanceof InputObservable){
         this.element.innerText = observable.element.value;
      }
   }
}

//Client Code
//Funcão que cria um input e já insere em tela
function makeInput(): HTMLInputElement{
   const input = document.createElement('input');  
   document.body.appendChild(input);
   return input;
}

function makeParagraph(): HTMLParagraphElement{
   const p = document.createElement('p');  
   document.body.appendChild(p);
   p.innerText = 'Texto Inicial'
   return p;
}

function makeDiv(): HTMLDivElement{
   const div = document.createElement('div');  
   document.body.appendChild(div);
   div.innerText = 'Texto da Div'
   return div;
}

//chama os elementos para a tela
const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());

input.subscribe(p1, p2, div1);

// conforme digita recebe a notificação e inclue o valor do elemento
input.element.addEventListener('keyup', function(){
   input.notify();
});

input.unsubscribe(p2); //p2 não atualiza o valor notificado