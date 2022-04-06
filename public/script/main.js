function getLangFromLS() {
  var langFromLS = window.localStorage.getItem('lang'),
  langFromUrl = window.location.pathname.substring(1,3),
  pathFromUrl = window.location.pathname.substring(4);
  if(langFromUrl == 'ru' || langFromUrl == 'ua') {
    if(langFromLS != langFromUrl) {
      var newUrl = window.location.origin + '/' + langFromLS + '/' + pathFromUrl;
      document.location.replace(newUrl);
    }  
  }
}
if(window.localStorage.getItem('lang') != null) getLangFromLS();
window.onload = function() {
  if(document.querySelector('.mainSlider')) getMainSlider();
  document.querySelector('.preloader').style.opacity = '0';
  setTimeout(function(){
    document.querySelector('.preloader').style.display = 'none';
    document.body.style.overflow = 'auto';
    if(window.innerWidth>=767) document.body.style.marginRight = '0';
  }, 500);
};
// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-113979777-1');
addEventListener('click', (e) => {
  if(e.target.nodeName === 'A' && e.target.getAttribute('href') != null && !e.target.getAttribute('target')) {
    e.preventDefault();
    document.querySelector('.preloader').style.display = 'flex';
    setTimeout(function() {
      document.querySelector('.preloader').style.opacity = '1';
      document.body.style.overflow = 'hidden';
      if(window.innerWidth>=767) document.body.style.marginRight = '10px';
    }, 10);
    setTimeout(function() {
      window.location = e.target.getAttribute('href');
    }, 500);
    setTimeout(function() {
      document.body.style.overflow = 'auto';
      if(window.innerWidth>=767) document.body.style.marginRight = '0';
      document.querySelector('.preloader').style.display = 'none';
    }, 700);
  }
});
// ----------------------------------------------------------
function setActiveNavInem() {
  var currentPathname = window.location.pathname,
  navItems = document.querySelectorAll('.navItems'),
  listProceduresItems = document.querySelectorAll('.aListProcedures');
  if (document.querySelector('.breadcrumb2')) {
    var breadcrumb2 = document.querySelector('.breadcrumb2').getAttribute('href');
  }
  if(currentPathname == '/' || currentPathname == '/ru' || currentPathname == '/ua') {
    navItems[0].classList.add('activePage');
  }  else {
      for(let i=0; i<navItems.length; i++) {
        if(navItems[i].getAttribute('href') == breadcrumb2) {
          return navItems[i].classList.add('activePage');
        }
      }
      for(let i=0; i<navItems.length; i++) {
        if(listProceduresItems[i].getAttribute('href') == breadcrumb2) {
          navItems[1].classList.add('activePage');
          listProceduresItems[i].classList.add('activePageList');
        }
      }
    }  
}
setActiveNavInem();

//get the google review witch google business API ----------------------------------------------------------
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmTzzL_qW30AR88C1eyW_kzw&fields=name,rating,review&key=AIzaSyBQLDjoDfDNqR1xOYFcKkFsJGmlhoKlTec"; // site that doesn’t send Access-Control-*
// var reviews = fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.json())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

// const url = "script/reviews.json";
// var reviews = fetch(url)
// .then(response => response.json())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
function changeLang() {
  var fullPathname = window.location.pathname,
  pathname = fullPathname.substring(3),
  substringPathname = fullPathname.substring(1,3),
  uaBtn = document.getElementById('ua'),
  ruBtn = document.getElementById('ru'),
  newPathname = '';
    if(substringPathname == 'ru') {
    newPathname = '/ua' + pathname;
    uaBtn.setAttribute('href', newPathname);
    } else  if(substringPathname == 'ua') {
        newPathname = '/ru' + pathname;
        ruBtn.setAttribute('href', newPathname);
      } else {
        uaBtn.setAttribute('href', '/ua' + fullPathname + '');
        ruBtn.setAttribute('href', '/ru' + fullPathname + '');
      }
}
changeLang();
function setLangToLS(lang) {
  window.localStorage.setItem('lang', lang);
}
//  header----------------------------------------------------------
function setPrimaryTop() {
  let primary = document.querySelector('.primary'),
  navHeader = document.querySelector('.navHeader').getBoundingClientRect();
  primary.style.top = navHeader.y + navHeader.height - 1 + 'px';
}
function setBreadCrumbsTop() {
  let breadcrumbs = document.querySelector('.breadcrumbs'),
  navHeader = document.querySelector('.navHeader').getBoundingClientRect();
  breadcrumbs.style.top = navHeader.y + navHeader.height - 1 + 'px';
}
if(window.innerWidth<767 && document.querySelector('.breadcrumbs')) setBreadCrumbsTop();
window.addEventListener('scroll', function() {
    let scrollPosition = Math.round(window.scrollY),
    navHeader = document.querySelector('.navHeader'),
    currentWidth = window.innerWidth,
    mainSlider = document.querySelector('.mainSlider'),
    primary = document.querySelector('.primary'),
    btnScrTop = document.querySelector('.btnScrollToTop'),
    headerTitle = document.querySelector('.headerTitle'),
    headerTitle2 = document.querySelector('.headerTitle2'),
    aHeaderLogo = document.querySelector('.aHeaderLogo');
    if(scrollPosition>6 && typeof(mainSlider) != 'undefined' && mainSlider != null && currentWidth >= 767) {
        mainSlider.style.height = "94vh";
    }
    if(scrollPosition>20) {
        if(document.querySelector('.breadcrumbs')) {
          setBreadCrumbsTop();
        }
        if(currentWidth >= 767) {
            primary.style.width = "86%";
        }
        if(currentWidth < 767) {
            primary.style.width = "100%";
        }
        aHeaderLogo.style.height = "100%";
        aHeaderLogo.style.top = "0";
        navHeader.style.backgroundColor = "#149862"; //@primHeaderBgCol:
        headerTitle.style.color = '#149862';
        headerTitle2.style.opacity = '1';
        headerTitle2.style.zIndex = 'inherit';
        let bar = document.querySelectorAll('.bar');
        navHeader.style.height = "max(6vh, 3rem)";
        for(let i = 0; i<bar.length; i++) {
          if(i!=1) {
            bar[i].style.backgroundColor = "#fff"; //@headerFontColor:
            bar[i].style.width = "3rem";
          }
        }
        bar[1].style.color = "#fff"; //@headerFontColor:
        bar[0].style.marginTop = ".5vh";
        bar[1].style.marginTop = "0";
        bar[2].style.marginTop = ".3vh";
        bar[1].style.fontWeight = "normal";
        let changeBar1 = document.getElementsByClassName('change bar1')[0];
        if(changeBar1){
            changeBar1.classList.remove('change');
            changeBar1.classList.add('changeSm');
        }
        let changeBar2 = document.getElementsByClassName('change bar2')[0];
        if(changeBar2){
            changeBar2.classList.remove('change');
            changeBar2.classList.add('changeSm');
        }
        let changeBar3 = document.getElementsByClassName('change bar3')[0];
        if(changeBar3){
            changeBar3.classList.remove('change');
            changeBar3.classList.add('changeSm');
        }
    }
    if(scrollPosition>600) {
    btnScrTop.style.opacity = ".5";
    btnScrTop.style.bottom = "45px";
    }
    if(scrollPosition <= 6 && typeof(mainSlider) != 'undefined' && mainSlider != null && currentWidth >= 767) {
        mainSlider.style.height = "86vh";
    }
    if(scrollPosition <= 20) {
      headerTitle.style.color = '#ffffff';
      headerTitle2.style.opacity = '0';
      headerTitle2.style.zIndex = '-1';
      navHeader.style.height = "max(8vh, 3rem)";
      navHeader.style.backgroundColor = "#54c380"; 
      let bar = document.querySelectorAll('.bar');
          for(let i = 0; i<bar.length; i++) {
            if(i!=1) {
              bar[i].style.backgroundColor = "#016146"; //@headerFontColor:
              bar[i].style.width = "3.5rem";
            }
          }
          bar[1].style.color = "#016146"; //@headerFontColor:
          bar[0].style.marginTop = "0";
          bar[1].style.marginTop = ".3rem";
          bar[1].style.fontWeight = "bold";
          bar[2].style.marginTop = ".5rem";
      if(currentWidth >= 767) {
          let aHeaderList = document.querySelectorAll('.aHeaderMenu');
          for(let i = 0; i<aHeaderList.length; i++) {
            aHeaderList[i].style.transition = "all .5s"; //@headerTransition
          }
      }
      aHeaderLogo.style.height = "130%";
      aHeaderLogo.style.top = "-6vh";
      let changeBar1 = document.getElementsByClassName('changeSm bar1')[0];
      if(changeBar1){
          changeBar1.classList.remove('changeSm');
          changeBar1.classList.add('change');
      }
      let changeBar2 = document.getElementsByClassName('changeSm bar2')[0];
      if(changeBar2){
          changeBar2.classList.remove('changeSm');
          changeBar2.classList.add('change');
      }
      let changeBar3 = document.getElementsByClassName('changeSm bar3')[0];
      if(changeBar3){
          changeBar3.classList.remove('changeSm');
          changeBar3.classList.add('change');
      }
      if(currentWidth >= 767) {
          primary.style.width = "84%";
      }
      if(currentWidth < 767) {
        primary.style.width = "100%";
      }
    }
    if(scrollPosition<600) {
      btnScrTop.style.opacity = "0";
      btnScrTop.style.bottom = "-45px";
    }
});
// ----------------------------------------------------------
// set Margin for Article Buttons
screenWidth = window.innerWidth;
function replacAarticleButtons(secNum = 1) {
  var articleButtons = document.querySelector('.articleButtons');
  articleButtons.style.top = 'calc(6vh + ' + document.querySelector('.breadcrumbs').clientHeight + 'px)';
  if(screenWidth >= 992) {
    (secNum != 0) ? articleButtons.style.marginTop = 'calc(' + document.querySelector('.main' + secNum  + ' h2').clientHeight + 'px + 1.4rem)' : articleButtons.style.marginTop = 'calc(' + document.querySelector('.photogallery h2').clientHeight + 'px + 1.4rem)';
  } else if(screenWidth >= 767) {
    articleButtons.style.marginTop = '0';
  }
  // set full width for container of photogallery
  document.querySelector('.gallerys').style.padding = '0';
  var gallerysItemGalleryLevel = document.querySelectorAll('.gallerysItemGalleryLevel');
  var g = 0;
  while(gallerysItemGalleryLevel[g]) {
    gallerysItemGalleryLevel[g].style.width = '100%';
    g++;
  }
}
if(document.querySelector('.articleButtons') && document.querySelector('.main1 h2')) {
  document.querySelector('.articleButtons').children[1].classList.add('active');
  replacAarticleButtons();
}
//resize Slider Card
function resizeSliderCard(size) {
  var sliderCard = document.querySelectorAll('.sliderCard');
  if(size == 'big')
  for(let i=0; i<sliderCard.length; i++) {
    sliderCard[i].style.height = '16rem';
    sliderCard[i].style.width = '30rem';
  } else if(size == 'small') {
    for(let i=0; i<sliderCard.length; i++) {
      sliderCard[i].style.top = '20%';
    }
  }
}
if(document.querySelector('.sliderCard') && window.innerHeight < 500 && window.innerWidth >= 767) {
  resizeSliderCard('big');
  document.querySelector('.footerLastPart').style.height = 'auto';
}
if(document.querySelector('.sliderCard') && window.innerHeight < 500 && window.innerWidth <= 767) {
  resizeSliderCard('small');
  document.querySelector('.footerLastPart').style.height = 'auto';
  document.querySelector('.headerTitle').style.flexFlow = 'row';
}
window.addEventListener('resize', function() {
  if(typeof(galBox) != 'undefined') galBox.closeBox();
  if(document.querySelector('.reviewsSlider')) truncateReview.truncate();
  setTimeout(function() {
    let currentWidth = window.innerWidth,
    mainSlider = document.querySelector('.mainSlider'),
    primary =  document.querySelector('.primary'),
    articleButtons = document.querySelector('.articleButtons'),
    sliderCard = document.querySelectorAll('.sliderCard');
    if(currentWidth < 767 && currentWidth != screenWidth) {
      primary.style.width = "100%";
      primary.style.display = "none";
      primary.style.left = '100%';
      document.body.style.overflow = 'auto';
      if(typeof(mainSlider) != 'undefined' && mainSlider != null) {
        document.querySelectorAll('.mainSliderControl')[0].style.top = "31.5%";
        document.querySelectorAll('.mainSliderControl')[1].style.top = "31.5%";
      }
      let changeBar = document.querySelectorAll('.bar');
      for(let i = 0; i<changeBar.length; i++) {
        changeBar[i].classList.remove("change");
      }
      if(articleButtons) {
        articleButtons.style.marginTop = '0';
      }
      for(let i = 0; i<changeBar.length; i++) {
         changeBar[i].classList.remove("changeSm");
      }
      if(sliderCard) {
        for(let i=0; i<sliderCard.length; i++) {
          sliderCard[i].style.width = '100%';
          sliderCard[i].style.height = '65%';
        }
      }
      if(window.innerHeight < 500) {
        document.querySelector('.footerLastPart').style.height = 'auto';
        document.querySelector('.headerTitle').style.flexFlow = 'row';
        document.querySelector('.visibleInMedLg').style.display = 'inline-block';
        for(let i=0; i<sliderCard.length; i++) {
          sliderCard[i].style.top = '20%';
        }
      } else {
        document.querySelector('.footerLastPart').style.height = '84vh';
        document.querySelector('.headerTitle').style.flexFlow = 'column';
        document.querySelector('.visibleInMedLg').style.display = 'none ';
        for(let i=0; i<sliderCard.length; i++) {
          sliderCard[i].style.top = '35%';
        }
      }
      if(document.querySelector('.articleSection ') && screenWidth > 767) {
        var articleSections = document.querySelectorAll('.articleSection ');
        for(let i=0; i<articleSections.length; i++) {
          articleSections[i].setAttribute('style', '');
          articleSections[i].style.height = '0px';
          articleSections[i].classList.add('articleToggleContainer');  
        }
        if(document.querySelectorAll('.activePage')){
          var activePageBtns = document.querySelectorAll('.activePage');
          for(let i=0; i<activePageBtns.length; i++) {
            activePageBtns[i].classList.remove('activePage');
            activePageBtns[i].classList.remove('rotate');
          }
        }
      }
      return screenWidth = currentWidth;
    }
    if(currentWidth >= 767 && currentWidth != screenWidth) {
      document.querySelector('.headerTitle').style.flexFlow = 'row';
      document.querySelector('.visibleInMedLg').style.display = 'inline-block';
      primary.style.width = "84%";
      primary.style.display = "block";
      primary.style.left = '0px';
      document.querySelector('.listProcedures').style.height = '0px';
      document.body.style.marginRight = '0'
      document.body.style.overflow = 'auto';
      if(typeof(mainSlider) != 'undefined' && mainSlider != null) {
        document.querySelectorAll('.mainSliderControl')[0].style.top = "calc(50% - 22px)";
        document.querySelectorAll('.mainSliderControl')[1].style.top = "calc(50% - 22px)";
      }
      if(articleButtons && currentWidth >= 992) {
        articleButtons.style.marginTop = 'calc(' + document.querySelector('.main1 h2').clientHeight + 'px + 1.4rem)';
      } else if(articleButtons && currentWidth >= 767) {
        articleButtons.style.marginTop = '0';
      }
      if(sliderCard && window.innerHeight < 500) {
        for(let i=0; i<sliderCard.length; i++) {
          sliderCard[i].style.width = '30rem';
          sliderCard[i].style.height = '16rem';
          sliderCard[i].style.top = '2vw';
        }
      } else {
        for(let i=0; i<sliderCard.length; i++) {
          sliderCard[i].style.width = '20rem';
          sliderCard[i].style.height = '25rem';
          sliderCard[i].style.top = '2vw';
        }
      }
      if(document.querySelector('.articleSection ')) {
        var articleSections = document.querySelectorAll('.articleSection ');
        for(let i=0; i<articleSections.length; i++) {
          articleSections[i].setAttribute('style', '');
        }
      }
      document.querySelector('.footerLastPart').style.height = 'auto';
      return screenWidth = currentWidth;
    }
  
  }, 500);
});
// ----------------------------------------------------------
function primaryMenuButton() {
    setPrimaryTop();
    function changeBars() {
      var changeBar = document.querySelectorAll('.bar');
      if(Math.round(window.scrollY)<=20) {
        for(let i = 0; i<changeBar.length; i++) {
            changeBar[i].classList.toggle('change');
        }
      } else {
          for(let i = 0; i<changeBar.length; i++) {
              changeBar[i].classList.toggle('changeSm');
          }
        }
    }
    let primary = document.querySelector('.primary'),
    primaryDisplayStyle = window.getComputedStyle(primary).getPropertyValue("display"),
    primaryDisplayLeft = window.getComputedStyle(primary).getPropertyValue("left");
    if(primaryDisplayStyle === 'none') {
        document.body.style.overflow = 'hidden';
        primary.style.display = 'block';
        setTimeout(function(){primary.style.left = '0px'}, 1);
        changeBars()
    } else if(primaryDisplayLeft === '0px') {
        primary.style.left = '100%'
        setTimeout(function(){primary.style.display = 'none';}, 500);
        document.body.style.overflow = 'auto';
        changeBars()
    }
}
function closePrimaryMenu() {
  if(window.innerWidth<767) primaryMenuButton();
}
// ----------------------------------------------------------
function showProcedures() {
    let listProcedures = document.querySelector('.listProcedures'),
    heightOfListProcedures = window.getComputedStyle(listProcedures).getPropertyValue("height"),
    procedures = document.getElementById('procedures'),
    currentWidth = window.innerWidth;
    if(heightOfListProcedures === '0px' && currentWidth < 767) {
        listProcedures.style.height = '270px';
        outsideClickClose();
        procedures.classList.add('rotate')
    }
    if(heightOfListProcedures === '0px' && currentWidth >= 767) {
        listProcedures.style.height = '287px';
        outsideClickClose();
        procedures.classList.add('rotate')
    }
    if(heightOfListProcedures != '0px') {
        listProcedures.style.height = '0px';
        procedures.classList.remove('rotate')
    }
}
// ----------------------------------------------------------
function outsideClickClose() {
    let listProcedures = document.querySelector('.listProcedures'),
    procedures = document.getElementById('procedures'),
    body = document.querySelector('body');
    var proceduresEvent = function(event) {
      if (event.target != listProcedures && event.target != procedures)  {
        listProcedures.style.height = '0px';
        document.getElementById('procedures').classList.remove('rotate');
        body.removeEventListener('click', proceduresEvent);
      } 
    }
    body.addEventListener('click', proceduresEvent);
}
//  main----------------------------------------------------------
function toggleArticleSection(section, btnNumber) {
  var articleHeader = document.querySelector('.articleHeader'),
  pagePosition = articleHeader.offsetTop + articleHeader.clientHeight - window.innerHeight * 0.06,
  sections = document.querySelectorAll('.articleSection'),
  userSection = document.querySelector(section),
  articleButtons = document.querySelector('.articleButtons').children,
  activeBtn = articleButtons[btnNumber];
  activeBtn.classList.add('active');
  for(let i=0; i<articleButtons.length; i++) {
    if(articleButtons[i] != activeBtn && articleButtons[i].classList.contains('active')) {
      articleButtons[i].classList.remove('active');
    }
  }
  for(let i=0; i<sections.length; i++) {
    if(sections[i] != userSection && sections[i].classList.contains('articleSectionOn')) {
      var sect = sections[i];
      sect.style.opacity = '0';
      setTimeout(function(){
        sect.classList.remove('articleSectionOn');
      }, 250); 
    }
  }
  setTimeout(function() {
    if(!userSection.classList.contains('articleSectionOn')){
      userSection.classList.add('articleSectionOn');
      userSection.style.opacity = '1';
    }
    replacAarticleButtons(btnNumber);
  }, 250);
  window.scrollTo({
    top: pagePosition,
    behavior: "smooth"
  });    
}
function goToContacts() {
  let bc2 = 0,
  nh = document.querySelector('.navHeader').getBoundingClientRect().height,
  nt = document.querySelector('.headerTitle').getBoundingClientRect().height;
  if(document.querySelector('.breadcrumbs')) bc2 = document.querySelector('.breadcrumbs').getBoundingClientRect().height;
  if(document.querySelector('.navHeader').style.height !== 'max(6vh, 3rem)') nh = nh - nt + bc2;
  window.scrollTo({
    top: document.getElementById('contacts').offsetTop - nh - bc2,
    behavior: "smooth"
  });
  closePrimaryMenu();
}
//  footer------------------------------------------------
//  Actual Year------------------------------------------------
(function() {document.querySelector('.footerYear').innerText = new Date().getFullYear();})();
//  regform-----------------------------------------------
function moveLabel(attFor) {
  let body = document.querySelector('body');
  let label = document.querySelector('label[for=' + attFor + ']');
  let input = document.getElementById(attFor);
  label.style.opacity = '1';
  label.style.top = '-.5rem';
  label.style.left = '.5rem';
  let placeholder = input.placeholder;
  input.setAttribute('placeholder', '');
  var labelEvent = function(event) {
    if (event.target != input && input.value == "" && placeholder != "")  {
      label.style.opacity = '0';
      label.style.top = '0';
      label.style.left = '0';   
      input.setAttribute('placeholder', placeholder);
      body.removeEventListener('click', labelEvent); 
    }       
  }
  body.addEventListener('click', labelEvent);    
}
function closeRegForm() {
  let toggleForm = document.querySelector('.formWrapper');
  if(!toggleForm.classList.contains('showWidthDisplay')) {
    toggleForm.classList.toggle('showWidthDisplay');
    setTimeout(function(){
      toggleForm.classList.toggle('showWidthMargin');
    }, 10);
  } else {
    toggleForm.classList.toggle('showWidthMargin');
    setTimeout(function(){
      toggleForm.classList.toggle('showWidthDisplay');
    }, 500);
  }
  document.querySelector('.submit').classList.toggle('showSubmit');
  document.querySelector('.toggleForm').classList.toggle('hideToggleButton');
  document.querySelector('.loading').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.submit').style.display = 'none';
    document.querySelector('.toggleForm').style.display = 'none';
    document.querySelector('.loading').style.opacity = '1';
  }, 500);
}
function setRegResult(sendFormResult) {
  if(sendFormResult == true) {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.success').style.display = 'block';
    setTimeout(function(){
      document.querySelector('.success').style.opacity = '1';
    }, 500);
    return;
  }
  if(sendFormResult == false) {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.regError').style.display = 'block';
    setTimeout(function(){
      document.querySelector('.regError').style.opacity = '1';
    }, 500);
    return;
  }
}
function toggleForm() {
  let toggleForm = document.querySelector('.formWrapper');
  if(!toggleForm.classList.contains('showWidthDisplay')) {
    toggleForm.classList.toggle('showWidthDisplay');
    document.querySelector('.legend').style.backgroundColor = '#FFF';
    document.querySelector('.registrationForm').style.backgroundColor = '#FFF';
    setTimeout(function(){
      toggleForm.classList.toggle('showWidthMargin');
    }, 10);
  } else {
    toggleForm.classList.toggle('showWidthMargin');
    setTimeout(function(){
      document.querySelector('.legend').style.backgroundColor = '#FFF3E6';
      document.querySelector('.registrationForm').style.backgroundColor = '#FFF3E6';
      toggleForm.classList.toggle('showWidthDisplay');
    }, 500);
  }
  var submitBtn = document.querySelector('.submit');
  setTimeout(function(){
    submitBtn.classList.toggle('showSubmit');
    var btnText = document.querySelector('.toggleForm');
    if (btnText.textContent === "Заполнить форму") {
        btnText.innerHTML = "Скрыть форму";
    } else if (btnText.textContent === "Скрыть форму"){
          btnText.innerHTML = "Заполнить форму";
        } else if (btnText.textContent === "Заповнити форму") {
            btnText.innerHTML = "Приховати форму";
          } else if (btnText.textContent === "Приховати форму"){
              btnText.innerHTML = "Заповнити форму";
            };
  }, 500);
}
function getUserData(id, spanClass) {
  var input = document.getElementById(id);
  if(id == 'messenger'){
    input.classList.remove('invalid');
    document.querySelectorAll('.invalidMessenger')[0].style.opacity = '0';
  }
  if(id == 'userFirstName' || id == 'userLastName') {
    moveLabel(id);  
    document.querySelectorAll(spanClass)[1].style.opacity = '0';
    input.classList.remove('invalid');
    var lettersReplace = function(event) {
      var x = event.target.value.replace(/[!"№;%:?*()_+=`!@#$%^&*()+~[{}\]:;"'|,./<>?\d\\]/g, '');
      event.target.value = x;
    }
    input.addEventListener('input', lettersReplace);
    input.addEventListener('keydown', function(event) {
      if(event.key == 'Backspace' || event.key == 'Delete' || event.key == 'Escape' || event.key == 'Tab') {
        document.querySelectorAll(spanClass)[0].style.opacity = '0';
        input.classList.remove('invalid');
        return; 
      } else if(/[!"№;%:?*()_+-=`!@#$%^&*()_+~[{}\]:;"'|,./<>?\d\\]/g.test(event.key)) {
        document.querySelectorAll(spanClass)[0].style.opacity = '1';
        input.classList.add('invalid');
        return;
      } else {
        document.querySelectorAll(spanClass)[0].style.opacity = '0';
        input.classList.remove('invalid');
      }
    });
  }
  if(id == 'userEmail') {
    moveLabel(id);  
    document.querySelectorAll(spanClass)[0].style.opacity = '0';
    input.classList.remove('invalid');
    input.onblur = function() {
      if(input.value == '') {
        document.querySelector(spanClass).style.opacity = '0';
        input.classList.remove('invalid');
      } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9-]+[.]+.[A-Z]{1,5}$/i.test(input.value)) {
        document.querySelector(spanClass).style.opacity = '1';
        input.classList.add('invalid');
        return;
      } else {
        document.querySelector(spanClass).style.opacity = '0';
        input.classList.remove('invalid');
      }
    }
  }
  if(id == 'userAge') {
    moveLabel(id);  
    var input = document.getElementById(id);
    document.querySelectorAll(spanClass)[1].style.opacity = '0';
    input.classList.remove('invalid');
    input.addEventListener('keydown', function(event) {
      var numbersReplace = function(event) {
        document.querySelector(spanClass).style.opacity = '0';
        input.classList.remove('invalid');
        var x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})/);
        event.target.value = x[1];
      }
      input.addEventListener('input', numbersReplace);
      if(event.key == 'Backspace' || event.key == 'Delete' || event.key == 'Escape' || event.key == 'Tab' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        document.querySelector(spanClass).style.opacity = '0';
        input.classList.remove('invalid');
      } else if(!/^[0-9]$/.test(event.key)) {
        document.querySelector(spanClass).style.opacity = '1';
        input.classList.add('invalid');
      } else {
        document.querySelector(spanClass).style.opacity = '0';
        input.classList.remove('invalid');
      }
    });
  }
  if(id == 'userPhone') {
    moveLabel(id);  
    var input = document.getElementById(id);
    document.querySelector(spanClass).style.opacity = '0';
    input.classList.remove('invalid');
    input.addEventListener('keydown', function(event) {
      var numbersReplace = function(event) {
        var x = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      }
      input.addEventListener('input', numbersReplace);
      if(event.key == 'Backspace' || event.key == 'Delete' || event.key == 'Escape' || event.key == 'Tab' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        document.querySelector(spanClass).style.opacity = '0';
        input.classList.remove('invalid');
        return; 
      } else if(!/^[0-9]$/.test(event.key)) {
        document.querySelector(spanClass).style.opacity = '1';
        input.classList.add('invalid');
        return;
      } else {
        document.querySelector(spanClass).style.opacity = '0';
        input.classList.remove('invalid');
      }
    });
  }
}
function getRadio(qestion, result, id, name, disabled) {
  var qestion = qestion;
  for(let i=1; i<=5; i++) {
    if(qestion == 'qestion' + [i] + '') {
      var v1 = id + '1';
      var v2 = id + '2';
      if(result == true) {
        document.getElementById(v1).style.border = '0.08rem solid #024c37';
        document.getElementById(v2).style.border = '0.08rem solid #024c37';
        document.getElementById(v1).setAttribute('name', qestion);
        document.getElementById(v1).setAttribute('checked', 'checked');
        document.getElementById(v2).removeAttribute('name');
        document.getElementById(v2).removeAttribute('checked');
        if(i==3 || i==5) {
          document.getElementsByName(name)[0].style.display = 'inline-block';
          document.getElementsByName(name)[0].removeAttribute('disabled');
          document.getElementsByName(name)[0].setAttribute('placeholder', disabled);
          setTimeout(function(){
            document.getElementsByName(name)[0].style.width = '11rem';
          }, 10);
        }
      } else {
        document.getElementById(v1).style.border = '0.08rem solid #024c37';
        document.getElementById(v2).style.border = '0.08rem solid #024c37';
        document.getElementById(v2).setAttribute('name', qestion);
        document.getElementById(v2).setAttribute('checked', 'checked');
        document.getElementById(v1).removeAttribute('name');
        document.getElementById(v1).removeAttribute('checked');
        if(i==3 || i==5) {
          document.getElementsByName(name)[0].style.width = '0rem';
          document.getElementsByName(name)[0].setAttribute('disabled', 'disabled');
          document.getElementsByName(name)[0].removeAttribute('placeholder');
          setTimeout(function(){
            document.getElementsByName(name)[0].style.display = 'none';
          }, 450);
        }
      }
    }
  }
}
function submitRegistrationForm() {
    document.querySelector('.noticeFields').style.opacity = '1';
    document.querySelector('.requireFields').style.opacity = '0';
    var form = document.getElementById('registrationForm');
    var err = false;
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    var userFirstName = document.getElementById('userFirstName'),
    userLastName = document.getElementById('userLastName'),
    userAge = document.getElementById('userAge'),
    userPhone = document.getElementById('userPhone'),
    userEmail = document.getElementById('userEmail'),
    messenger = document.getElementById('messenger');
    if(userFirstName.value.length<2) {
      document.querySelectorAll('.invalidFirstName')[0].style.opacity = '0';
      document.querySelectorAll('.invalidFirstName')[1].style.opacity = '1';
      userFirstName.classList.add('invalid');
      err = true;
    } else {
      document.querySelectorAll('.invalidFirstName')[0].style.opacity = '0';
      document.querySelectorAll('.invalidFirstName')[1].style.opacity = '0';
      userFirstName.classList.remove('invalid');
    }
    if(userLastName.value.length<2) {
      document.querySelectorAll('.invalidLastName')[0].style.opacity = '0';
      document.querySelectorAll('.invalidLastName')[1].style.opacity = '1';
      userLastName.classList.add('invalid');
      err = true;
    } else {
      document.querySelectorAll('.invalidLastName')[0].style.opacity = '0';
      document.querySelectorAll('.invalidLastName')[1].style.opacity = '0';
      userLastName.classList.remove('invalid');
    }
    if(userAge.value.length<1) {
      document.querySelectorAll('.invalidAge')[0].style.opacity = '0';
      document.querySelectorAll('.invalidAge')[1].style.opacity = '1';
      userAge.classList.add('invalid');
      err = true;
    } else {
      document.querySelectorAll('.invalidAge')[0].style.opacity = '0';
      document.querySelectorAll('.invalidAge')[1].style.opacity = '0';
      userAge.classList.remove('invalid');
    }
    if(userPhone.value.length<13) {
      document.querySelectorAll('.invalidPhone')[0].style.opacity = '0';
      document.querySelectorAll('.invalidPhone')[1].style.opacity = '1';
      userPhone.classList.add('invalid');
      err = true;
    } else {
      document.querySelectorAll('.invalidPhone')[0].style.opacity = '0';
      document.querySelectorAll('.invalidPhone')[1].style.opacity = '0';
      userPhone.classList.remove('invalid');
    }
    if(userEmail.value != '' && !/^[A-Z0-9._%+-]+@[A-Z0-9-]+[.]+.[A-Z]{1,5}$/i.test(userEmail.value)) {
      document.querySelectorAll('.invalidEmail')[0].style.opacity = '1';
      userEmail.classList.add('invalid');
      err = true;
    } else {
      document.querySelectorAll('.invalidEmail')[0].style.opacity = '0';
      userEmail.classList.remove('invalid');
    }
    if(messenger.selectedIndex == 4) {
      document.querySelectorAll('.invalidMessenger')[0].style.opacity = '1';
      messenger.classList.add('invalid');
      err = true;
    } else {
      document.querySelectorAll('.invalidMessenger')[0].style.opacity = '0';
      messenger.classList.remove('invalid');
    }
    for(let i=1; i<6; i++) {
      var cl = '.q' + [i] + '';
      if(document.querySelectorAll(cl)[0].getAttribute('checked') == null && document.querySelectorAll(cl)[1].getAttribute('checked') == null) {
        document.querySelectorAll(cl)[0].style.border = '0.1rem solid #b92a2a';
        document.querySelectorAll(cl)[1].style.border = '0.1rem solid #b92a2a';
        err = true;
      } else {
        document.querySelectorAll(cl)[0].style.border = '0.08rem solid #024c37';
        document.querySelectorAll(cl)[1].style.border = '0.08rem solid #024c37';
      }
    }
    if(err == true){
      document.querySelector('.noticeFields').style.opacity = '0';
      document.querySelector('.requireFields').style.opacity = '1';
      return false;
    }
    var formData = {};
    for(let i=0; i<document.querySelectorAll('input[name]').length; i++) {
      formData[document.querySelectorAll('input[name]')[i].name] = document.querySelector('input[name=' + document.querySelectorAll('input[name]')[i].name + '').value;
    }
    let formReq = new XMLHttpRequest();
    closeRegForm();
    formReq.open('POST', '/telegram', true);
    formReq.onload = function() {
      if (formReq.response == '200') {
        // console.log('200');
        setRegResult(true);
      }
      if (formReq.response != '200') {
        // console.log('error');
        setRegResult(false);
      }
    }
    var reqMsg = '';
    for (let key in formData) {
      reqMsg = reqMsg + '&' + key + '=' + encodeURIComponent(formData[key]);
    }
    reqMsg = reqMsg.substr(1) + reqMsg + '&userComment=' + encodeURIComponent(document.querySelector('textarea[name="userComment"]').value) + '&messenger=' + encodeURIComponent(document.querySelector('select[name="messenger"]').value) + '&service=' + encodeURIComponent(document.querySelector('select[name="service"]').value);
    formReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    formReq.send(reqMsg);
  });
}
//toggle list(price-list, gallery)---------------------------------------------------------------
function toggleList(toggleContainer) {
  var userToggleContainer = document.querySelector('.' + toggleContainer),
  userToggleButton = document.querySelector('.btn' + toggleContainer),
  hide;
  if(userToggleContainer.getAttribute('class').indexOf('article') >= 0) {
    hide = 'articleToggleContainer';
  }  else {
      hide = 'hideWidthHeight';
    }
  if(userToggleContainer.classList.contains(hide)) {
  //если нужно закрыть все другие вкладки
    // for(let i=0; i<toggleContainer.length; i++) {
    //   toggleContainer[i].classList.add('hideWidthHeight');
    //   toggleContainer[i].style.height = '0';
    //   toggleContainer[i].style.marginBlock = '0';
    // }
    userToggleButton.classList.add('activePage');
    userToggleButton.classList.add('rotate');
    if(userToggleContainer.tagName === 'SECTION') {
      userToggleContainer.style.height = '' + userToggleContainer.scrollHeight + 'px';
      setTimeout(() => {
        userToggleContainer.style.height = 'auto';
        userToggleContainer.classList.remove(hide);
      }, 500);
    } else if(userToggleContainer.tagName === 'DIV' && userToggleContainer.parentElement.tagName === 'SECTION') {
      userToggleContainer.style.height = '' + userToggleContainer.scrollHeight + 'px';
      setTimeout(() => {
        userToggleContainer.style.height = 'auto';
        userToggleContainer.classList.remove(hide);
      }, 500);
      userToggleContainer.parentElement.style.height = 'auto';
    } else {
      userToggleContainer.style.height = '' + userToggleContainer.scrollHeight + 'px';
      setTimeout(() => {
        userToggleContainer.style.height = 'auto';
        userToggleContainer.classList.remove(hide);
      }, 500);
    }
  } else {
      userToggleButton.classList.remove('activePage');
      userToggleButton.classList.remove('rotate');
    if(userToggleContainer.tagName === 'SECTION') {
      userToggleContainer.style.height = '' + userToggleContainer.scrollHeight + 'px';
      setTimeout(() => {
        userToggleContainer.style.height = '0px';
        userToggleContainer.classList.add(hide);
        }, 1);
    } else if(userToggleContainer.tagName === 'DIV' && userToggleContainer.parentElement.tagName === 'SECTION') {
        userToggleContainer.style.height = '' + userToggleContainer.scrollHeight + 'px';
        setTimeout(() => {
          userToggleContainer.style.height = '0px';
          userToggleContainer.classList.add(hide);  
        }, 1);
        userToggleContainer.parentElement.style.height = 'auto';
      } else {
        userToggleContainer.style.height = '' + userToggleContainer.scrollHeight + 'px';
        setTimeout(() => {
          userToggleContainer.style.height = '0px';
          userToggleContainer.classList.add(hide);  
        }, 1);
      }
  }
}
// switch off context menu
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName == 'IMG') {
      e.preventDefault();
      return false;
    }
  }, false);
//buntton to scroll up
(function() {
  let btnScrollToTop = document.querySelector('.btnScrollToTop');
  btnScrollToTop.addEventListener('mouseover', function(e) {
    e.target.style.opacity = ".7";
    e.target.style.backgroundColor = "#024c37";
  });
  btnScrollToTop.addEventListener('mouseout', function(e) {
    e.target.style.opacity = ".5";
    e.target.style.backgroundColor = "#757575";
  });  
})();
function scrollUp() {window.scrollTo({top: 0, behavior: "smooth"});}

