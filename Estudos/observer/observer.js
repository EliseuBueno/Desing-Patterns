"use strict";
//console.log('Oi');
//Concrete Observable
//classe input que implementa o observable
class InputObservable {
    constructor(element) {
        this.element = element;
        this.observers = []; //adiciona um observer do tipo Observer iniciando com array vazio
    } // recebe o emento de um input, public pois precisou acessar o valor do elemento fora da classe
    //recebe um array de observers
    subscribe(...observers) {
        observers.forEach((observer) => {
            //if criado para caso o observer seja chamado mais de uma vez ele n�o seja emplementado novamente
            if (!this.observers.includes(observer)) {
                this.observers.push(observer);
            }
        });
    }
    unsubscribe(observer) {
        const observerIndex = this.observers.indexOf(observer); //chamada para saber se o observer existe e obter o intex ou -1
        // se receber -1 significa que ele n�o existe dentro do observers, se for diferente de -1 ele receber� 1
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }
    notify() {
        this.observers.forEach(observer => observer.update(this)); //observer recebe a notifica��o de atualiza��o
    }
}
//Concret Observer
class ParagraphObserver {
    constructor(element) {
        this.element = element;
    }
    //quando houver uma atualiza��o ele enviar� para este m�todo (update)
    update(observable) {
        if (observable instanceof InputObservable) { //condi��o para validar se � uma inst�ncia deste elemento
            this.element.innerText = observable.element.value; //recebe o valor do elemento do input
        }
    }
}
class DivObserver {
    constructor(element) {
        this.element = element;
    }
    update(observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}
//Client Code
//Func�o que cria um input e j� insere em tela
function makeInput() {
    const input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    const p = document.createElement('p');
    document.body.appendChild(p);
    p.innerText = 'Texto Inicial';
    return p;
}
function makeDiv() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerText = 'Texto da Div';
    return div;
}
//chama os elementos para a tela
const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());
input.subscribe(p1, p2, div1);
// conforme digita recebe a notifica��o e inclue o valor do elemento
input.element.addEventListener('keyup', function () {
    input.notify();
});
input.unsubscribe(p2); //p2 n�o atualiza o valor notificado
//# sourceMappingURL=observer.js.map