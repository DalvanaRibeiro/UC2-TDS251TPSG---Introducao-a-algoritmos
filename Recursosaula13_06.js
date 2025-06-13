// --- RESUMO DE MÉTODOS E PROPRIEDADES ESTUDADOS EM JS ---

// 1. length - tamanho de string ou array
let arr = [1, 2, 3];
console.log(arr.length); // 3

let texto = "Olá";
console.log(texto.length); // 3

// 2. toLowerCase() - converte string para minúsculas
let nome = "JOÃO";
console.log(nome.toLowerCase()); // "joão"

// 3. toUpperCase() - converte string para maiúsculas
let nome2 = "joão";
console.log(nome2.toUpperCase()); // "JOÃO"

// 4. trim() - remove espaços no início e fim da string
let texto2 = "  Olá mundo  ";
console.log(texto2.trim()); // "Olá mundo"

// 5. includes() - verifica se string ou array contém valor
let frase = "Eu gosto de JS e de comer berga no intervalo.";
console.log(frase.includes("gosto")); // true

let frutas = ["maçã", "banana"];
console.log(frutas.includes("banana")); // true

// 6. replaceAll() - substitui todas as ocorrências de texto em string
let frase2 = "Java é legal. Java é poderoso.";
console.log(frase2.replaceAll("Java", "TypeScript"));
// "TypeScript é legal. TypeScript é poderoso."

// 7. push() - adiciona elementos no final do array
let nums = [1, 2];
nums.push(3);
console.log(nums); // [1, 2, 3]

// 8. unshift() - adiciona elementos no começo do array
let nums2 = [2, 3];
nums2.unshift(1);
console.log(nums2); // [1, 2, 3]

// 9. shift() - remove e retorna o primeiro elemento do array
let nums3 = [1, 2, 3];
let primeiro = nums3.shift();
console.log(primeiro); // 1
console.log(nums3); // [2, 3]

// 10. pop() - remove e retorna o último elemento do array
let nums4 = [1, 2, 3];
let ultimo = nums4.pop();
console.log(ultimo); // 3
console.log(nums4); // [1, 2]

// 11. splice() - remove, substitui ou adiciona elementos em posição específica
let nums5 = [1, 2, 3, 4];

// Remove 1 elemento na posição 1 (o número 2)
nums5.splice(1, 1);
console.log(nums5); // [1, 3, 4]

// Adiciona "5" na posição 2, sem remover nada
nums5.splice(2, 0, 5);
console.log(nums5); // [1, 3, 5, 4]

// Substitui 1 elemento na posição 0 por "10"
nums5.splice(0, 1, 10);
console.log(nums5); // [10, 3, 5, 4]
