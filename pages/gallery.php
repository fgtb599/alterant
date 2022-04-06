<!DOCTYPE html>
<html lang="<?=$lang['htmlLang']?>">
<head>
    <?php include '../includes/blocks/head.php' ?>
</head>
<body> 
  <?php include '../includes/blocks/header.php' ?>
  <?php include '../includes/blocks/breadcrumbStatic.php' ?>
  <main>
    <div class="diagBlockContainer">
        <div class="galleryList">
            <a class="galleryListItem" href="<?=$lang['lang']?>/gallery_plastic_surgery">
                <img loading="lazy" class='transitionOn' src="/public/media/img/plasticSurgery780.jpg" alt="<?=$lang['index14']?>">
                <h3 class='transitionOn'><?=$lang['gallery1']?></h3>
            </a>
            <a class="galleryListItem" href="<?=$lang['lang']?>/gallery_reconstructive_surgery">
                <img loading="lazy" class='transitionOn' src="/public/media/img/reconstructiveSurgery780.jpg" alt="<?=$lang['index18']?>">
                <h3 class='transitionOn'><?=$lang['gallery2']?></h3>
            </a>
            <a class="galleryListItem" href="<?=$lang['lang']?>/gallery_invasive_cosmetology">
                <img loading="lazy" class='transitionOn' src="/public/media/img/invasiveCosmetology780.jpg" alt="<?=$lang['index21']?>">
                <h3 class='transitionOn'><?=$lang['gallery3']?></h3>
            </a>
            <a class="galleryListItem"  href="<?=$lang['lang']?>/gallery_laser_medicine_procedures">
                <img loading="lazy" class='transitionOn' src="/public/media/img/laserMedicine780.jpg" alt="<?=$lang['index24']?>">
                <h3 class='transitionOn'><?=$lang['gallery4']?></h3>
            </a>
            <a class="galleryListItem" href="<?=$lang['lang']?>/gallery_laser_epilation">
                <img loading="lazy" class='transitionOn' src="/public/media/img/laserEpilation780.jpg" alt="<?=$lang['index27']?>">
                <h3 class='transitionOn'><?=$lang['gallery5']?></h3>
            </a>
            <a class="galleryListItem" href="<?=$lang['lang']?>/gallery_treatment_esthetic_procedures">
                <img loading="lazy" class='transitionOn' src="/public/media/img/treatmentCosmetology780.jpg" alt="<?=$lang['index30']?>">
                <h3 class='transitionOn'><?=$lang['gallery6']?></h3>
            </a>
        </div>
        <div class="diagBlock"><div class="diagLine"></div></div>
    </div>
  </main>
  <?php include '../includes/blocks/footer.php' ?>
</body>
</html>