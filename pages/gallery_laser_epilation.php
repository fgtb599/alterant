<!DOCTYPE html>
<html lang="<?=$lang['htmlLang']?>">
<head>
    <?php include '../includes/blocks/head.php' ?>
    <script defer src="../public/script/gallery.js"></script>
</head>
<body> 
    <?php include '../includes/blocks/header.php' ?>
    <?php $pdoGallery = $db->query('SELECT keyName, '.$lang['htmlLang'].' FROM gallery WHERE page="'. $uri .'" ');
    $resObjGallery = $pdoGallery->fetchAll(PDO::FETCH_KEY_PAIR);
    $breadcrumb2 = $resObjGallery[breadcrumb2];
    $titleArticle = $resObjGallery[breadcrumb2title];
    include '../includes/blocks/breadcrumbStaticGallerys.php';
    ?>
    <main>
        <div class="diagBlockContainer">
        <?php 
            echo '<h1 class="h1GalleryLevel">' . $resObjGallery[title] . '</h1>';
            include '../includes/blocks/gallery.php';
        ?>
        <div class="diagBlock"><div class="diagLine"></div></div>
        </div>
    </main>
    <?php include '../includes/blocks/footer.php' ?>
</body>
</html>