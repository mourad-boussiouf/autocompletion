
<link rel="stylesheet" href="/autocompletion/css/style.css?v=<?php echo time(); ?>">
<script src="/autocompletion/js/urlchecker.js"></script>
    <script src="/autocompletion/js/script.js"></script>
    <script src="/autocompletion/js/inputcomplete.js"></script>


    
<?php 
include "header.php";
include_once "PersonnagesClass.php";

define('path', '/autocompletion/');
// Ceci est à la fois un autoloader, un rooter, le composer (ça veut rien dire) un websocket, ainsi qu'une machine à café.
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']));

Personnages::LoadAllDDB();
?>
<?php 


class Element {
public static function searchExactNom($nom) {
    $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
    $sql = mysqli_query($connexion, "SELECT * FROM personnages WHERE nom = '$nom'");
    $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
    return $result;
}}

$element = new Element();
$perso = $element->searchExactNom($_GET['id']);
// réinstalle le troisième composer lol non en faite file put() marchait pas alors ça fonctionne en php native par ici
$insert = '[{"id":"'.$perso[0]['id'].'","nom":"'.$perso[0]['nom'].'"}]';

?>

<section id="results">

<h2><?=$perso[0]['id'] ?></h2>
<?php 

echo $perso[0]['id'];
echo $perso[0]['nom'];
?>

</section>

<?php 
include_once "footer.php" ;
include_once "PersonnagesClass.php";
$_POST['all'] = Personnages::searchAll();
?>
