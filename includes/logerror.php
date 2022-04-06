<?php 
$date = $_POST['date'];
$uri =$_POST['uri'];
$error = $_POST['error'];
$errLog = $date . ' URI: ' . $uri . ' ERROR: ' . $error;
if(is_writable('../errLogs.txt')) {
    if(!$errLogs = fopen('../errLogs.txt','a')) {
        echo '500';
        exit;
    } 
    if(fwrite($errLogs, $errLog . PHP_EOL) === FALSE) {
        echo '500';
        exit;
    }
    fclose($errLogs);
} else {
        echo '500';
    }


