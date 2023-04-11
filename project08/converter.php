<!DOCTYPE html>
<html>
<head>
    <link href="../layout.css" rel="stylesheet" type="text/css">
	<title>CSV Converter Result</title>
	
</head>
<body>
	<h1>CSV Converter Result</h1>
	<nav>
		<a href="../index.html">Home</a>
		<a href="../projects.html">Projects</a>
		<a href="../cause.html">Cause</a>
	</nav>
	
	<?php
		function converter(array $a) {
			$string = implode(",", $a);
			echo "<p id='results' style='text-align:center'>CSV Results: <br>".$string . "</p>";
		}
			
		
		
		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$form_values = array(
			'fname' => $_POST['fname'],
			'lname' => $_POST['lname'],
			'color' => $_POST['color'],
			'email' => $_POST['email'],
			'phone' => $_POST['phone'],
			'street' => $_POST['streetAdd'],
			'city' => $_POST['city'],
			'state' => $_POST['state'],
			'zip' => $_POST['zip'],
			'country' => $_POST['country'],
			'dob' => $_POST['dob']
		);

		// Do something with the form values
		// ...
		//$csvString = implode(",", $form_values);
		// Print the form values for testing
		//print_r($form_values);
		converter($form_values);
		}
	?>
</body>
</html>