//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

function multiplos(num, k){
    let multiplos = [];
    let i = 1;
    
    while(i*k < num){
        multiplos.push(i*k);
        
        i++;
    }
    return multiplos;
}

function somaArray(array){
    let soma = 0;
    for(let i = 0; i < array.length  ; i++){
        soma += array[i];
        
    }
    return soma;
}

function removeDuplicas(array){
    for(i = 0; i < array.length; i++){
        if(array[i] % 3 == 0){
            array[i] = 0;
        }
    }
    return array;
}

let multiplosCinco = multiplos(1000, 5); //Primeira variável define até onde procurar, e segunda variável define o passo
let multiplosTres = multiplos(1000, 3);
let multiplosCincoMenosTres = removeDuplicas(multiplosCinco);


let somaCinco = somaArray(multiplosCincoMenosTres);
let somaTres = somaArray(multiplosTres);
let total = somaCinco + somaTres

console.log(total);