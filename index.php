<?php 
include_once "header.php";
include_once "PersonnagesClass.php";

Personnages::LoadAllDDB();
?>

<section id="search-engine">

<a href="index.php">
<img src="https://upload.wikimedia.org/wikipedia/fr/f/f2/Dragon_Ball_Z_Logo.svg" alt="Logo de dragon ball z">
</a>

<form action="recherche.php" method="get" class="search-form">
   

    <div class="field">
            <input type="text" name="search" class="search-bar" placeholder="Chercher un personnage" autocomplete="off">
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