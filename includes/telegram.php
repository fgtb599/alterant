<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$userName = $_POST['userName'];
$userLastName = $_POST['userLastName'];
$userAge = $_POST['userAge'];
$service = $_POST['service'];
$userPhone = $_POST['userPhone'];
$messenger = $_POST['messenger'];
$userEmail = $_POST['userEmail'];
$qestion1 = $_POST['qestion1'];
$qestion2 = $_POST['qestion2'];
$qestion3 = $_POST['qestion3'];
$pills = $_POST['pills'];
$qestion4 = $_POST['qestion4'];
$qestion5 = $_POST['qestion5'];
$sickness= $_POST['sickness'];
$userComment = $_POST['userComment'];
 // токен нашего бота из botFather
$token = "1985482332:AAEVIsXOcqY-35h4TAQ_lfgtQuNDDY3kYWE";
$chat_id = "-503390318";
$arr = array(
  'Ім\'я:  ' => $userName,
  'Призвище:  ' => $userLastName,
  'Повних років:  ' => $userAge,
  'Напрямок послуг:  ' => $service,
  '_' => ' ',
  'Телефон:  ' => $userPhone,
  'спосіб зв\'язку:  ' => $messenger,
  'Email:  ' => $userEmail,
  '__' => ' ',
  'Онкологічні захворювання?:  ' => $qestion1,
  'Ви курите/курили?:  ' => $qestion2,
  'Алергічні/анафілактичні реакції:  ' => $qestion3,
  '   на які препарати:  ' => $pills,
  'Приймаєте преп. проти згортання?:  ' => $qestion4,
  'Хронічні захворювання:  ' => $qestion5,
  '   які саме:  ' => $sickness,
  '___' => ' ',
  'Коментар:  ' => $userComment
);
foreach($arr as $key => $value) {
  $msg .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$msg}","r");
if ($sendToTelegram) {
  echo ("200");
} else {
  echo ("400");
}

