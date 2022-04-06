<footer>
  <div class="contacts" id="contacts">
      <h2><?=$lang['footer50']?></h2>
      <div class="contact1">
          <h3><?=$lang['footer51']?></h3>
          <p><?=$lang['footer52']?><br>
            <?=$lang['footer53']?><br>
            <?=$lang['footer54']?><br>
            <strong><?=$lang['footer55']?></strong></p>
      </div>
      <div class="contact2">
        <h3><?=$lang['footer56']?>:</h3>
        <p class="tel"><a href="tel:+38050050-94-45" target="_self">+38 (050) 050-94-45</a></p>
        <p>(Viber, WhatsApp, Telegram)</p>
      </div>
      <div class="contact3">
          <h3>E-mail, social:</h3>
          <p>alterantaesthetic@gmail.com</p>
          <div class="social">
              <a target="_blank" rel="noopener" class="transitionOn" href="https://www.instagram.com/alterant.aesthetic/"><img src="/public/media/img/inst.svg" alt="страница instagram"></a>
              <a target="_blank" rel="noopener" class="transitionOn" href="https://www.facebook.com/%D0%9E%D0%BB%D1%82%D0%B5%D1%80%D0%B5%D0%BD-%D0%95%D1%81%D1%82%D0%B5%D1%82%D1%96%D0%BA-1906391539385151"><img src="/public/media/img/fb.svg" alt="страница facebook"></a>    
          </div>
      </div>
      <div class="contact4">
        <h3><?=$lang['footer57']?></h3>
        <address><?=$lang['footer58']?></address>
      </div>
      <div class="contact5">
        <h3><?=$lang['footer59']?></h3>
        <address><?=$lang['footer60']?></address>
      </div>
      <div class="iframe1">
          <iframe title="<?=$lang['footer108']?>" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2631.788634342718!2d37.60105504907011!3d48.72863029523061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c93bf257bb5c0f3!2z0KbQtdC90YLRgCDRjdGB0YLQtdGC0LjRh9C10YHQutC-0Lkg0LzQtdC00LjRhtC40L3RiyAi0J7Qu9GC0LXRgNC10L0t0LXRgdGC0LXRgtC40Loi!5e0!3m2!1suk!2sua!4v1619200925334!5m2!1suk!2sua" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="iframe2">
          <iframe title="<?=$lang['footer108']?>" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94817.09359732234!2d37.48357875574877!3d48.57607876569021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dfb94e979bf09d%3A0x4a7522a4a1f84d5a!2z0JrQu9C40L3QuNC60LAg0KXQuNGA0YPRgNCz0LjQuCDQlNCd0JzQow!5e0!3m2!1suk!2sua!4v1629887128816!5m2!1suk!2sua" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <form class="registrationForm" id="registrationForm">
        <div class="legend"><?=$lang['footer61']?></div>
        <div class="formWrapper">
          <div class="userData">
              <input id="userFirstName" name="userName" type="text" placeholder="<?=$lang['footer108']?>" maxlength="25" onfocus="getUserData('userFirstName', '.invalidFirstName')">
              <label class="transitionOn" for="userFirstName"><?=$lang['footer62']?></label>
              <span class="invalidFirstName"><?=$lang['footer63']?></span>
              <span class="invalidFirstName"><?=$lang['footer64']?></span>
          </div>
          <div  id="qestion_1" class="userSelect">
            <p><?=$lang['footer65']?></p>
            <div class='firstRadio'>
              <input class="q1" id="q1v1" name="qestion1" type="radio" value="да" onclick="getRadio('qestion1', true, 'q1v')">
              <label class="card" for="q1v1"><?=$lang['footer66']?></label>
            </div>
            <div class='secondRadio'>
              <input class="q1" id="q1v2" name="qestion1" type="radio" value="нет" onclick="getRadio('qestion1', false, 'q1v')">
              <label class="card" for="q1v2"><?=$lang['footer67']?></label>
            </div>
          </div>
          <div class="userData">
              <input id="userLastName" name="userLastName" type="text" placeholder="<?=$lang['footer109']?>" maxlength="25" onfocus="getUserData('userLastName', '.invalidLastName')">
              <label class="transitionOn" for="userLastName"><?=$lang['footer68']?></label>
              <span class="invalidLastName"><?=$lang['footer69']?></span>
              <span class="invalidLastName"><?=$lang['footer70']?></span>
          </div>
          <div id="qestion_2" class="userSelect">
            <p><?=$lang['footer71']?></p>
            <div class='firstRadio'>
              <input class="q2" id="q2v1" type="radio" name="qestion2" value="да" onclick="getRadio('qestion2', true, 'q2v')">
              <label class="card" for="q2v1"><?=$lang['footer66']?></label>
            </div>
            <div class='secondRadio'>
              <input class="q2" id="q2v2" type="radio" name="qestion2" value="нет" onclick="getRadio('qestion2', false, 'q2v')">
              <label class="card" for="q2v2"><?=$lang['footer67']?></label>
            </div>
          </div>
          <div class="userData">
              <input id="userAge" name="userAge" type="number" placeholder="<?=$lang['footer110']?>" min="1" max="200" onfocus="getUserData('userAge', '.invalidAge')">
              <label class="transitionOn" for="userAge"><?=$lang['footer72']?></label>
              <span class="invalidAge"><?=$lang['footer73']?></span>
              <span class="invalidAge"><?=$lang['footer74']?></span>
          </div>
          <div id="qestion_3" class="userSelect">
            <p><?=$lang['footer75']?><br><?=$lang['footer76']?></p>
            <div class='firstRadio'>
              <input class="q3" id="q3v1" type="radio" name="qestion3" value="да" onclick="getRadio('qestion3', true, 'q3v', 'pills', `<?=$lang['footer113']?>`)">
              <label class="card" for="q3v1"><?=$lang['footer66']?></label>
              <input class="transitionOn" name="pills" type="text" disabled="disabled" maxlength="55">
            </div>
            <div class='secondRadio'>
              <input class="q3" id="q3v2" type="radio" name="qestion3" value="нет" onclick="getRadio('qestion3', false, 'q3v', 'pills')">
              <label class="card" for="q3v2"><?=$lang['footer67']?></label>
            </div>
          </div>
          <div class="userData userPhone">
              <input id="userPhone" name="userPhone" type="tel" onfocus="getUserData('userPhone', '.invalidPhone')" placeholder="<?=$lang['footer111']?>">
              <label class="transitionOn" for="userPhone"><?=$lang['footer77']?></label>
              <span class="invalidPhone"><?=$lang['footer78']?></span>
              <span class="invalidPhone"><?=$lang['footer79']?></span>
          </div>
          <div id="qestion_4" class="userSelect">
            <p><?=$lang['footer80']?><br><?=$lang['footer81']?></p>
            <div class='firstRadio'>
              <input class="q4" id="q4v1" type="radio" name="qestion4" value="да" onclick="getRadio('qestion4', true, 'q4v')">
              <label class="card" for="q4v1"><?=$lang['footer66']?></label>
            </div>
            <div class='secondRadio'>
              <input class="q4" id="q4v2" type="radio" name="qestion4" value="нет" onclick="getRadio('qestion4', false, 'q4v')">
              <label class="card" for="q4v2"><?=$lang['footer67']?></label>
            </div>
          </div>
          <div class="userData"> 
            <input id="userEmail" name="userEmail" placeholder="Ваш email" onfocus="getUserData('userEmail', '.invalidEmail')"><label class="transitionOn" for="userEmail">Введите email</label>
            <span class="invalidEmail">example@example.com</span>
          </div>
          <div id="qestion_5" class="userSelect">
            <p><?=$lang['footer85']?><br><?=$lang['footer86']?></p>
            <div class='firstRadio'>
              <input class="q5" id="q5v1" type="radio" name="qestion5" value="да" onclick="getRadio('qestion5', true, 'q5v', 'sickness', `<?=$lang['footer114']?>`)">
              <label class="card" for="q5v1"><?=$lang['footer66']?></label>
              <input class="transitionOn" type="text" disabled="disabled" maxlength="55" name="sickness">
            </div>
            <div class='secondRadio'>
              <input class="q5" id="q5v2" type="radio" name="qestion5" value="нет" onclick="getRadio('qestion5', false, 'q5v', 'sickness')">
              <label class="card" for="q5v2"><?=$lang['footer67']?></label>
            </div>
          </div>
          <div class="messengers">
            <label for="messenger"><?=$lang['footer82']?></label>
            <select class="messenger" name="messenger" id="messenger" onfocus="getUserData('messenger', '.invalidMessenger')">
                <option value="Дзвінок"><?=$lang['footer83']?></option>
                <option value="Viber">Viber</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
                <option selected hidden value="Не обрано"><?=$lang['footer116']?></option>
            </select>
            <span class="invalidMessenger"><?=$lang['footer84']?></span>
          </div>
          <div class="services">
            <label for="service"><?=$lang['footer87']?></label>
            <select class="form" name="service" id="service">
                <option value="Пластична хірургія"><?=$lang['footer88']?></option>
                <option value="Реконструктивна хірургія"><?=$lang['footer89']?></option>
                <option value="Косметологія ін’єкційна"><?=$lang['footer90']?></option>
                <option value="Лазерна медицина"><?=$lang['footer91']?></option>
                <option value="Лазерна епіляція"><?=$lang['footer92']?></option>
                <option value="Косметологія доглядова"><?=$lang['footer93']?></option>
                <option selected hidden value="Не обрано"><?=$lang['footer116']?></option>
            </select>
          </div>
          <div class="comments">
            <textarea id="userComment" name="userComment" placeholder="<?=$lang['footer112']?>" maxlength="250" onclick="moveLabel('userComment')"></textarea><label class="transitionOn" for="userComment"><?=$lang['footer112']?></label> 
          </div>
          <div class="notice">
            <p class="noticeFields transitionOn"><?=$lang['footer94']?></p>
            <p class="requireFields transitionOn"><?=$lang['footer115']?></p>
          </div>
        </div>
        <button class="toggleForm transitionOn" type="button" onclick="toggleForm()"><?=$lang['footer95']?></button>
        <button class="submit transitionOn" id="submit" type="submit" onclick="submitRegistrationForm()"><?=$lang['footer96']?></button>
        <div class="loading"><?=$lang['footer97']?></div>
        <div class="success"><?=$lang['footer98']?></div>
        <div class="regError"><?=$lang['footer99']?></div>
      </form>
  </div>
  <div class="footerLastPart">
    <div class="footerLogo">
      <a class="" href="/"><img src="/public/media/img/logoFooter.svg" alt="Логотип"></a>
      <a class ="" href="<?=$lang['lang']?>/prifile_chystiakova"><?=$lang['header1']?></a>
      <a class ="companyName" href="<?=$lang['lang']?>"><?=$lang['aHeaderTitle']?></a>
    </div>
    <div class="contactFooter">
      <div class="social">
          <a target="_blank" rel="noopener" class="transitionOn" href="https://www.instagram.com/alterant.aesthetic/"><img src="/public/media/img/instWhite.svg" alt="страница instagram"></a>
          <a target="_blank" rel="noopener" class="transitionOn" href="https://www.facebook.com/%D0%9E%D0%BB%D1%82%D0%B5%D1%80%D0%B5%D0%BD-%D0%95%D1%81%D1%82%D0%B5%D1%82%D1%96%D0%BA-1906391539385151"><img src="/public/media/img/fbWhite.svg" alt="страница facebook"></a>    
      </div>
      <p>alterantaesthetic@gmail.com</p>
    </div>
    <ul class="listProceduresFooter">
      <li><a class="aFooter" href="/plastic_surgery"><?=$lang['footer100']?></a></li>
      <li><a class="aFooter" href="/reconstructive_surgery"><?=$lang['footer101']?></a></li>
      <li><a class="aFooter" href="/invasive_cosmetology"><?=$lang['footer102']?></a></li>
      <li><a class="aFooter" href="/laser_medicine_procedures"><?=$lang['footer103']?></a></li>
      <li><a class="aFooter" href="/laser_epilation"><?=$lang['footer104']?></a></li>
      <li><a class="aFooter" href="/treatment_esthetic_procedures"><?=$lang['footer105']?></a></li>
    </ul>
  </div>
  <div class="copyright">
    <p>&copy; 2015-<span class="footerYear"></span> <?=$lang['footer106']?></p>
    <p><?=$lang['footer107']?></p>    
  </div>
</footer>
