<!DOCTYPE html>
<html lang="<?=$lang['htmlLang']?>">
<head>
    <script defer src="../public/script/index.js"></script>
    <?php include '../includes/blocks/head.php' ?>
</head>
<body> 
    <?php include '../includes/blocks/header.php' ?>
    <main>
        <section class="slider mainSlider" id="mainSlider">
            <h1><?=$lang['index13']?></h1>
            <div class="sliderWrapper">
                <div class="sliderItems">
                    <div class="sliderItem">
                        <img srcset="/public/media/img/plasticSurgery780.jpg 780w,
                                    /public/media/img/plasticSurgery1280.jpg 1280w, 
                                    /public/media/img/plasticSurgery1920.jpg 1920w"
                            sizes="(max-width: 767px) 100vw, 100vw" src="/public/media/img/plasticSurgery1920.jpg" loading="lazy" alt="<?=$lang['index14']?>">
                        <div class="sliderCard">
                            <h2><?=$lang['index14']?></h2>
                            <p><?=$lang['index15']?></p>
                            <div><a href="<?=$lang['lang']?>/plastic_surgery"><?=$lang['index16']?></a></div>
                            <div><a href="<?=$lang['lang']?>/gallery_plastic_surgery"><?=$lang['index17']?></a></div>
                        </div>
                    </div>
                    <div class="sliderItem">
                        <img srcset="/public/media/img/reconstructiveSurgery780.jpg 780w,
                                    /public/media/img/reconstructiveSurgery1280.jpg 1280w, 
                                    /public/media/img/reconstructiveSurgery1920.jpg 1920w"
                            sizes="(max-width: 767px) 100vw, 100vw" src="/public/media/img/reconstructiveSurgery1920.jpg" loading="lazy" alt="<?=$lang['index18']?>">
                        <div class="sliderCard">
                            <h2><?=$lang['index18']?></h2>
                            <p><?=$lang['index19']?></p>
                            <div><a href="<?=$lang['lang']?>/reconstructive_surgery"><?=$lang['index20']?></a></div>
                            <div><a href="<?=$lang['lang']?>/gallery_reconstructive_surgery"><?=$lang['index17']?></a></div>
                        </div>
                    </div>
                    <div class="sliderItem">
                        <img srcset="/public/media/img/invasiveCosmetology780.jpg 780w,
                                    /public/media/img/invasiveCosmetology1280.jpg 1280w, 
                                    /public/media/img/invasiveCosmetology1920.jpg 1920w"
                            sizes="(max-width: 767px) 100vw, 100vw" src="/public/media/img/invasiveCosmetology1920.jpg" loading="lazy" alt="<?=$lang['index21']?>">
                        <div class="sliderCard">
                            <h2><?=$lang['index21']?></h2>
                            <p><?=$lang['index22']?></p>
                            <div><a href="<?=$lang['lang']?>/invasive_cosmetology"><?=$lang['index23']?></a></div>
                            <div><a href="<?=$lang['lang']?>/gallery_invasive_cosmetology"><?=$lang['index17']?></a></div>
                        </div>
                    </div>
                    <div class="sliderItem">
                        <img srcset="/public/media/img/laserMedicine780.jpg 780w,
                                    /public/media/img/laserMedicine1280.jpg 1280w, 
                                    /public/media/img/laserMedicine1920.jpg 1920w"
                            sizes="(max-width: 767px) 100vw, 100vw" src="/public/media/img/laserMedicine1920.jpg" loading="lazy" alt="<?=$lang['index24']?>">
                        <div class="sliderCard">
                            <h2><?=$lang['index24']?></h2>
                            <p><?=$lang['index25']?></p>
                            <div><a href="<?=$lang['lang']?>/laser_medicine_procedures"><?=$lang['index26']?></a></div>
                            <div><a href="<?=$lang['lang']?>/gallery_laser_medicine_procedures"><?=$lang['index17']?></a></div>
                        </div>
                    </div>
                    <div class="sliderItem">
                        <img srcset="/public/media/img/laserEpilation780.jpg 780w,
                                    /public/media/img/laserEpilation1280.jpg 1280w, 
                                    /public/media/img/laserEpilation1920.jpg 1920w" 
                            sizes="(max-width: 767px) 100vw, 100vw" src="/public/media/img/laserEpilation1920.jpg" loading="lazy" alt="<?=$lang['index27']?>">
                        <div class="sliderCard">
                            <h2><?=$lang['index27']?></h2>
                            <p><?=$lang['index28']?></p>
                            <div><a href="<?=$lang['lang']?>/laser_epilation"><?=$lang['index29']?></a></div>
                            <div><a href="<?=$lang['lang']?>/gallery_lasers-epilation"><?=$lang['index17']?></a></div>
                        </div>
                    </div>
                    <div class="sliderItem">
                        <img  srcset="/public/media/img/treatmentCosmetology780.jpg 780w,
                                    /public/media/img/treatmentCosmetology1280.jpg 1280w, 
                                    /public/media/img/treatmentCosmetology1920.jpg 1920w" 
                            sizes="(max-width: 767px) 100vw, 100vw" src="/public/media/img/treatmentCosmetology1920.jpg" loading="lazy" alt="<?=$lang['index30']?>">
                        <div class="sliderCard">
                            <h2><?=$lang['index30']?></h2>
                            <p><?=$lang['index31']?></p>
                            <div><a href="<?=$lang['lang']?>/treatment_esthetic_procedures"><?=$lang['index32']?></a></div>
                            <div><a href="<?=$lang['lang']?>/gallery_treatment_esthetic_procedures"><?=$lang['index17']?></a></div>
                        </div>
                    </div>
                </div>
                <button class="sliderControl mainSliderControl sliderControlPrev transitionOn" type="button" data-slide="prev">&#10094;</button>
                <button class="sliderControl mainSliderControl sliderControlNext transitionOn" type="button" data-slide="next">&#10095;</button>
            </div>
        </section>    
        <section class="mainIndexContent">
            <h2><?=$lang['index33']?></h2>
            <div class="mediaContent visibleInSm">
            <a class="transitionOn" href="<?=$lang['lang']?>prifile_chystiakova">
                <img loading="lazy" src="/public/media/img/chystiakova.jpg" alt="Анастасия Чистякова">
                <span class="transitionOn"><?=$lang['index34']?></span>
            </a>      
            </div>
            <div class="textContent">
            <p><?=$lang['index35']?></p>
            <p><strong><?=$lang['index36']?></strong></p>
            <p><?=$lang['index37']?></p>
            <p><?=$lang['index38']?><strong><?=$lang['index39']?></strong></p>  
            <p><?=$lang['index40']?><strong><?=$lang['index41']?></strong><?=$lang['index42']?></p>
            <p><strong><?=$lang['index43']?></strong><?=$lang['index44']?></p> 
            <p><strong><?=$lang['index45']?></strong><?=$lang['index46']?></p>
            </div>
            <div class="mediaContent hideInSm">
            <a class="transitionOn" href="<?=$lang['lang']?>/prifile_chystiakova">
                <img src="/public/media/img/chystiakova.jpg" alt="Анастасия Чистякова">
                <span class="transitionOn"><?=$lang['index47']?>
                </span>
            </a>      
            </div>
            <div class="diagBlock"><div class="diagLine"></div></div>
        </section>
        <section class="slider reviewsSlider" id="reviewsSlider">
            <div class="reviewHeader">
                <h2><?=$lang['index48']?></h2>
                <span><?=$lang['index49']?></span>
                <a class="main" rel="noopener" href="https://search.google.com/local/reviews?placeid=ChIJmTzzL_qW30AR88C1eyW_kzw">Google Reviews</a>
            </div>
            <div class="sliderWrapper">
                <div class="sliderItems"></div>
                <button class="sliderControl reviewsSliderControl sliderControlPrev transitionOn" type="button" data-slide="prev">&#10094;</button>
                <button class="sliderControl reviewsSliderControl sliderControlNext transitionOn" type="button" data-slide="next">&#10095;</button>
            </div>
            <div class="goToGReview">
                <div>
                    <a target="_blank" rel="noopener" href="https://search.google.com/local/writereview?placeid=ChIJmTzzL_qW30AR88C1eyW_kzw"><?=$lang['index50']?></a>
                </div>
            </div>
        </section>
    </main>
    <?php include '../includes/blocks/footer.php' ?>
</body>
</html>