<!DOCTYPE html>
<html>
<head>
    <link href="../layout.css" rel="stylesheet" type="text/css">
	<title>Mad Libs</title>
	
</head>
<body>
	<h1>Mad Libs</h1>
	<nav>
		<a href="../index.html">Home</a>
		<a href="../projects.html">Projects</a>
		<a href="../cause.html">Cause</a>
	</nav>
	<?php
		function madlibs(array $a) {
			$string = implode(",", $a);
			$an = "an";
			$b = "a";
			echo "<h3 id='results' style='text-align:center'>The Wacky Adventures of " . (isVowel($a['adj1'])? $b : $an) . " "  . $a['adj1'] . " " . $a['noun1'] . "</h3>";
			echo "<p id='results' style='text-align:center'>Once upon a time, there was " . (isVowel($a['adj1'])? $b : $an) . " "  . $a['adj1'] . " " . $a['noun1'] . " named " . $a['name1'] . ". One day, " . $a['name1'] . " decided to go on " . (isVowel($a['adj2'])? $b : $an) . " "  . $a['adj2'] . " adventure. " . $a['name1'] . " packed " . (isVowel($a['adj3'])? $b : $an) . " "  . $a['adj3'] . " backpack and set off on foot.<br><br>

			As " . $a['name1'] . " walked through the " . $a['adj1'] . " forest, " . $a['name1'] . " encountered a talking " . $a['animal1'] . " who offered to guide " . $a['name1'] . " to the nearest " . $a['noun2'] . ". Along the way, they ran into " . (isVowel($a['adj2'])? $b : $an) . " "  . $a['adj2'] . " group of " . $a['pNoun1'] . " who challenged " . $a['name1'] . " to " . (isVowel($a['verb1'])? $b : $an) . " "  . $a['verb1'] . " competition.<br><br>
			
			" . $a['name1'] . " emerged victorious and continued on the journey, coming across a mysterious, " . $a['adj3'] . " castle. Inside the castle, " . $a['name1'] . " found " . (isVowel($a['adj4'])? $b : $an) . " "  . $a['adj4'] . " room filled with treasure, but also guarded by " . (isVowel($a['adj2'])? $b : $an) . " "  . $a['adj2'] . " dragon. " . $a['name1'] . " used " . (isVowel($a['noun2'])? $b : $an) . " "  . $a['noun2'] . " to defeat the dragon and claimed the treasure.<br><br>
			
			After the adventure, " . $a['name1'] . " returned home with a newfound appreciation for " . $a['adj3'] . " living and a backpack full of treasure.<br><br>
			
			The end.</p>";
		}

		function isVowel($word) {
			return in_array(strtolower(substr($word, 0, 1)), array('a', 'e', 'i', 'o', 'u'));
		  }
		  
		
		
		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$form_values = array(
			'name1' => $_POST['name1'],
			'adj1' => $_POST['adj1'],
			'adj2' => $_POST['adj2'],
			'adj3' => $_POST['adj3'],
			'adj4' => $_POST['adj4'],
			'noun1' => $_POST['noun1'],
			'noun2' => $_POST['noun2'],
			'animal1' => $_POST['animal1'],
			'pNoun1' => $_POST['pNoun1'],
			'verb1' => $_POST['verb1']
		);

		// Do something with the form values
		// ...
		//$csvString = implode(",", $form_values);
		// Print the form values for testing
		//print_r($form_values);
		madlibs($form_values);
		}
	?>
</body>
</html>