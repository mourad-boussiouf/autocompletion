<?php 
include_once "header.php";
include_once "PersonnagesClass.php";

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
include_once "PersonnagesClass.php";
$_POST['all'] = Personnages::searchAll();
?>