// ===================================================================

// A JORNADA DO HEROI TALENTOSO DO REINO DOS TALENTOS TECNOLÓGICOS
// ===================================================================

/** Em um reino distante, um jovem e talentoso desenvolvedor descobre uma espada mágica que revela seu destino como herói. Com coragem e poucos recursos, ele parte em uma jornada desafiadora.;
 * O CENÁRIO:
 * O jogador é um herói que embarca em uma jornada épica. Ao longo do caminho, ele encontrará inimigos, coletará itens e enfrentará desafios.
 *  * 
 * 
 */

// 2. Criando o Inventário do Herói:
// O herói começa sua aventura com alguns itens básico. Vamos armazenar esses itens em um array.
let inventario = ["Espada de madeira: 3", "escudo", "machado" ]

// 3. Exibindo o inventário inicial do herói
console.log(inventario)

// 4. Encontrando um tesouro
// O herói encontra um baú de tesouro e ganha um novo item!!!!!!!

// 5. Enfrentando um inimigo
// O herói enfrenta um goblin chamado GoblinoDoTigrinho 🐯. Qual arma você vai usar??? 
console.log("Um goblin apareceu!!! Prepare-se para a batalha!!! Dano:13")
// Usando itens do inventário para lutar
let itemUsado1 = inventario[0] /// índice do item
console.log(`Você ataca o goblin com sua ${itemUsado1}`)

// 6. O goblin sentiu o golpe..... agora ele tenta seu último ataque com um dano de 3! Como você finaliza esse adversário?
let itemUsado2 = inventario[0]
console.log(`Você finaliza o goblin com ${itemUsado2}`)

// 7. Um Golem aproveita sua distração e o ataca violentamente com um soco sísmico! Dano: 9.. Como você revida?
let itemUsado3 = inventario[0]
console.log(`Você revida com ${itemUsado3}`)
// calcule seus recursos
recursosResistenciado = 
console.log( `Meus recursos de resistência: ${recursosResistencia}`)
// 8. Finalizando a aventura... por enquanto... Nosso adeus não é para sempre...
// Como você finalizaria o golem? 
let itemUsado4 = inventario[0]
console.log(`O herói finaliza sua aventura com um golpe, utilizando : ${itemUsado4}`)





























const altura = 2  
const largura = 3

const area = altura * largura
console.log(area)

function calcularArea(altura, largura){
    const area = altura * largura
    console.log(area)
}
calcularArea(2, 3)


function imprimirOlaMundo(){
    console.log("Olá Mundo!")
}