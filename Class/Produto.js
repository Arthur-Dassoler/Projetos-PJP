class Produto 
{
    constructor (nome, preco, quantidade)
    {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

mostrarnome()
{
    console.log(this.nome)
}

mostrarpreco()
{
    console.log("O preço do(a)" + this.nome + " é de " + this.preco)
}

mostrarquantidade()
{
    console.log("A quantidade exata desse produto é de " + this.quantidade + " unidades")
}

valorestoque()
{
    return console.log("O valor total dessa compra deu " + this.preco * this.quantidade + " reais")
}
}
let produto1 = new Produto ("Farinha", 5.99, 60)

produto1.mostrarnome()
produto1.mostrarpreco()
produto1.mostrarquantidade()
produto1.valorestoque()