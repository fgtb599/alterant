<div class="gallerys">
    <?php
        $imgNum = 1;
        while($resObjGallery[img . $imgNum] != '') {
            echo '<div class="gallerysItem gallerysItemGalleryLevel">';
                echo '<div class="containerImgGallery"><img loading="lazy" class="transitionOn galleryLevel openGal" srcset="/public/media/img/gallery' .  $resObjGallery[img . $imgNum] . '_' . $imgNum . '_before_780.jpg 780w,
                        /public/media/img/gallery' . $resObjGallery[img . $imgNum] . '_' . $imgNum . '_before_1280.jpg 1280w, 
                        /public/media/img/gallery' . $resObjGallery[img . $imgNum] . '_' . $imgNum . '_before_1920.jpg 1920w"
                        src="/public/media/img/gallery' . $resObjGallery[img . $imgNum] . '_' . $imgNum . '_before_1920.jpg" 
                        alt="' . $resObjGallery[img . $imgNum . Alt] . $lang['beforeGal'] . '"></div>';
                echo '<div class="containerImgGallery"><img loading="lazy" class="transitionOn galleryLevel openGal" srcset="/public/media/img/gallery' .  $resObjGallery[img . $imgNum] . '_' . $imgNum . '_after_780.jpg 780w,
                        /public/media/img/gallery' . $resObjGallery[img . $imgNum] . '_' . $imgNum . '_after_1280.jpg 1280w, 
                        /public/media/img/gallery' . $resObjGallery[img . $imgNum] . '_' . $imgNum . '_after_1920.jpg 1920w"
                        src="/public/media/img/gallery' . $resObjGallery[img . $imgNum] . '_' . $imgNum . '_after_1920.jpg" 
                        alt="' . $resObjGallery[img . $imgNum . Alt] . $lang['afterGal'] . '"></div>';
                echo '<div class="transitionOn"><h4 class="transitionOn">' . $resObjGallery[img . $imgNum . Description] . '</h4></div>';
                if (strpos($resObjGallery[img . $imgNum], 'adult')) echo '<div class="adult"><p class="adultP1">' . $lang['adult1Gal'] . '</p><button type="button" onclick="adultControl(true)">' . $lang['btn1Gal'] . '</button><button type="button"  onclick="adultControl(false)">' . $lang['btn2Gal'] . '</button><p class="adultP2">' . $lang['adult2Gal'] . '</p></div>';
                if (strpos($resObjGallery[img . $imgNum], 'filling')) echo '<div class="adult"><p class="adultP3">' . $lang['adult3Gal'] . '</p></div>';
                echo '</div>';
            ++$imgNum;
        }
    ?>
</div>