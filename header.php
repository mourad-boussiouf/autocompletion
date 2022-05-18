
        <!DOCTYPE html>
<html lang="en">
<head>
<script src="js/urlchecker.js"></script>
    <script src="js/script.js"></script>
    <script src="js/inputcomplete.js"></script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DBZ fusion</title>
    <!-- STYLE -->
    <link rel="stylesheet" href="css/style.css">
    
    <!-- SCRIPTS -->


</head>
<body>
<header>
    <div id = "logodiv">
    <a href="/autocompletion/index.php">
    <img src="/autocompletion/Dragon_Ball_Z_Logo.svg" alt="Logo de dragon ball z">
    </a>
    </div>
    <h4> Search a dbz character !</h4>
    <section id="search-engine">
    <form action="/autocompletion/recherche.php" method="get" class="searchform">

       

        <div class="field">
            <input type="text" name="search" class="searchbar" placeholder="Perso 1" autocomplete="off">
            <div class="suggestionsExactes">
                <ul></ul>
            </div>
            <div class="suggestions">
                <ul></ul>
            </div>
            
        </div>
        <input type="submit" value="🔎" class="btn search-btn">
    </form>
    

</header>
</section>
<main>