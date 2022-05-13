<?php 
include_once "header.php";
include_once "PersonnagesClass.php";
?>


<section id="results">

<?php 


Personnages::searchLikeNom($_GET["search"]);

   
?>

</section>


<?php include_once "footer.php" ?>