<?php 

$bdd = new PDO("mysql:host = localhost ; dbname=autocompletion", 'root', '');

if (isset($_POST['seachbox1'])) {
	$search1 = $_POST['searchbox1'];
    $bdd = new PDO("mysql:host = localhost ; dbname=autocompletion", 'root', '');
    $var = $bdd->prepare("SELECT personnages FROM autocompletion WHERE personnages LIKE '%".$search1."%' ORDER BY id DESC LIMIT 10");
    $var->execute();
    $result = $var->PDOStatement::fetch();

    echo json_encode($result);



    if (empty($result)) {
       
            $match = false;
            echo json_encode([]);
	
		
        
	}


	
}
?>
