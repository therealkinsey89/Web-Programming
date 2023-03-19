<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="layout.css" rel="stylesheet" type="text/css">
    <title>Project 03</title>
</head>
<body>
    <?php
        $cels=$_GET["celsius"];
        $constant = 9/5;
    ?>
    <header>
        <h1>Project 03</h1>
    </header>
    <nav>
        <a href="../index.html">Home</a>
        <a href="../projects.html">Projects</a>
        <a href="../cause.html">Cause</a>
    </nav>
    <h2 id="p2header">Celsius to Fahrenheit Conversion</h2>
    <form action="process.php" method="get" class="myform">
        <label>Celsius</label><br>
        <input type="number" name="celsius" id="celsius"><br>
        <input type="submit" value="Process">
    </form>
    <?php
        $result = $cels * $constant;
        $result += 32;
        echo "<p id='result'> $cels degrees Celsius is $result degrees Fahrenheit. <br>Thank you for using this conversion tool!";
    ?>    
</body>
</html>
