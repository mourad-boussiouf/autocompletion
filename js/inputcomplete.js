document.addEventListener('DOMContentLoaded', function() {
    

    let searchValue = "";
    
    // remplace le champs recherché par le texte ciblé par le click dans la liste de suggestion.

    let fields = Array.from(document.getElementsByClassName('field'));
    fields.forEach(function(field) {
        
    
        const input = field.getElementsByTagName('input').item(0);
        const resetBtn = field.getElementsByClassName('reset-btn').item(0);
        const searchBtn = field.getElementsByClassName('search-btn').item(0);
    
        if(searchValue != "") {
            searchBtn.addEventListener('click', function() {
                input.value = searchValue;
            });
        }
    
        resetBtn.addEventListener('click', function() {
            input.value = "";
        });
    });
    
})