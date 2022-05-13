<?php 

    $bdd = new PDO("mysql:host = localhost ; dbname=autocompletion", 'root', '');
    $var = $bdd->prepare("SELECT * FROM personnages");
    $var->execute();
    $result = $var->fetchAll();

    if (isset($result)) {
    echo json_encode($result);
    }



	

?>
