function isItWeekendYet(param1){
    let resultat;
    const helas = 'Hélas, non !';
    const oui = 'Oui !'
    switch (param1){
        case 'lundi':
            resultat =  `${helas} C\'était hier !`;
            break;
        case 'mardi':
            resultat =  helas;
            break;
        case 'mercredi':
            resultat = `${helas} Toujours pas !`;
            break;
        case 'jeudi':
            resultat = `${helas} Mais bientôt !`;
            break;
        case 'vendredi':
            resultat = oui;
            break;
        case 'samedi':
            resultat = `${oui} Profite bien !`;
            break;
        case 'dimanche':
            resultat = `${oui} Mais c\'est la fin !`;
            break;
        default:
            resultat = `${helas} Tu es sûr que ${param1} est un jour qui existe ?`;
            break;
    }
    return resultat;
}