function factorielle (n){
    let acc = 1; 
    for ( let i = 1; i <= n; i++){
        acc *= i;
    }
    return acc;
}

module.exports = {
    'factorielle' : factorielle
}
