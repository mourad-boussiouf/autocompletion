document.addEventListener('DOMContentLoaded', function() {

    //Selectionne l'element balise html ayant l'id result
    const resultDiv = document.querySelector('#result');
     

    //Si l'url de la page contient "element", afficher une page inidividuelle de résultat :
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

});



        