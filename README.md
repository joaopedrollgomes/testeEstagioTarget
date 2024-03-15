## Soluções do Teste

### Linguágem utilizada: JavaScript

### As respostas 1, 2 e 5 [estão aqui](testeEstagioTarget.js)

### As respostas das questões 3 e 4 estão logo abaixo.

### 3- 
Descubra a lógica e complete o próximo elemento:

a- 1, 3, 5, 7, _**9**_ (números ímpares)

b- 2, 4, 8, 16, 32, 64, _**128**_ (múltiplos de 2)

c- 0, 1, 4, 9, 16, 25, 36, _**49**_ (números elevados ao quadrado)

d- 4, 16, 36, 64, _**100**_ (números pares ao quadrado)

e- 1, 1, 2, 3, 5, 8, _**13**_ (fibonacci)

f- 2, 10, 12, 16, 17, 18, 19, _**200**_ (números que começam com a letra D)

### 4- 
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

##Resposta: 
**A logíca consiste em ligar um interruptor por um determinado período de tempo, assim a lampada correspondente ficará aquecida, e depois desliga-lo.
Em seguida, ligo o segundo interruptor e não desligo, depois vou até alguma sala conferir a lampada, gastando assim a primeira ida.
Caso a lâmpada esteja acesa corresponde ao interruptor que está ligado, a lâmpada quente corresponde ao interruptor que foi ligado e desligado, e a lâmpada restante corresponde ao interruptor que não foi testado. Indo até a segunda sala, gastando assim a segunda ida, posso afirma com certeza qual lâmpada pertence a cada interruptor.**
