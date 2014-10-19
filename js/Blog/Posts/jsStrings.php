<!DOCTYPE html>
<html lang="en-US">
<head>
<!--
<?php 
	$page = "JS Strings";
	include_once("../../Snippets/header.php"); 
?>
-->

<!-- HEADER -->
<!-- Meta -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="robots" content="index, follow">
<meta name="description" content="Kevin A Gleason is a student web designer.">
<meta name="keywords" content="Kevin, Gleason, Ohio, web, design, develop, BC, Boston, Cleveland">
<meta http-equiv="Content-Type" content="text/html"; charset="UTF-8">

<!-- CSS -->
<link href="/V2/style.css" rel="stylesheet" type="text/css">
<link href="/V2/layout.css" rel="stylesheet" type="text/css">
<!-- Fonts -->
<link href='http://fonts.googleapis.com/css?family=Exo+2' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Alegreya+Sans+SC' rel='stylesheet' type='text/css'>

<!-- Scripts -->
<script type="text/javascript" src="/V2/js/jquery.js"> </script>
<script type="text/javascript" src="/V2/js/jquery-color.js"> </script>
<script type="text/javascript" src="/V2/js/jQuery UI/js/jquery-ui-1.10.4.custom.js"> </script>

<!-- Other -->
<title> <?php $page ?> - Kevin Gleason </title>
<!-- END  -->

<link rel="stylesheet" href="/V2/Blog/CSS/blog.css" type="text/css" media="screen" charset="utf-8">

</head>
<!-- PAGE CONTENT -->
<body id = "main-body" >
<div id="bg-gradient"></div>
<!-- <?php include_once("../../Snippets/topInfo.php"); ?> -->
<div class = "page-container">
<!-- 	<?php include_once("../../Snippets/banner.php") ?> -->

	<section id = "light-box" class="dark-theme">
		<center><p class="page-title">JavaScript Strings</p></center>
		<hr class="styled dark"/>
		<div class="box-content">
			<p>String manipulation is a an important thing to know in any coding language. Most languages have a similar arsenal of commands that can be used to modify a string as needed.</p>
			<hr class="styled dark"/>
			<p> JavaScript is no exception, having a wide range of string modifying and fixing functions.</p>
		</div>
	</section>
	<section class="light-theme">
	<center><p class="page-title">Functions</p></center>
	<hr class="styled light" style=""/>
	<div class="box-content">
			<p> Here are a few of the important functions I will be covering:</p>
			<ul id="functions">
				<li>.charAt()</li>
				<li>.concat()</li>
				<li>.indexOf()</li>
				<li>.match()</li>
				<li>.replace()</li>
				<li>.slice()</li>
				<li>.split()</li>
				<li>.search()</li>
				<li>.toLowerCase()</li>
			</ul>
		</div>
	</section>
	<section id="light-box" class="dark-theme">
		<center><p class="page-title">String Function Examples</p></center>
		<p>Think of string manipulation in terms of gathering data off your webpage, fixing it as needed, and serving it back.</p>
		<div id="code-box">
			var s = "hello hello world"; 
			s.replace(/hello/g, "hi");
			console.log(s);
			# "hi hi world";
			
		</div>
	</section>
	<section id="footer">
	<div id="scrollTopButton"><a id = "toTop" href="#scrollToTop">Return to top</a>
	</div>
	</section>

</div>

<script src="/V2/Blog/js/blog.js"></script>
<script type="text/javascript">
	codeNewLine('#code-box');
</script>
</body>
</html>
