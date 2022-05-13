document.addEventListener("DOMContentLoaded", (event) => {


const searchinputs1 =  document.getElementById('searchbox1');
const searchinputs2 = document.getElementById('searchbox2');
const spancomplete1 = document.getElementById('search_result1');
const spancomplete2 = document.getElementById('search_result2');


// renvoi tous les persos de la bdd en json à chaque fois qu'une lettre est tapée dans l'un des deux champs

const searchSaiyan1 = async searchAll =>{
    
    const res = await fetch ('traitement.php');
    const persos = await res.json();
    
// Retourne tous les éléments de la bdd en adéquation avec l'expression régulière calqué sur les inputs des searchbar
    let matches = persos.filter(perso => {
        const regex = new RegExp(`^${searchAll}`, 'gi');
        return perso.nom.match(regex);
    });

    if (searchinputs1.value.length === 0) {
    matches = [];
    }

    console.log(matches);
};


 const searchSaiyan2 = async searchAll =>{
    
    const res = await fetch ('traitement.php');
    const persos = await res.json();
    
// Retourne tous les éléments de la bdd en adéquation avec l'expression régulière calqué sur les inputs des searchbar
    let matches = persos.filter(perso => {
        const regex = new RegExp(`^${searchAll}`, 'gi');
        return perso.nom.match(regex);
    });

    if (searchinputs2.value.length === 0) {
    matches = [];
    }

    console.log(matches);
};  

searchinputs1.addEventListener('input', () => searchSaiyan1(searchinputs1.value));



 searchinputs2.addEventListener('input', () => searchSaiyan2(searchinputs2.value));


})








