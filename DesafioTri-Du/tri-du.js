// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


var cards = gets().split(" ");
let cardOne = parseInt(cards[0]);
let cardTwo = parseInt(cards[1]);
let cardThree;
    
if( cardOne === cardTwo ) cardThree = cardOne;
else if(cardOne !== cardTwo && cardOne >= cardTwo) cardThree = cardOne;
else if(cardOne !== cardTwo && cardOne <= cardTwo) cardThree = cardTwo;

print(cardThree);
