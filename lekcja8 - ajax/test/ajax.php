<?php
//print_r($_POST); // $_GET
//echo $_POST['name'];
$_POST['lname'] = "Molenda";
sleep(3); // zatrzymanie kodu na 3s
echo json_encode($_POST);
