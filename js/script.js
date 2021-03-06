document.addEventListener('DOMContentLoaded', () => {
    
    let fields = Array.from(document.getElementsByClassName('field'));
    let headerSearchField = document.getElementById('headersearch');
    let indexSearchField = document.getElementById('indexsearch');
    let downarrowed = false;
    let countli = 0;
    const count1 = 0;
    const count2 = 0;
    
  
    

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
                var count1 = 0;
                exactMatches.innerHTML = '';

                function returnCount1 () {
                var count1 = 0;
                    for (d = 0; d < results.length; d++) {
                        count1++
                    }
                return count1;
                }
                
                if (results.length > 0) {
                    for (i = 0; i < results.length; i++) {
                        let item = results[i];
                        const exactMatch = item.match(new RegExp(`^${inputVal}`, 'gi'));
                        exactMatches.style.borderBottom = '2px dotted black';
                        // les lettres qui matches avec l'input sont en strong
                        item = item.replace(exactMatch[0], `<strong>${exactMatch[0]}</strong>`); 
                        exactMatches.innerHTML += `<span id = "nodelist1"><li><a href="/autocompletion/element.php/?id=${results[i]}"></span>${item}</a></li>`;
                        count1++

                       
//welley jespere le scope du var est bon 
                    }
                    
                    //zebi c'??tait pas trop bon
                    
                    exactMatches.classList.add('has-suggestions');
                } else {
                    count1 = 0;
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
                        matches.innerHTML += `<span id = "nodelist2"><li><a href="/autocompletion/element.php/?id=${results[i]}"></span>${item}</a></li>`;
                        
//welley jespere le scope du var est bon 
                        }

                        const spanNodeList = Array.from(document.querySelectorAll("#nodelist2"));
                        const articleNodeList = Array.from(document.querySelectorAll("#nodelist1"));
                        var countbar = -1;
                        var countbar2 = -1;
                        

// arrow down de la barre header
                    headerSearchField.addEventListener('keydown', function(e) {
                        switch (e.keyCode) {

                            case 40:
                                downarrowed = true;

                                var AllList = Array.from(document.querySelectorAll("li"));
                                var bleachedLi = [];
                                
                                for (h = 0; h < AllList.length; h++) {
                                    bleachedLi.push(AllList[h].innerText);
                                } 

                                if (countbar >= bleachedLi.length - 1) {
                                countbar = -1;
                                AllList[bleachedLi.length - 1].style.background = 'red';
                                AllList[countbar+1].style.background = 'rgb(255,0,0)';
                                AllList[countbar+1].style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 49%, rgba(255,255,255,1) 87%)';
                                }
                                countbar++;
                                

                                headerSearchField.value = bleachedLi[countbar]; 

                                for (m = 0; m < AllList.length; m++) {
                                    if (headerSearchField.value !== bleachedLi[m] ) {
                                        AllList[m].style.background = 'red';
                                        
                                    
                                    };
                                } 

                                if (countbar === 0) {
                                    AllList[0].style.background = 'rgb(255,0,0)';
                                    AllList[countbar].style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 49%, rgba(255,255,255,1) 87%)';
                                }else{
                                    AllList[0].style.background = 'red';
                                    AllList[countbar-1].style.background = 'red';
                                    AllList[countbar].style.background = 'rgb(255,0,0)';
                                    AllList[countbar].style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 49%, rgba(255,255,255,1) 87%)';}
                                break;
                        }


                    var KeyID = event.keyCode;
                    switch(KeyID){
                        //si backspace est trigger, le search engine red??marre et les suggestions se remettent ?? s'actualiser.
                        case 8:
                        downarrowed = false;
                        break; 
                            
                        default:
                        break;
                    }               
                                            });

                    // arrow down de la barre index
                    indexSearchField.addEventListener('keydown', function(e) {
                        switch (e.keyCode) {

                            case 40:
                                downarrowed = true;

                                var AllList = Array.from(document.querySelectorAll("li"));
                                var bleachedLi = [];
                                
                                for (h = 0; h < AllList.length; h++) {
                                    bleachedLi.push(AllList[h].innerText);
                                } 

                                if (countbar2 >= bleachedLi.length - 1) {
                                countbar2 = -1;
                                AllList[bleachedLi.length - 1].style.background = 'red';
                                AllList[countbar2+1].style.background = 'rgb(255,0,0)';
                                AllList[countbar2+1].style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 49%, rgba(255,255,255,1) 87%)';
                                }
                                countbar2++;
                                console.log(countbar2);

                                indexSearchField.value = bleachedLi[countbar2]; 

                                for (m = 0; m < AllList.length; m++) {
                                    if (indexSearchField.value !== bleachedLi[m] ) {
                                        AllList[m].style.background = 'red';
                                        
                                    
                                    };
                                } 

                                if (countbar2 === 0) {
                                    AllList[0].style.background = 'rgb(255,0,0)';
                                    AllList[countbar2].style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 49%, rgba(255,255,255,1) 87%)';
                                }else{
                                    AllList[0].style.background = 'red';
                                    AllList[countbar2-1].style.background = 'red';
                                    AllList[countbar2].style.background = 'rgb(255,0,0)';
                                    AllList[countbar2].style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 49%, rgba(255,255,255,1) 87%)';}
                                break;
                        }


                    var KeyID = event.keyCode;
                    switch(KeyID){
                        //si backspace est trigger, le search engine red??marre et les suggestions se remettent ?? s'actualiser.
                        case 8:
                        downarrowed = false;
                        break; 
                            
                        default:
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
                    if (downarrowed == false) {
                        
                    
                        const inputVal = e.currentTarget.value;
                        let results = [];
                        if (inputVal.length > 0) {
                            results = search(inputVal);
                        }
                        
                        displayMatches(results, inputVal);
                        displayExactMatches(results, inputVal)

                }
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