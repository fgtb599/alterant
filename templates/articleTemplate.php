<!DOCTYPE html>
<html lang="<?=$lang['htmlLang']?>">
<head>
  <?php include '../includes/blocks/head.php' ?>
  <script defer src="../public/script/gallery.js"></script>
</head>
<body> 
  <?php include '../includes/blocks/header.php' ?>
  <?php if(strpos($uri, 'reconstr_surg_')) {
          $reconstr_surg_breadcrumb2 = TRUE;
          $uri = str_replace('reconstr_surg_', '', $uri);
        };
        $pdo = $db->query('SELECT keyName, '.$lang['htmlLang'].' FROM article WHERE page="'. $uri .'" ');
        $resObj = $pdo->fetchAll(PDO::FETCH_KEY_PAIR);
        $breadcrumb2 = $resObj[breadcrumb2];
        $breadcrumb2title = $resObj[breadcrumb2title];
        $breadcrumb3title = str_replace('<br>', ' ', $resObj[title]);
        if($reconstr_surg_breadcrumb2) {
          $breadcrumb2 = '/reconstructive_surgery/';
          $breadcrumb2title = $lang['index20'];
        }
        $btn2Article = (strpos($resObj[breadcrumb2], 'surgery')) ? $lang['btn2ArticleSurg'] : $lang['btn2ArticleCosm'];
        $btn3Article = (strpos($resObj[breadcrumb2], 'surgery')) ? $lang['btn3ArticleSurg'] : $lang['btn3ArticleCosm'];
        include '../includes/blocks/breadcrumbArticles.php' ?>
  <main class='mainArticleContent'>
    <?php echo '<section class="articleHeader">
            <div><h1>' . $resObj[title] .'</h1>' . $resObj[mainHeader] .'</div>
            <img loading="lazy" class="imgHeader" srcset="/public/media/img/article' .  $resObj[imgHeader] . '_header_780.jpg 780w,
            /public/media/img/article' . $resObj[imgHeader] . '_header_1280.jpg 1280w, 
            /public/media/img/article' . $resObj[imgHeader] . '_header_1920.jpg 1920w"
            src="/public/media/img/article' . $resObj[imgHeader] . '_header_1920.jpg" 
            alt="' . $lang['Article1'] . ' ' . $resObj[imgHeaderAlt] . '">
          </section>
        <div class="articleSections">
          <h3 class="toggleHeader"><button class="transitionOn btnphotogallery" type="button" onclick="toggleList(\'photogallery\')">' . $lang['btn0Article'] . '</button></h3>      
          <section class="articleSection photogallery articleToggleContainer articleHideWidthHeight transitionOn"><h2>' . $lang['btn0Article'] . '</h2>' . $resObj[photogallery];
          $pdoGallery = $db->query('SELECT keyName, '.$lang['htmlLang'].' FROM gallery WHERE page="/gallery_'. substr($uri, 1) .'"');
          $resObjGallery = $pdoGallery->fetchAll(PDO::FETCH_KEY_PAIR);
          include '../includes/blocks/gallery.php'; 
          echo '</section>
          <h3 class="toggleHeader"><button class="transitionOn btnmain1" type="button" onclick="toggleList(\'main1\')">' . $lang['btn1Article'] . $resObj[planing] . '</button></h3>      
          <section class="articleSection main1 articleSectionOn articleToggleContainer articleHideWidthHeight transitionOn">';
          if($resObj[img1] != '') {  
              echo '<img loading="lazy" class="imgSection" srcset="/public/media/img/article' .  $resObj[img1] . '_1_780.jpg 780w,
              /public/media/img/article' . $resObj[img1] . '_1_1280.jpg 1280w, 
              /public/media/img/article' . $resObj[img1] . '_1_1920.jpg 1920w"
              src="/public/media/img/article' . $resObj[img1] . '_1_1920.jpg" 
              alt="' . $lang['Article1'] . ' ' . $resObj[img1Alt] . '">';
          }
          echo $resObj[main1] . '</section>
          <h3 class="toggleHeader"><button class="transitionOn btnmain2" type="button" onclick="toggleList(\'main2\')">' . $btn2Article . '</button></h3>      
          <section class="articleSection main2 articleToggleContainer articleHideWidthHeight transitionOn">';  
          if($resObj[img2] != '') {  
            echo '<img loading="lazy" class="imgSection" loading="lazy" srcset="/public/media/img/article' .  $resObj[img2] . '_2_780.jpg 780w,
              /public/media/img/article' . $resObj[img2] . '_2_1280.jpg 1280w, 
              /public/media/img/article' . $resObj[img2] . '_2_1920.jpg 1920w"
              src="/public/media/img/article' . $resObj[img2] . '_2_1920.jpg" 
              alt="' . $lang['Article1'] . ' ' . $resObj[img2Alt] . '">';
          }
          echo $resObj[main2] . '</section>
          <h3 class="toggleHeader"><button class="transitionOn btnmain3" type="button" onclick="toggleList(\'main3\')">' . $btn3Article . '</button></h3>      
          <section class="articleSection main3 articleToggleContainer articleHideWidthHeight transitionOn">';
          if($resObj[img3] != '') {  
            echo '<img loading="lazy" class="imgSection" loading="lazy" srcset="/public/media/img/article' .  $resObj[img3] . '_3_780.jpg 780w,
              /public/media/img/article' . $resObj[img3] . '_3_1280.jpg 1280w, 
              /public/media/img/article' . $resObj[img3] . '_3_1920.jpg 1920w"
              src="/public/media/img/article' . $resObj[img3] . '_3_1920.jpg" 
              alt="' . $lang['Article1'] . ' ' . $resObj[img3Alt] . '">';
          }
          echo $resObj[main3] . '</section>
          <h3 class="toggleHeader"><button class="transitionOn btnmain4" type="button" onclick="toggleList(\'main4\')">' . $lang['btn4Article'] . '</button></h3>      
          <section class="articleSection main4 articleToggleContainer articleHideWidthHeight transitionOn"><h2>' . $lang['btn4Article'] . '</h2>';
          $priceElem = explode(';',$resObj[price]);
          if (($handle = fopen('../csvData/price.csv', 'r')) !== FALSE) {
            while (($price = fgetcsv($handle, 1000, ';')) !== FALSE) {
              if($lang['htmlLang'] == 'ru') {
                $p0 = $price[0];
                $p1 = $price[1];
                $p2 = $price[2];
                $p3 = $price[3];
                $p4 = $price[11];
              } else {
                $p0 = $price[6];
                $p1 = $price[7];
                $p2 = $price[8];
                $p3 = $price[9];
                $p4 = $price[11];
                }
              // кількість полей y table mysql
              $num = count($price);
              if($price[5] === 'startOfPrice') {
                echo '<table class="articlePrice">
                        <tbody>';
                } else {
                  for ($c=0; $c < $num; $c++) {
                    if($c==2 && $price[1] != 'end') {
                      for($a=0; $a<count($priceElem); $a++) {
                        if($priceElem[$a] === $p4) {
                          echo '<tr><td>' . $p2 . '</td>';
                        }
                      }
                    } 
                    if($c==3 && $price[1] != 'end') {
                      for($a=0; $a<count($priceElem); $a++) {
                        if($priceElem[$a] === $p4) {
                          echo '<td>' . $p3 . '</td></tr>';
                        }
                      }
                    } 
                  }
              }
              if($price[5] === 'endOfPrice') {
                echo '</tbody>
                    </table>';
              }

            }
            fclose($handle);
          }
          echo '<p class="notice">' . $lang['price1'] . '</p></section>
      </div>
      <div class="articleButtons"><button type="button" onclick="toggleArticleSection(\'.photogallery\', 0)">' . $lang['btn0Article'] . '</button>
      <button type="button" onclick="toggleArticleSection(\'.main1\', 1)">' . $lang['btn1Article'] . $resObj[planing] . '</button>
      <button type="button" onclick="toggleArticleSection(\'.main2\', 2)">' . $btn2Article . '</button>
      <button type="button" onclick="toggleArticleSection(\'.main3\', 3)">' . $btn3Article . '</button>
      <button type="button" onclick="toggleArticleSection(\'.main4\', 4)">' . $lang['btn4Article'] . '</button></div>
      <p>' . $lang['endOfArticle'] . '</p>
      <div class="diagBlock"><div class="diagLine"></div></div>'
    ?>
  </main>
  <?php include '../includes/blocks/footer.php' ?>
</body>
</html>