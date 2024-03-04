<?php
session_start();
echo session_id();
$_SESSION['who'] = "X";
print_r($_SESSION);
