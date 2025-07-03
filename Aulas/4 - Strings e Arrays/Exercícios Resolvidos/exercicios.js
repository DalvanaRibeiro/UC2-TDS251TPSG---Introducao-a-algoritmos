/* // Ex1. Raças de Cachorro

// Criando uma array com 5 raças de cachorro

const racasDeDogs = ["cusco", "pitbull", "vira-lata", "caramelo","pinscher"]
//const primeiraPosicao = racasDeDogs[0]
// imprimir a raça da primeira posição da array
console.log(`A raça da primeira posição é: ${racasDeDogs[0]}`)
console.log(`A raça que mais gosto é: ${racasDeDogs[3]}`)

*/
//======================================================
// Ex2. Guarda-roupa

// Criando o guarda-roupa
let guardaRoupa = [
    "pijama", 
    "terno",
     "calça jeans",
    "camisa de banda",
    "vestido",
    "casaco",
    "salto",
    "tênis",
]

// Exibindo o conteúdo do guarda ropua topzeira
console.log(`Meu guarda roupa é composto pelas peças: ${guardaRoupa}`)

// Montar os looks
// Look para dar um role no parque
let lookParque =[ guardaRoupa[2], guardaRoupa[3], guardaRoupa[6]]
console.log( `Meu look para ir no parque é: ${lookParque}`)

//================================================================
// Ex. Lanche

// construir as arrays dos lanches

let lancheHomer = ["rosquinha","rosquinha","rosquinha"]
let lancheScooby = ["hambúrguer", "batata-frita", " milkshake", "biscoito", "pizza"]
let lancheMagali = ["melancia", "maça", "banana", "abacate"]
let lancheBobEsponja = ["hambúrguer de siri", "refri", "batata", "sorvete", "molho secreto"]

// Escrevendo a quantidade de itens usando length

console.log(`O lanche do Homer tem ${lancheHomer.length} itens.` )
console.log(`O lanche do Scooby tem ${lancheScooby.length} itens.` )
console.log(`O lanche da Magali tem ${lancheMagali.length} itens.` )
console.log(`O lanche do Bob tem ${lancheBobEsponja.length} itens.` )

// Ex4 Pokemons
pokemonsCapturados =["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]
console.log(pokemonsCapturados.includes("Pikachu"))
console.log(pokemonsCapturados.includes("Meowth"))

// Ex7. Unshift

let marcas = ["Samsung", "LG", "Iphone3000", "Xiaomi"]
console.log(marcas)
// Adicionado "Motorola" no início
marcas.unshift("Motorola")
// Imprimindo a lista
console.log(`A lista atualizada é: ${marcas}`)

// Exercício Splice
// Obs.: A prof pede perdão por esquecer o slide :( 
// Criando o baralho inicial 
let deck = ["Pikachu", "Charmander", "Bulbasauro", "Pikachu","Squirtle", "Meowth"]
// 1. remover o repetido (índice 3)
//  splice(3,1) remove 1 elemento considerando o índice 3
deck.splice(3, 1) 
console.log(deck)

// 2. Inserir o Snorlax entre 3 e 4
// Aqui meus queridos aluninho, podemos utilizar o splice para adicionar tmb... porém utilizando o 0 na sintaxe aquela, logo:
// splice(i,n) ---> a partir/na posicao i retiro n elementos
// quando usamos o 0 no lugar do n - sinalizamos que não estamos tirando nada... então ele adiciona
// muito obrigada pela compreensão... amo vcs :x
// Vamos então aplicar
deck.splice(3,0, "Snorlax")
console.log(deck)
// Adicionar a Eevee no lugar do Meowtrh 
deck.splice(5,1, "Eeevee")
console.log(deck)



let pacote1 = ["Pikachu", "Bulbasaur", "Charmander"];
let pacote2 = ["Squirtle", "Jigglypuff"];
let pacote3 = ["Meowth", "Snorlax", "Eevee"];

// Juntando todos os pacotes com .concat()
let cartasTotais = pacote1.concat(pacote2, pacote3);

// Exibindo todas as cartas no console
console.log("Cartas totais:", cartasTotais);

// Contando quantas cartas há no total
console.log("Quantidade total de cartas:", cartasTotais.length);


//===============================

let frase = "   Eu adoro JavaScript e estudar com meus colegas incríveis !   ";

// 1. Remover espaços no início e no fim
frase = frase.trim();

// 2. Converter para caixa baixa
let fraseCaixaBaixa = frase.toLowerCase();

// 3. Verificar se inclui a palavra "javascript"
let incluiJavaScript = fraseCaixaBaixa.includes("javascript");
console.log("Inclui 'javascript'?", incluiJavaScript);

// 4. Substituir todas as ocorrências de "javascript" por "TypeScript"
let fraseFinal = fraseCaixaBaixa.replace("javascript", "TypeScript");

console.log("Frase final:", fraseFinal);



//=========================================
// Array inicial
let frutas = ["maçã", "banana", "laranja"];

// 1. Adiciona "morango" no final com push()
frutas.push("morango");

// 2. Adiciona "abacaxi" no começo com unshift()
frutas.unshift("abacaxi");

// 3. Remove o primeiro elemento com shift()
frutas.shift();

// 4. Remove o último elemento com pop()
frutas.pop();

// 5. Remove o elemento na posição 1 e adiciona "manga" com splice()
frutas.splice(1, 1, "manga");

// Exibe o array final
console.log(frutas);


//=====================================
// Array inicial
let nomes = ["Ana", "Bruno", "Carlos"];

// 1. Converte todos os nomes para maiúsculas usando .map() e .toUpperCase()
nomes = nomes.map(nome => nome.toUpperCase());

// 2. Verifica se algum nome contém a letra "a" (minúscula) usando .some()
// Como todos os nomes estão em maiúsculas agora, buscamos por "A"
let contemLetraA = nomes.some(nome => nome.includes("A"));
console.log("Algum nome contém a letra 'A'?", contemLetraA); // true ou false

// 3. Adiciona "Lucas" ao final do array (também em maiúsculas)
nomes.push("LUCAS");

// 4. Remove o primeiro nome com .shift()
nomes.shift();

// 5. Mostra a lista atualizada
console.log("Lista atualizada de nomes:", nomes);


const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));

const resultado = num1 + num2;

console.log(`A soma de ${num1} + ${num2} é: ${resultado}`);