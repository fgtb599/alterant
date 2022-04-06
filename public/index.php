<?php 
    require_once '../includes/config.php';
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if(substr($uri, 1, 2) == 'ru' || substr($uri, 1, 2) == 'ua') {
        $uri = substr($uri, 4);
    }
    $uri = '/' . pathinfo($uri)['basename'];
    $_SERVER['REQUEST_URI'] = $uri;
    if($uri === '/') {
        require '../pages/index.php';
        exit();
    }
    if(file_exists('../pages' . $uri. '.php')) {
        require '../pages' . $uri. '.php';
        exit();
    }
    $strposUri = strpos($uri, 'gallery');
    ($strposUri) ? $uriForDynamic = str_replace('gallery_', '', $uri) : $uriForDynamic = $uri;
    $uriDynamic = array('/tummy_tack', '/gallery_tummy_tack', '/mammoplasty', '/brachioplasty', '/dermabrasion_face', '/dermabrasion_body',
        '/liposaction', '/lipofilling', '/mastopexy', '/reduction_mammoplasty', '/reconstr_surg_reduction_mammoplasty', 
        '/reconstr_surg_growth_removal', '/thigh_lift', '/scars', '/reconstr_surg_scars', '/blepharoplasty', '/bullhorn', '/facelift', 
        '/labiaplasty', '/perineoplasty','/vaginoplasty','/mastectomia', '/explantation', '/reconstructive_mammoplasty','/growth_removal', 
        '/removal_mimic_wrinkles', '/biorevitalization','/fillers_hyaluronic','/fillers_hydroxyapatite','/threadlift', 
        '/meso_thread','/mesotherapy','/plasmotherapy','/enzymetherapy','/botulinotherapy_hyperhidrosis', '/fillers_body', 
        '/meso_thread_body', '/mesotherapy_body','/enzymetherapy_body','/fillers_gynecology','/mesotherapy_gynecology','/piercing',
        '/massage_of_the_face_neck_and_upper_chest','/milk_peeling_for_face','/enzyme_peeling','/care_skin','/cosmetic_face_cleansing',
        '/removal_vascular_patology');
    spl_autoload_register(function (string $className) {
        require_once '../includes/' . str_replace('\\', DIRECTORY_SEPARATOR, $className) . '.php';
    });
    if(in_array($uriForDynamic, $uriDynamic)) {
        $controller = new \controllers\dynamicPageController();
        $controller->main($uri, $db, $lang, $strposUri);
        exit();
    }
    require_once '../includes/redirect301.php';
    if(array_key_exists($uri, $redirect301)) {
            header("Location:  http://alterant.com.ua$redirect301[$uri]", TRUE, 301);
            exit();
    }
    require_once '../includes/redirect302.php';
    if(array_key_exists($uri, $redirect302)) {
            header("Location:  http://alterant.com.ua$redirect302[$uri]", TRUE, 302);
            exit();
    }
    switch ($uri):
        case '/telegram':
            require '../includes/telegram.php';
            break;
        case '/sitemap.xml':
            require '../includes/sitemap.php';
            break;
        case '/logerror':
            require '../includes/logerror.php';
            break;
        default:
            $p404 = TRUE;
            header("HTTP/1.0 404 Not Found");
            require '../pages/404.php';
    endswitch;
