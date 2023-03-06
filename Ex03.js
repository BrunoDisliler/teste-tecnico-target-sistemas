// Teste Técnico Vaga de Estágio Target Sistemas - Exercício 03

const dadosFaturamento = require("./dadosFaturamento.json");
const valoresDiarios = dadosFaturamento.map(({ valor }) => valor);

const menorValor = Math.min(...valoresDiarios);
const maiorValor = Math.max(...valoresDiarios);

const somaValores = valoresDiarios.reduce((acc, curr) => acc + curr, 0);
const mediaMensal = somaValores / valoresDiarios.length;

const diasAcimaDaMedia = valoresDiarios.filter(
  (valor) => valor > mediaMensal
).length;

console.log(`Menor valor de faturamento diário: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento diário: R$ ${maiorValor.toFixed(2)}`);
console.log(
  `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
);

/*
Depois de declarar a variável "dadosFaturamento" que contém o vetor de objetos com o dia e o 
valor de faturamento, o programa cria as variáveis "menor", "maior" e "soma" e as 
inicializa com o valor do primeiro elemento do vetor "dadosFaturamento". Em seguida, itera sobre 
os demais elementos do vetor "dadosFaturamento", atualizando o valor das variáveis "menor", 
"maior" e "soma" de acordo com o valor do faturamento em cada dia.

Ao final da iteração, o programa calcula a média mensal de faturamento, 
dividindo a soma pelo número de dias em que houve faturamento. O número de dias 
em que o faturamento foi superior à média é calculado em outra iteração sobre os 
elementos do vetor "dadosFaturamento", contando quantos dias tiveram faturamento 
superior à média mensal.

Por fim, o programa imprime os resultados na tela, utilizando a função "console.log". 
A saída é formatada de acordo com as especificações do enunciado, 
utilizando as funções "toFixed" e "toString" para formatar os números com 
o número correto de casas decimais e a mensagem de texto apropriada.
*/
