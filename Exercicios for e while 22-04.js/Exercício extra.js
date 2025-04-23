let numero
let i = 2
while (true)
{
    numero = parseFloat(prompt("Insira um número maior que 0 e menor que 100"))
    if (isNaN(numero) || !Number.isInteger(numero)) 
        {
            alert("Por favor insira um valor válido")
        }
    else {break}
}

if (!Number.isInteger(numero/2)) {
    console.log("Os próximos números impares até o 100 após o " + numero + " serão:")
   do {
        console.log(numero + i)
        i++
        i++
    }
    while((numero + i)<=100)
}
else
{ 
    if (Number.isInteger(numero/2)) {
        console.log("Os próximos números pares até o 100 após o " + numero + " serão")
    do{
        console.log(numero + i)
        i++
        i++
    }
    while((numero + i)<=100)

}
}