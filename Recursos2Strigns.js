// ==========================
// Folha de Recurso: Métodos de Strings em JavaScript
// ==========================

let texto = "  Olá, JavaScript! Vamos aprender strings.  ";

console.log("Texto original:", texto);

// 1. trim() – Remove espaços do início e do fim
let textoTrim = texto.trim();
console.log("1. trim():", textoTrim);

// 2. toLowerCase() – Converte tudo para minúsculas
let textoMin = textoTrim.toLowerCase();
console.log("2. toLowerCase():", textoMin);

// 3. toUpperCase() – Converte tudo para maiúsculas
let textoMaius = textoTrim.toUpperCase();
console.log("3. toUpperCase():", textoMaius);

// 4. includes() – Verifica se um trecho existe na string
let contemJavaScript = textoMin.includes("javascript");
console.log("4. includes('javascript'):", contemJavaScript);

// 5. replace() – Substitui parte da string
let textoSubstituido = textoMin.replace("javascript", "TypeScript");
console.log("5. replace('javascript', 'TypeScript'):", textoSubstituido);

// 6. replaceAll() – Substitui todas as ocorrências
let textoMulti = "JS é legal. Aprender JS é divertido.";
let substituido = textoMulti.replaceAll("JS", "JavaScript");
console.log("6. replaceAll('JS', 'JavaScript'):", substituido);

// 7. slice() – Corta parte da string por posição
let cortado = textoTrim.slice(6, 16); // do caractere 6 até antes do 16
console.log("7. slice(6, 16):", cortado);


