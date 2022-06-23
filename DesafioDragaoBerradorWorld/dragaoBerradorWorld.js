// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var s = gets().split(" ");

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let n = parseInt(         s  [0]);
let min = parseInt(   s   [1]);
let max = parseInt(  s   [2]);

		let altura, conta = 0;
		for (let x=0 ; x<n ; x++) {
		  altura = parseInt(gets());
		               
		if(altura >=min &&         altura <= max )
			conta++;
		}
		print(conta);
		
		
		
