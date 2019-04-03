/*
"Sift the Two's and Sift the Three's,
    The Sieve of Eratosthenes.
When the multiples sublime,
    The numbers that remain are Prime"
*/

const big = 100;

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
        }
    }
    return primes;
}

let resultado = divisaoTentada(big);

console.log(resultado);
console.log(resultado.length);
