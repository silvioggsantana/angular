class pessoa {
    nome : string;
    idade: number; 

    constructor( nome: string , idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    mostrarDados(){
        console.log( `nome: ${this.nome} , idade: ${this.idade}`);
    }
}

var pessoa1 = new pessoa("Silvio" , 20);

console.log(pessoa1)