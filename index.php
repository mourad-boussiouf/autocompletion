<?php 
include_once "header.php";
include_once "PersonnagesClass.php";
define('path', '/autocompletion/');
// Ceci est à la fois un autoloader, un rooter, le composer (ça veut rien dire) un websocket, ainsi qu'une machine à café.
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']));

Personnages::LoadAllDDB();
?>

<section id="search-engine">



<form action="recherche.php" method="get" class="searchform">
   

    <div class="field">
            <input type="text" name="search" class="searchbar" placeholder="Perso 2" autocomplete="off">
			<div class="suggestionsExactes">
                <ul></ul>
            </div>
            <div class="suggestions">
                <ul></ul>
            </div>
        <button type="button" class="btn reset-btn"> </button>
    </div>
    
    <input type="submit" value="🔎🔎🔎" class="btn search-btn">
</form>
<h1 class="err-msg"></h1>

</section>

<?php 
include_once "footer.php" ;

$_POST['all'] = Personnages::searchAll();
?>