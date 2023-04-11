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
		if(isset($_POST['csv'])) {
			$csv = $_POST['csv'];
			$csv_values = explode(",", $csv);
			$formatted_value = "";
			foreach($csv_values as $value) {
				$formatted_value .= "<div>" . trim($value) . "</div>";
			}
			echo $formatted_value;
		}
	?>
</body>
</html>
