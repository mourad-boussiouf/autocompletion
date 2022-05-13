<?php 

    $bdd = new PDO("mysql:host = localhost ; dbname=autocompletion", 'root', '');
    
    $var = $bdd->prepare("SELECT * FROM personnages WHERE nom LIKE %$_GET% ");
    $var->execute();
    $result = $var->fetchAll();

    if (isset($result)) {
    echo json_encode($result);
    }



	

?>
