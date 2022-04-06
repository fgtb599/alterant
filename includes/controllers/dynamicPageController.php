<?php
namespace Controllers;

class dynamicPageController
{   
    public function main($uri, $db, $lang, $strposUri)
    {   
        if (!$strposUri) {
            require '../templates/articleTemplate.php';
        } else {
                require '../templates/galleryTemplate.php';
            }
    }
}