function sequence(param){
    let resultat = 0;
    let plage;
    if (param > 0){
        plage = param;
    }
    else{
        plage = -param;
    }
    for (let i = -plage; i <= plage; i++){
        if (i % 2 === 0){
            resultat += i**4;
        }
    }
    return resultat;
}