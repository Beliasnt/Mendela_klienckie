<?php
header('Content-Type: image/png');
$im = imagecreatetruecolor(200, 200);
$white = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 0, 0, 0);
$red = imagecolorallocate($im, 255, 0, 0);
imagefilledrectangle($im, 0, 0, 200, 200, $white);
imagestringup($im, 8, 10, 100, "TEST", $black);
imageline($im, 0, 0, 200, 200, $black);
imagefilledellipse($im, 100, 100, 10, 10, $black);

line(0, 50, 200, 50);
line(0, 70, 200, 70);
line(0, 90, 200, 90);
line(0, 150, 200, 150);

imagepng($im);
imagedestroy($im);

function line($xp, $yp, $xk, $yk)
{
    global $im, $red, $black;
    imagesetstyle($im, [$red, $red, $red, $black, $black, $black, $black]);
    imageline($im, $xp, $yp, $xk, $yk, IMG_COLOR_STYLED);
}
kocham ajaksa
a ja nie

----------- index.html -----
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .item {
            border: solid 1px;
            width: 100px;
            height: 100px;
        }
    </style>
    <script>
        function send(sign) {
            fetch("ajax.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    "sign": sign
                })
            })
        }

        setInterval(async () => {
            let r = await fetch("ajax.php?f=get");
            let data = await r.json();
            console.log(data);
            document.getElementsByClassName("item")[0].innerText = data.data;
        }, 1000);
    </script>
</head>

<body>
    <div class="item" onclick="send('x')"></div>
</body>

</html>





--------- ajax.php -----
<?php
//print_r($_POST);

$mysql = mysqli_connect("localhost", "root", "", "x");
mysqli_query($mysql, "set names utf8");
//print_r($db);
//$_POST['sign'] = $_GET['sign'];
if (isset($_POST['sign'])) {
    /*
    // jak na egzamin
    $query = "update data set data='" . $_POST['sign'] . "' where id=1";
    //echo $query;
    // sqlIniection
    // select count(*) as ile from hasala were user="     " and password="       "
    // " or 1=1 --

    mysqli_query($mysql, $query);
    */
    // pro = binding
    $stmt = $mysql->prepare("update data set data=? where id=1");
    $stmt->bind_param('s', $_POST['sign']);
    $stmt->execute();
} elseif (isset($_GET['f'])) {
    $res = mysqli_query($mysql, "select * from data");
    $d = mysqli_fetch_object($res);
    echo json_encode($d);
}

mysqli_close($mysql);








----- db dump ------
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 25, 2024 at 03:11 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `x`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `data` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `data`) VALUES
(1, 'x');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
