<div class="preloader">
    <img src="/public/media/img/logoOutline.svg" alt="Логотип">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    <div class="circle circle-5"></div>
</div> 
<div class="headerTitle transitionOn">
    <a class ="prifile_chystiakova" href="<?=$lang['lang']?>/prifile_chystiakova"><?=$lang['header1']?></a><span class="visibleInMedLg"> ||</span>
    <br class="visibleInSm">
    <a class ="aHeaderTitle" href="<?=$lang['lang']?>"><?=$lang['aHeaderTitle']?></a>
</div>
<header>
    <button type="button" class="btnScrollToTop" onclick="scrollUp()">&#923;</button>
    <nav class="navHeader transitionOn">
        <a class="aHeaderLogo" href="<?=$lang['lang']?>"><img src="/public/media/img/logoHeader.svg" alt="Логотип"></a>
        <div class="primary transitionOn">
            <ul class="headerMenu">
                <li class="home"><a class="aHeaderMenu navItems" href="<?=$lang['lang']?>"><?=$lang['header2']?></a></li>
                <li class="procedures">
                    <button type="button" id="procedures" class="aHeaderMenu transitionOn navItems" onclick="showProcedures()"><?=$lang['header3']?></button>
                    <ul class="listProcedures transitionOn">
                        <li><a class="aListProcedures transitionOn <?php echo $breadcrumb2?>" href="<?=$lang['lang']?>/plastic_surgery"><?=$lang['header4']?></a></li>
                        <li><a class="aListProcedures transitionOn" href="<?=$lang['lang']?>/reconstructive_surgery"><?=$lang['header5']?></a></li>
                        <li><a class="aListProcedures transitionOn" href="<?=$lang['lang']?>/invasive_cosmetology"><?=$lang['header6']?></a></li>
                        <li><a class="aListProcedures transitionOn" href="<?=$lang['lang']?>/laser_medicine_procedures"><?=$lang['header7']?></a></li>
                        <li><a class="aListProcedures transitionOn" href="<?=$lang['lang']?>/laser_epilation"><?=$lang['header8']?></a></li>
                        <li><a class="aListProcedures transitionOn" href="<?=$lang['lang']?>/treatment_esthetic_procedures"><?=$lang['header9']?></a></li>
                    </ul>
                </li>
                <li class="prices"><a class="aHeaderMenu transitionOn navItems" href="<?=$lang['lang']?>/price_list"><?=$lang['header10']?></a></li>
                <li class="gallery"><a class="aHeaderMenu transitionOn navItems" href="<?=$lang['lang']?>/gallery"><?=$lang['header11']?></a></li>
                <li class="contact"><button class="aHeaderMenu transitionOn navItems" onclick="goToContacts()"><?=$lang['header12']?></button></li>
                <li class="lang">
                    <a onclick="setLangToLS('ua')" id="ua" class="aHeaderMenu transitionOn <?=$lang['langUA']?>">UA</a>
                    <a onclick="setLangToLS('ru')" id="ru" class="aHeaderMenu transitionOn <?=$lang['langRU']?>">RU</a>
                </li>
                <li class="socialSm transitionOn visibleInSm">
                    <a class="aSocialSm" rel="noopener" target="_blank" href="https://www.instagram.com/alterant.aesthetic/"><img src="/public/media/img/inst.svg" alt="страница instagram"></a>
                    <a class="aSocialSm" rel="noopener" target="_blank" href="https://www.facebook.com/%D0%9E%D0%BB%D1%82%D0%B5%D1%80%D0%B5%D0%BD-%D0%95%D1%81%D1%82%D0%B5%D1%82%D1%96%D0%BA-1906391539385151"><img src="/public/media/img/fb.svg" alt="страница facebook"></a>
                </li>   
            </ul>
        </div>
        <div class="headerTitle2 transitionOn">
            <a class ="prifile_chystiakova" href="<?=$lang['lang']?>/prifile_chystiakova"><?=$lang['header1']?></a><span class="visibleInMedLg"> ||</span>
            <br class="visibleInSm">
            <a class ="aHeaderTitle" href="<?=$lang['lang']?>"><?=$lang['aHeaderTitle']?></a>
        </div>
        <div class="visibleInSm primaryMenuButton transitionOn" onclick="primaryMenuButton()">
            <span class="bar1 bar transitionOn"></span>
            <span class="bar2 bar transitionOn">меню</span>
            <span class="bar3 bar transitionOn"></span>
        </div>
    </nav>
</header>