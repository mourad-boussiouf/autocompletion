document.addEventListener('DOMContentLoaded', () => {
    
    let champs = Array.from(document.getElementsByClassName('field'));

    

    champs.forEach(field => {
        
        const TRUCAREMPLACER = field.getElementsByClassName('searchbar').item(0);
        
        const BOXEXACT = field.querySelector('.suggestions ul');
        const BOX = field.querySelector('.suggestionsExactes ul');


        let allData = [];


        fetch('/autocompletion/ddb.json')
        .then((res) => res.json())
        .then(function(data) {
            data.forEach(function(item) {
                item = item.nom;
                allData.push(item);
            });
            
            

            function search(str) {
                let results = [];
                const val = str.toLowerCase();
            
                for (i = 0; i < allData.length; i++) {
                    if(allData[i].toLowerCase().includes(val)) {
                        results.push(allData[i]);
                    }
                }
            
                return results;
            }

            


            //FONCTION QUI AFFICHE LES RESULTATS AVEC STRING EXACTE DANS L'ORDRE.
            function displayExactMatches(results, inputVal) {
                
                exactMatches.innerHTML = '';
            
                if (results.length > 0) {
                    for (i = 0; i < results.length; i++) {
                        let item = results[i];
                        const listOfResults = item.match(new RegExp(`^${inputVal}`, 'gi'));
                       
                    }
                    //exactMatches.classList.add('has-suggestions');
                } else {
                    //results = [];
                    //exactMatches.innerHTML = '';
                    //exactMatches.classList.remove('has-suggestions');
                }
            }

            //FONCTION QUI AFFICHE LES RESULTATS SIMILAIRES LIKES
            function displayMatches(results, inputVal) {
                
                matches.innerHTML = '';
            
                if (results.length > 0) {
                    for (i = 0; i < results.length; i++) {
                        let item = results[i];
                        const match = item.match(new RegExp(inputVal, 'i'));
                        item = item.replace(match[0], `<strong>${match[0]}</strong>`); // les lettres qui matches avec l'input sont en strong
                        matches.innerHTML += `<li><a href="/autocompletion/element.php/?id=${results[i]}">${item}</a>  ❓</li>`;

                        
                    }


   


                    matches.classList.add('has-suggestions');
                } else {
                    results = [];
                    matches.innerHTML = '';
                    matches.classList.remove('has-suggestions');
                }
            }

            function searchHandler(e) {
                const inputVal = e.currentTarget.value;
                let results = [];
                if (inputVal.length > 0) {
                    results = search(inputVal);
                }
                displayMatches(results, inputVal);
                displayExactMatches(results, inputVal)
            }

            function useSuggestion(e) {
                input.value = e.target.innerText;
                input.focus();
                matches.innerHTML = '';
                matches.classList.remove('has-suggestions');
            }




            

    })
    })

})