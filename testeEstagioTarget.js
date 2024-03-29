//primeira questão
let soma = 0;
let index = 13;

function somaTotal() {
    for (let k = 0; k < index; k++) {
        soma += k;
    }

    console.log(`Variável soma = ${soma}`);
}
somaTotal();
//soma = 78

/* *********************************************************************************** */

//segunda questão
let numero1 = 0;
let numero2 = 1;
let ultimoNumero = 1;
let sequenciaFibonacci = [0, 1];
let numeroUsuario;
let numeroValido = true;

do {
    numeroUsuario = parseInt(prompt('Digite um numero para saber se pertence ou não a sequência fibonacci'));
    if (isNaN(numeroUsuario)) {
        console.log('Por favor, digite um número válido');
    }
    else {
        numeroValido = false;
    }
}
while (numeroValido);

function fibonacci(intervaloDaSequencia) {
    while (ultimoNumero <= intervaloDaSequencia) {
        ultimoNumero = numero1 + numero2;
        numero1 = numero2;
        numero2 = ultimoNumero;
        sequenciaFibonacci.push(ultimoNumero);
    }
    if (sequenciaFibonacci.includes(numeroUsuario)) {
        console.log(`O número ${numeroUsuario} pertence a sequência fibonacci`);
    }
    else {
        console.log(`O número ${numeroUsuario} não pertence a sequência fibonacci`);
    }
}
fibonacci(numeroUsuario);

/* *********************************************************************************** */

//terceira questão
/*
3) Descubra a lógica e complete o próximo elemento:


a) 1, 3, 5, 7, _"9"_ (números impares)

b) 2, 4, 8, 16, 32, 64, _"128"_ (multiplos de )2

c) 0, 1, 4, 9, 16, 25, 36, _"49"_ (números elevados ao quadrado)

d) 4, 16, 36, 64, _"100"_ (números pares ao quadrado)

e) 1, 1, 2, 3, 5, 8, _"13"_ (fibonacci)

f) 2, 10, 12, 16, 17, 18, 19, _"200"_ (números que começam com a letra D)

*/

//Quarta questão
/* 
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Resposta: A logíca consiste em ligar um interruptor por um determinado período de tempo, assim a lampada correspondente ficará aquecida, e depois desliga-lo.
Em seguida, ligo o segundo interruptor e não desligo, depois vou até alguma sala conferir a lampada, gastando assim a primeira ida.
Caso a lâmpada esteja acesa corresponde ao interruptor que está ligado, a lâmpada quente corresponde ao interruptor que foi ligado e desligado, e a lâmpada restante corresponde ao interruptor que não foi testado.
Indo até a segunda sala, gastando assim a segunda ida, posso afirma com certeza qual lâmpada pertence a cada interruptor. 
*/

//Quinta questão
let string = prompt('Digite uma palavra ou frase');
let stringInvertida = '';

function inveterString(str) {
    for(let i = str.length - 1; i >= 0; i--){
        stringInvertida += str[i];
    }
    
    console.log(stringInvertida);
}

inveterString(string);