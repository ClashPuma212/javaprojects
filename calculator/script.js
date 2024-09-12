// Solicitar a operação desejada
let operacao = prompt("Escolha a operação: + (adição), - (subtração), * (multiplicação), / (divisão)");

// Solicitar os dois números
let numero1 = parseFloat(prompt("Insira o primeiro número:"));
let numero2 = parseFloat(prompt("Insira o segundo número:"));

// Inicializar uma variável para armazenar o resultado
let resultado;

// Executar a operação com base na escolha do usuário
if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    if (numero2 !== 0) {  // Evitar divisão por zero
        resultado = numero1 / numero2;
    } else {
        alert("Erro: Divisão por zero não permitida!");
        resultado = "Indefinido";
    }
} else {
    alert("Operação inválida!");
    resultado = "Operação inválida";
}

// Exibir o resultado
if (resultado !== "Indefinido" && resultado !== "Operação inválida") {
    alert(`Resultado: ${resultado}`);
}
