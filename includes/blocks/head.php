<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#149862">
<meta name="robots" content="index,follow">
<?php if(!$p404) echo '<link rel="canonical" href="https://alterant.com.ua/' . $lang['htmlLang'] . $uri . '" />'?>
<meta name="google-site-verification" content="KKMg0jZLZikwZ1bg_kkOEQQe8zOwj5ED-z4WG7kqWwE" />
<script src="/public/script/err.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-113979777-1"></script>
<script defer src="/public/script/main.js"></script>
<title><?php $q = $db->query('SELECT '.$lang['htmlLang'].' FROM meta WHERE page="'.$uri.'" and keyName="title"');
        while ($row = $q->fetch()) {
            $titleArticle = $row[$lang['htmlLang']];
            if($uri==='/price_list' || strpos($uri, 'gallery') !== false) {
                echo $row[$lang['htmlLang']].' '.$lang['title'];
            } else {
                    echo $row[$lang['htmlLang']].' '.$lang['fullTitle'];
                }
    }?>
</title>
<meta name="description" content="<?php $q = $db->query('SELECT '.$lang['htmlLang'].' FROM meta WHERE page="'.$uri.'" and keyName="description"');
        while ($row = $q->fetch()) {
        echo $row[$lang['htmlLang']];
    }?>">
<link rel="icon" href="../public/media/img/favicon.ico" type="image/x-icon">
<link href="/public/css/766.css" media="screen and (max-width: 766px)" rel="stylesheet">
<link href="/public/css/992.css" media="screen and (min-width: 767px)" rel="stylesheet">