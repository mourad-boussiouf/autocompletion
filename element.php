<link rel="stylesheet" href="/autocompletion/css/style.css?v=<?php echo time(); ?>">
<?php 
include "header.php";
include_once "PersonnagesClass.php";


class Element {
public static function searchExactNom($nom) {
    $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
    $sql = mysqli_query($connexion, "SELECT * FROM personnages WHERE nom = '$nom'");
    $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
    return $result;
}}

$element = new Element();
$perso = $element->searchExactNom($_GET['id']);

$insert = '[{"id":"'.$perso[0]['id'].'","nom":"'.$perso[0]['nom'].'"}]';

file_put_contents('lolilol.json', $insert);



?>

<section id="results">



<?php 

echo $perso[0]['id'];
echo $perso[0]['nom'];
?>

</section>

<?php include_once "footer.php" ?>



