const factorielle = require("./factorielle.js");
const operation = require("./factorielle.js");

function combinaison(n, p) {
    console.log('--------');
    console.log(`n: ${n}`);
    console.log(`p: ${p}`);
    return (n>p)? `==> Factorielle : ${(operation.factorielle(n))/(operation.factorielle(n-p)*operation.factorielle(p))}`:"==> n est inférieur à p donc impossible de faire le calcul de combinaison"
}

console.log(combinaison(3, 2));
console.log(combinaison(1, 2));
