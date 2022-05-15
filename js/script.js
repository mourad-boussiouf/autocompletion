document.addEventListener('DOMContentLoaded', () => {

    let fields = Array.from(document.getElementsByClassName('field'));

    fields.forEach(field => {
        
        const rechercheUser = field.getElementsByClassName('searchbar').item(0);
        
        const matches = field.querySelector('.suggestions ul');
        const exactMatches = field.querySelector('.suggestionsExactes ul');

    
        let allData = [];


        fetch('ddb.json')
        .then((res) => res.json())
        .then(function(data) {
            data.forEach(function(item) {
                item = item.nom;
                allData.push(item);
            });
            
            console.log(allData);

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

            //FONCTION QUI AFFICHE LES RESULTATS EXACTES EGAUX
            function displayExactMatches(results, inputVal) {
                
                exactMatches.innerHTML = '';
            
                if (results.length > 0) {
                    for (i = 0; i < results.length; i++) {
                        let item = results[i];
                        const exactMatch = item.match(new RegExp(`^${inputVal}`, 'gi'));
                        item = item.replace(exactMatch[0], `<strong>${exactMatch[0]}</strong>`); // les lettres qui matches avec l'input sont en strong
                        exactMatches.innerHTML += `<li><a href="element.php/?id=${exactMatch}">${item}</a></li>`;
                    }
                    exactMatches.classList.add('has-suggestions');
                } else {
                    results = [];
                    exactMatches.innerHTML = '';
                    exactMatches.classList.remove('has-suggestions');
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
                        matches.innerHTML += `<li>${item}</li>`;

                        
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
            
            rechercheUser.addEventListener('keyup', searchHandler);
            matches.addEventListener('click', useSuggestion);
            

    })
    })

})