let ano_nascimento
let entrada


while (true)
{
    ano_nascimento = parseFloat(prompt("Em qual ano você nasceu?"))
    if (isNaN(ano_nascimento) || !Number.isInteger(ano_nascimento)){
    alert("Por favor, insira uma data válida")
}
    else {break}
}


while(true)
{
    entrada = parseFloat(prompt("Quantos anos terei em..."))
    if (isNaN(entrada) || !Number.isInteger(entrada)){
    alert("Por favor, insira uma data válida")
}
    else {break}
}


if (entrada - ano_nascimento > 140)
{
    console.log("Em " + entrada + " você terá" + (entrada - ano_nascimento) + " anos de idade!")
}
else 
{
    console.log("Em " + entrada + " você terá" + (entrada - ano_nascimento) + " anos de idade")
}