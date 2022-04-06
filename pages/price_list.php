<!DOCTYPE html>
<html lang="<?=$lang['htmlLang']?>">
<head>
  <?php include '../includes/blocks/head.php' ?>
</head>
<body> 
  <?php include '../includes/blocks/header.php' ?>
  <?php include '../includes/blocks/breadcrumbStatic.php' ?>
  <main>
    <div class="gradWrapper">
      <?php
      if (($handle = fopen('../csvData/price.csv', 'r')) !== FALSE) {
        while (($price = fgetcsv($handle, 1000, ';')) !== FALSE) {
          if($lang['htmlLang'] == 'ru') {
            $p0 = $price[0];
            $p1 = $price[1];
            $p2 = $price[2];
            $p3 = $price[3];
          } else {
            $p0 = $price[6];
            $p1 = $price[7];
            $p2 = $price[8];
            $p3 = $price[9];
            }
          $num = count($price);
          if($price[0] != '' && $price[0] != 'end' && $price[5] != 'startOfPrice') {
            echo '<h3 class="toggleHeader"><button class="transitionOn btn' . $price[4] . '" type="button" onclick="toggleList(`' . $price[4] . '`)">' . $p0 . '</button></h3>
                  <section class="toggleContainer ' . $price[4] . ' transitionOn hideWidthHeight">';
            } else if($price[1] != '' && $price[1] != 'end') {
              echo '<h3 class="toggleHeader"><button class="transitionOn btn' . $price[4] . '" type="button" onclick="toggleList(`' . $price[4] . '`)">' . $p1 . '</button></h3>
                    <div class="toggleContainer ' . $price[4] . ' transitionOn hideWidthHeight">
                        <table>
                          <tbody>';
              } else {
                for ($c=0; $c < $num; $c++) {
                  if($c==2 && $price[1] != 'end') {
                      echo '<tr><td>' . $p2 . '</td>';
                  } 
                  if($c==3 && $price[1] != 'end') {
                    echo '<td>' . $p3 . '</td></tr>';
                  } 
                }
            }
          if($price[1] == 'end') {
            echo '</tbody>
                </table>
              </div>';
          } else if($price[0] == 'end') {
            echo '</section>';
          }

        }
        fclose($handle);
      }
      ?>
      <p class="notice"><?=$lang['price1']?></p>
    </div>
  </main>
  <?php include '../includes/blocks/footer.php' ?>
</body>
</html>