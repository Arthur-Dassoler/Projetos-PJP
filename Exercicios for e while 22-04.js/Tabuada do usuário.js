let numero
let i = 1
while (true) 
{
    numero = parseFloat(prompt("Insira um número e veja sua tabuada até o 10"))
    if (isNaN(numero)) 
    {
        alert("Por favor, insira um valor válido")
    }
    else {break}
}
console.log("Tábuada do " + numero)
do 
{
    console.log(numero * i)
    i++
}
while (i<=10)