<?php 
include_once "header.php";
include_once "PersonnagesClass.php";
?>


<section id="results">

<?php 


Personnages::searchLikeNom($_GET["search"]);

if (strlen(file_get_contents("data.json")) > 3) 
{

echo "<h1>".$result."</h1>";

} else {
echo "<h1>404 not found</h1>";
}
   
?>

</section>


<?php include_once "footer.php" ?>