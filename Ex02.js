// Teste Técnico Vaga de Estágio Target Sistemas - Exercício 02

/*
    2 - Segue abaixo um exemplo de implementação em JavaScript que solicita ao usuário 
    um número inteiro e verifica se ele pertence à sequência de Fibonacci:
*/

// Solicita um número inteiro ao usuário
let numero = prompt("Digite um número inteiro:");

// Converte a entrada para um número inteiro
numero = parseInt(numero);

// Inicializa os dois primeiros valores da sequência de Fibonacci
let fibonacciAntecessor = 0;
let fibonacciAtual = 1;

// Enquanto o valor atual da sequência for menor ou igual ao número informado
while (fibonacciAtual <= numero) {
  // Se o número informado for igual ao valor atual da sequência, ele pertence à sequência
  if (fibonacciAtual === numero) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci!`);
    break;
  }

  // Avança na sequência de Fibonacci
  let proximoFibonacci = fibonacciAntecessor + fibonacciAtual;
  fibonacciAntecessor = fibonacciAtual;
  fibonacciAtual = proximoFibonacci;
}

// Caso o valor atual da sequência seja maior que o número informado, o número não pertence à sequência
if (fibonacciAtual > numero) {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

/*
Nesse exemplo, é utilizado um laço de repetição "enquanto" para percorrer a sequência 
de Fibonacci. A cada iteração, é verificado se o número informado pelo usuário é igual 
ao valor atual da sequência. Se o número pertence à sequência, é exibida uma mensagem 
informando isso. Caso contrário, é exibida uma mensagem informando que 
o número não pertence à sequência.
*/
