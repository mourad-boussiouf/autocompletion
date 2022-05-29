document.addEventListener('DOMContentLoaded', function() {

    //Selectionne l'element balise html ayant l'id result
    const resultDiv = document.querySelector('#outputPart');
    const title = document.querySelector('h2');
    const title2 = document.querySelector('h3');
    const resultDivElement = document.querySelector('#outputPart2');
    let searchHeader = document.getElementById('searchheader');



    
     

    //Si l'url de la page contient "element", afficher une page inidividuelle du perso :
    if(window.location.href.includes('element')) {

        function animate(options) {

            var start = performance.now();
          
            requestAnimationFrame(function animate(time) {
              
              var timeFraction = (time - start) / options.duration;
              if (timeFraction > 1) timeFraction = 1;
          
              var progress = options.timing(timeFraction)
              
              options.draw(progress);
          
              if (timeFraction < 1) {
                requestAnimationFrame(animate);
              }
          
            });
          }

          
// en JS on adore multiplier les documents inutiles et autres poupées russes de append interminables ^^
          let uni = document.createElement('div');
          uni.className = 'uni';
          
          let uniuni = document.createElement('div');
          uniuni.className = 'uniuni';
          uniuni.innerHTML = '<img src="/autocompletion/dragonball.png" alt="une dragon ball">';
        
          uni.append(uniuni);
          resultDivElement.append(uni);

          //paramètre de style css ajouté dynamiquement à la box dédié à l'élément
          resultDivElement.style.display = 'flex';
          resultDivElement.style.flexDirection = 'column';
          resultDivElement.style.justifyContent = 'center';
          resultDivElement.style.alignItems = 'center';
          resultDivElement.style.fontFamily = 'monospace';
          resultDivElement.style.position = 'absolute';
          resultDivElement.style.top = '60%';
          resultDivElement.style.left = '41%';
          searchHeader.style.zIndex = '500';
          resultDivElement.style.zIndex = '1';
          title.style.fontSize = '28px';
          title2.style.fontSize = '21px';
          


            
    }


if(window.location.href.includes('search')) {

    

    fetch('/autocompletion/search.json')
    .then((res) => res.json())
    .then(function(data){

        var foundornot = true;
        data.forEach(function(result) {

            const resultsDiv = document.querySelector('#results');
            
            
            let card = document.createElement('div');
            card.className = 'card';
            
            let personnages = document.createElement('h1');
            personnages.className = 'personnages';
            personnages.innerHTML = result.nom;


            card.append(personnages);

            resultDiv.append(card);

 

            card.addEventListener('click', function() {

                document.location.href = "../autocompletion/element.php?id=" + result.nom;
            });
        });

        if(resultDiv.innerHTML.includes("div")) {

            foundornot = false
            }
if (foundornot === true) {

    let card = document.createElement('div');
    card.className = 'card';
    
    let personnages = document.createElement('h1');
    personnages.className = 'personnages';
    personnages.innerHTML = '404 not found';

    card.append(personnages);

    resultDiv.append(card);


    
}

    })
    .catch((err) => console.log(err));

    
    
}


if(window.location.href.includes('index')) {

    searchHeader.style.visibility = 'hidden';

}

});



        