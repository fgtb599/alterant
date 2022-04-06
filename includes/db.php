<?php 
try {
  $db = new PDO('mysql:host=alterant.mysql.tools;dbname=alterant_content','alterant_content','Lumia599');
  $db->query("SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
  $db->query("SET CHARACTER SET 'utf8'");
} catch (PDOException $e) {
  echo 'Couldn`t connect to the database ' . $e->getMessage();
}

