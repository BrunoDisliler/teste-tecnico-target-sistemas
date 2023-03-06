// Teste Técnico Vaga de Estágio Target Sistemas - Exercício 05

/*
Segue abaixo um exemplo de programa em JavaScript que inverte os caracteres 
de uma string sem usar a função reverse:
*/

let str = "exemplo de string"; // string de exemplo
let strInvertida = ""; // variável que armazenará a string invertida

// percorre a string de trás para frente e adiciona cada caractere na variável strInvertida
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log(strInvertida); // exibe a string invertida no console

/*
Explicando o código:

    Primeiro, definimos uma string de exemplo na variável str.
    Em seguida, criamos uma variável vazia chamada strInvertida que armazenará a string invertida.
    Usando um loop for, percorremos a string str de trás para frente, começando pelo último caractere e indo até o primeiro.
    Em cada iteração do loop, adicionamos o caractere atual na variável strInvertida usando o operador de concatenação +=.
    Ao final do loop, a variável strInvertida conterá a string invertida.
    Por fim, exibimos a string invertida no console usando a função `console log`.
*/
