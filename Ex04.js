// Teste Técnico Vaga de Estágio Target Sistemas - Exercício 04

/*
Para calcular o percentual de representação de cada estado, 
é necessário seguir os seguintes passos:

    1 - Somar o valor de faturamento de todos os estados 
    para obter o valor total mensal da distribuidora.
    2 - Dividir o valor de faturamento de cada estado pelo valor total mensal e 
    multiplicar por 100 para obter o percentual de representação de cada estado.
*/

const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// 1. Somando o valor de faturamento de todos os estados
const valorTotalMensal = Object.values(faturamentoMensal).reduce(
  (acc, curr) => acc + curr,
  0
);

// 2. Calculando o percentual de representação de cada estado
const percentuais = {};
for (let estado in faturamentoMensal) {
  percentuais[estado] =
    ((faturamentoMensal[estado] / valorTotalMensal) * 100).toFixed(2) + "%";
}

console.log(percentuais);

/*
Neste exemplo, o objeto faturamentoMensal armazena o valor de faturamento de 
cada estado. A função reduce é utilizada para somar os valores de faturamento de 
todos os estados e obter o valor total mensal da distribuidora.

Em seguida, um laço for...in é utilizado para percorrer o objeto faturamentoMensal 
e calcular o percentual de representação de cada estado. 
O resultado é armazenado no objeto percentuais.

Por fim, o programa exibe o objeto percentuais no console.
*/
