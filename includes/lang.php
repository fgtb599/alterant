<?PHP
// Проверяем префикс языка в URL
$user_url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$user_url = substr($user_url, 1, 2);
if($user_url == 'ua') {
    return include('uk.php');
} else if($user_url == 'ru') {
    return include('ru.php');
}
// Проверяем язык браузера
$locale = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
$locale = substr($locale, 0, 2);
switch($locale) :
   case 'ru': include('ru.php'); break;
   case 'uk': include('uk.php'); break;
   default: include('ru.php'); break;
endswitch;
