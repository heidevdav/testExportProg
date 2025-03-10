const factorielle = require("./factorielle.js");
const operation = require("./factorielle.js");

function combinaison(n, p) {
    return (n>p)? (operation.factorielle(n))/(operation.factorielle(n-p)*operation.factorielle(p)):"n est inférieur à p donc impossible de faire le calcul de combinaison"
}

console.log(combinaison(1, 2));
