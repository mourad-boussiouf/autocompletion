document.addEventListener("DOMContentLoaded", (event) => {


const searchinputs1 =  document.getElementById('searchbox1');
const searchinputs2 = document.getElementById('searchbox2');
const spancomplete1 = document.getElementById('search_result1');
const spancomplete2 = document.getElementById('search_result2');


// search the json $result 

const searchSaiyan = async searchAll =>{
    
    const res = await fetch ('traitement.php');
    const persos = await res.json();

    console.log(persos);
};

searchinputs1.addEventListener('input', () => searchSaiyan(searchinputs1.value));



searchinputs2.addEventListener('input', () => searchSaiyan(searchinputs2.value));


})








