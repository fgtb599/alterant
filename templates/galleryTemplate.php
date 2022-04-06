<!DOCTYPE html>
<html lang="<?=$lang['htmlLang']?>">
<head>
    <?php include '../includes/blocks/head.php' ?>
    <script defer src="../public/script/gallery.js"></script>
</head>
<body> 
  <?php include '../includes/blocks/header.php';
  if(strpos($uri, 'reconstr_surg_')) {
    $reconstr_surg_breadcrumb2 = TRUE;
    $uri = str_replace('reconstr_surg_', '', $uri);
  };  
  $pdoGallery = $db->query('SELECT keyName, '.$lang['htmlLang'].' FROM gallery WHERE page="'. $uri .'" ');
  $resObjGallery = $pdoGallery->fetchAll(PDO::FETCH_KEY_PAIR);
  $breadcrumb2 = $resObjGallery[breadcrumb2];
  $breadcrumb2title = $resObjGallery[breadcrumb2title];
  $breadcrumb3title = str_replace('<br>', ' ', $resObjGallery[title]);
  if($reconstr_surg_breadcrumb2) {
    $breadcrumb2 = '/gallery_reconstructive_surgery/';
    $breadcrumb2title = $lang['header5'];
  }
  include '../includes/blocks/breadcrumbGallery.php'; ?>
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