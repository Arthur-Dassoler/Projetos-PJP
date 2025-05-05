class Animal 
{
    constructor (nome, especie)
    {
        this.nome = nome
        this.especie = especie
    }

mostrarnome()
{
console.log("O nome desse animal é " + this.nome)
}
mostrarespecie()
{
    console.log("A espécie desse animal é " + this.especie)
}
}
let animal1 = new Animal ("Alberto", "Cachorro")

animal1.mostrarnome()
animal1.mostrarespecie()