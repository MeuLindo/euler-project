/*
"Sift the Two's and Sift the Three's,
    The Sieve of Eratosthenes.
When the multiples sublime,
    The numbers that remain are Prime"
*/
/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
/*
Maior Primo Divisor
Resultado com 1000: 71
Resultado com 10000: 839
Resultado com 100000: 6857
Resultado com 200000: 6857
*/

const big = 200000; // tentativa e erro em força bruta pra achar um tamanho que não devolvesse maior que o anterior.
const alvo = 600851475143;
//FORÇA BRUTA (LENTÃO)
function divisaoTentada(big){
    let primes = [];
    for(i = 2; i <= big; i++){
        let checkprime = 0;
        for(let j = 1; j <= i ; j++){
            if(i % j == 0){
                checkprime++;
            }
        }
        if(checkprime == 2){
            primes.push(i);
            console.log(i);
        }
    }
    return primes;
}



function achaMaiorPrimo(listaPrimos, alvo) { 
    let ganhador = 0;
    for (primo in listaPrimos){
        if(alvo % primo == 0){
            ganhador = primo;
        }
    }
    return ganhador;
}




let listaPrimos = divisaoTentada(big);

console.log('Total de primos achados: ' + listaPrimos.length + ' dentro de: ' + big );

let resultado = achaMaiorPrimo(listaPrimos, alvo);
console.log(resultado);