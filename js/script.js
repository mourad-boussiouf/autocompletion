document.addEventListener('DOMContentLoaded', () => {
    
    let fields = Array.from(document.getElementsByClassName('field'));
    let headerSearchField = document.getElementById('headersearch');
    let downarrowed = false;
    
    

    fields.forEach(field => {
        
        const rechercheUser = field.getElementsByClassName('searchbar').item(0);
        
        const matches = field.querySelector('.suggestions ul');
        const exactMatches = field.querySelector('.suggestionsExactes ul');


        let allData = [];


        fetch('/autocompletion/ddb.json')
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

            

            function replaceWithSuggs(results, inputVal) {
                rechercheUser.addEventListener('keyup', searchHandler);
            }

            //FONCTION QUI AFFICHE LES RESULTATS AVEC STRING EXACTE DANS L'ORDRE.
            function displayExactMatches(results, inputVal) {
                
                exactMatches.innerHTML = '';
                
                if (results.length > 0) {
                    for (i = 0; i < results.length; i++) {
                        let item = results[i];
                        const exactMatch = item.match(new RegExp(`^${inputVal}`, 'gi'));
                        exactMatches.style.borderBottom = '2px dotted black';
                        // les lettres qui matches avec l'input sont en strong
                        item = item.replace(exactMatch[0], `<strong>${exactMatch[0]}</strong>`); 
                        exactMatches.innerHTML += `<span><li><a href="/autocompletion/element.php/?id=${results[i]}"></span>${item}</a>  ✅</li>`;
//welley jespere le scope du var est bon 
                    }
                    //zebi c'était pas trop bon
                    


                    

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
                        matches.innerHTML += `<span><li><a href="/autocompletion/element.php/?id=${results[i]}"></span>${item}</a>  ❓</li>`;
//welley jespere le scope du var est bon 
                        }


                        var liNodeList = Array.from(document.querySelectorAll("span"));
                        
                        
                    



                    headerSearchField.addEventListener('keydown', function(e) {
                        switch (e.keyCode) {
                            case 40:
                                console.log(liNodeList.length);
                                var washedLi = [];
                                var bleachedLi = [];
                                
                                 for (h = 0; h < liNodeList.length; h++) {
/*                                  

                                    washedLi[a] = liNodeList[a].replace(`<a href="/autocompletion/element.php/?id=`,``);
                                    bleachedLi[a] =  liWashed[a].replace(`"></a>`,``); */

                                } 
/*                                 downarrowed = true;
                                count++
                                headerSearchField.value = results[count]; */

                                

                                break;
                        }
                    });
   


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


            rechercheUser.addEventListener('keydown', replaceWithSuggs);
            matches.addEventListener('click', useSuggestion);
            

    })
    })

})