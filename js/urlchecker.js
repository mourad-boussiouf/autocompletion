document.addEventListener('DOMContentLoaded', function() {

    //Selectionne l'element balise html ayant l'id result
    const resultDiv = document.querySelector('#result');
    const title = document.querySelector('h2');
    
     

    //Si l'url de la page contient "element", afficher une page inidividuelle du perso :
    if(window.location.href.includes('element')) {
    
        fetch('data.json')
        .then((res) => res.json())
        .then(function(data) {

            data.forEach(function(result) {

                
                let matchbox = document.createElement('div');
                matchbox.className = 'matchbox';

                let nom = document.createElement('h1');
                nom.className = 'nom';
                nom.innerHTML = result.nom;


                matchbox.append(nom);

            resultDiv.append(matchbox);
        });
    })
    .catch(function(error) { 
        console.log(error);
    });

}


if(window.location.href.includes('search')) {

    

    fetch('search.json')
    .then((res) => res.json())
    .then(function(data){

        
        data.forEach(function(result) {

            const resultsDiv = document.querySelector('#results');

            
            let card = document.createElement('div');
            card.className = 'card';
            
            let personnages = document.createElement('h1');
            personnages.className = 'personnages';
            personnages.innerHTML = result.nom;


            card.append(personnages);

            resultsDiv.append(card);


            card.addEventListener('click', function() {

                document.location.href = "../app/element.php?id=" + result.id;
            });
        });
    })
    .catch((err) => console.log(err));

    
}

});



        