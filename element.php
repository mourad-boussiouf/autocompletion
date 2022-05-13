<?php 
include_once "header.php";
include_once "PersonnagesClass.php";

Personnages::searchLikeId($_GET['id']);
?>