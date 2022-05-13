


     
	
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- STYLE -->
    <link rel="stylesheet" href="css/style.css">
    
    <!-- SCRIPTS -->
    <script src="js/script.js"></script>
    <script src="js/autocompletion.js"></script>
    <script src="js/scripts/element.js"></script>
</head>
<body>
<header>
    <a href="index.php">
    <img src="https://upload.wikimedia.org/wikipedia/fr/f/f2/Dragon_Ball_Z_Logo.svg" alt="Logo de dragon ball z">
    </a>
    <h1> Search a dbz character !</h1>
    <form action="recherche.php" method="get" class="searchform">

       

        <div class="field">
            <input type="text" name="search" class="searchbar" placeholder="Character's name" autocomplete="off">
            <div class="suggestions">
                <ul></ul>
            </div>
            <button type="button" class="btn reset-btn"></button>
        </div>
        <input type="submit" value="🔎🔎🔎" class="btn search-btn">
    </form>
</header>
<main>