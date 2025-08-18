var n1 : number = 10; 

var n2 : number = pegarvalor();

console.log("exemplo do uso da função: " + n2);
console.log("calculando média" + calculcarmedia(30 , 20))

function pegarvalor() {
    return 40;
}

function calculcarmedia(n1:number , n2:number ){
    return (n1 + n2) / 2;
}