document.addEventListener("DOMContentLoaded", (event) => {


const searchinputs1 =  document.getElementById('searchbox1');
const searchinputs2 = document.getElementById('searchbox2');
const matchlist1 = document.getElementById('match-list1');
const matchlist2 = document.getElementById('match-list2');


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
    outputHTML1(matches);
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
    outputHTML2(matches);
};  

//Affiche les propositions en div html sous la barre de recherche
const outputHTML1 = matches => {
    if (matches.length > 0) {
    const html = matches.map(match => `
    <div class = "card card-body mb-1">
        <h4><span class = "text-primary">${match.nom}</span></h4>
    </div>
    `
    )
    .join('');

    matchlist1.innerHTML = html;
    }
}
const outputHTML2 = matches => {
    if (matches.length > 0) {
    const html = matches.map(match => `
    <div class = "card card-body mb-1">
        <h4><span class = "text-primary">${match.nom}</span></h4>
    </div>
    `
    )
    .join('');

    matchlist2.innerHTML = html;
    }
}

searchinputs1.addEventListener('input', () => searchSaiyan1(searchinputs1.value));



 searchinputs2.addEventListener('input', () => searchSaiyan2(searchinputs2.value));


})








