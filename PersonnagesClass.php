<?php

class Personnages {

    public static function searchAll() {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM personnages");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        file_put_contents('data.json', json_encode($result));
    }

    public static function LoadAllDDB() {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM personnages");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        file_put_contents('ddb.json', json_encode($result));
    }

    public static function searchLikeId($id) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE id = $id");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        file_put_contents('data.json', json_encode($result));
    }

    public static function searchLikeNom($nom) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE nom LIKE '$nom%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        file_put_contents('data.json', json_encode($result));
    }

}