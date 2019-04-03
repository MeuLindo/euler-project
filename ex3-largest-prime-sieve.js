const tamanho = 20;


function criaListaTotal(tamanho){
    let listaTotal = []
    for (let i = 2; i <= tamanho; i++) {
        listaTotal.push(i);
    }
    return listaTotal;
}

function removeMX(lista, x){
    let removidos = []
    for(let i = 1 ; i < lista.length; i++){
        if(lista[i] % x !== 0){
            removidos.push(lista[i]);
        }
    }
    return removidos;
}






let listaGrande = criaListaTotal(tamanho);
console.log(listaGrande)
let primeiraRemocao = removeMX(listaGrande, 2);
primeiraRemocao.unshift(2); //Quebra galho
console.log(primeiraRemocao);
let segundaRemocao = removeMX(primeiraRemocao, 3);
segundaRemocao.unshift(3);
console.log(segundaRemocao);

