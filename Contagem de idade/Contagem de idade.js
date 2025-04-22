let idade = parseFloat(prompt("Qual é a sua idade?"))
if (isNaN(idade)) {
    alert("Por favor, insira um valor válido.")
    return
}
let ano_nascimento = parseFloat(prompt("Em qual ano você nasceu?"))
if (isNaN(ano_nascimento)){
    alert("Por favor, insira uma data válida")
    return
}
// incompleto...