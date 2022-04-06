<?php require '../includes/config.php'; ?>
<!DOCTYPE html>
<html lang="<?=$lang['htmlLang']?>">
<head>
  <?php include '../includes/blocks/head.php' ?>
</head>
<body>
  <?php include '../includes/blocks/header.php' ?>
  <main>
    <div class="p404">
      <h3><?=$lang['err404']?></h3>
      <div>
        <p><?=$lang['err1']?></p>
        <ol>
          <li><?=$lang['err2']?></li>
          <li><?=$lang['err3']?></li>
          <li><?=$lang['err4']?></li>
        </ol> 
      </div>
      <a href="/"><?=$lang['err5']?></a>
    </div>
  </main>
  <?php include '../includes/blocks/footer.php' ?>
</body>
</html>
