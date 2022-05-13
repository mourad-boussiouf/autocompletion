<?php 
include_once "header.php";
include_once "PersonnagesClass.php";
?>


<section id="results">

<?php 


Personnages::searchLikeNom($_GET["search"]);

if (strlen(file_get_contents("data.json")) > 3) 
{

echo "<h1>".$_GET["search"]."</h1>";

} else {
echo "404 not found";
}
   
?>

</section>


<?php include_once "footer.php" ?>