<?php 
include_once "header.php";
include_once "PersonnagesClass.php";
define('path', '/autocompletion/');
// Ceci est à la fois un autoloader, un rooter, le composer (ça veut rien dire) un websocket, ainsi qu'une machine à café.
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']));

Personnages::LoadAllDDB();
?>
<script src="js/indexPage.js"></script>
<script src="js/inputcomplete.js"></script>

<section id="search-engine">



<form id = 'formidex' action="recherche.php"  class="Indexsearchbar" method="get" class="searchform">
   

    <div class="field" class = indexsearch>
            <input type="text" name="search" class="searchbar" class="Indexsearchbar2" id = "indexsearch" placeholder="Perso 2" autocomplete="off">
			<div class="suggestionsExactes">
                <ul></ul>
            </div>
            <div class="suggestions" id = "suggid2">
                <ul></ul>
            </div>

        
    </div>
    
    <input type = "submit" value="🔎🔎" class="btn search-btn">
    
</form>
<h1 class="err-msg"></h1>

</section>

<?php 
include_once "footer.php" ;

$_POST['all'] = Personnages::searchAll();
?>