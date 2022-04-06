(function() {
  let request;
  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  }
  else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open("GET", "/public/script/reviews.json");
  request.onload = function(){
    if(request.status === 200){
      allReviews = JSON.parse(request.response);
      let reviewLength = allReviews.result.reviews.length;
      let ArrReviews = allReviews.result.reviews;
      for(var i = 0; i < reviewLength; i++) {
        let sliderItem = document.createElement('div');
        sliderItem .classList.add("sliderItem");
        sliderItem .classList.add("sliderItemReview");
        let review = document.createElement('div');
        review.classList.add("review");
        sliderItem.append(review);
        let img = document.createElement('img');
        let profile_photo_url = ArrReviews[i].profile_photo_url;
        img.setAttribute('alt', "Фото пользователя");
        img.setAttribute('loading', "lazy");
        img.setAttribute('src', profile_photo_url);
        review.append(img);
        let span = document.createElement('span');
        let author_name = ArrReviews[i].author_name
        span.innerText = author_name;
        review.append(span);
        let br = document.createElement('br');
        review.append(br);
        let rating = ArrReviews[i].rating
        let spanRating = document.createElement('span');
        spanRating.classList.add('star');
        let star = '&#9733;';
        let stars = '';
        for(let j=1; j<=rating; j++) {
          stars = stars + star;
        }
        spanRating.innerHTML = stars;
        review.append(spanRating);
        let p = document.createElement('p');
        p.classList.add('truncateReview');
        let text = ArrReviews[i].text;
        p.innerText = text;
        review.append(p);
        let sliderItems = document.querySelectorAll('.sliderItems')[1];
        sliderItems.append(sliderItem);
      }
      getReviewSlider();
    } else {
      console.log('error of getRewiews_status');
    }
  }
  request.send();
})();
function TruncateReview () {
    this.strings = document.querySelectorAll('.truncateReview'),
    this.maxLength = 0,
    this.originalStrings = [];
    this.btnMore = (document.querySelector('html').getAttribute('lang') === 'ru') ? 'больше' : 'більше';
}
TruncateReview.prototype.truncate = function() {
  this.maxLength = Math.round((document.querySelector('.truncateReview').offsetWidth / (16 / 1.6)) * ((document.querySelector('.sliderItemReview').offsetHeight - 87) / (16*1.3)));
  for(let i = 0; i<this.strings.length; i++) {
    if(this.strings[i].textContent.length>this.maxLength || this.originalStrings[i] != ''){
      if (!this.originalStrings[i]) this.originalStrings[i] = this.strings[i].textContent;
      let a = `<button type="button" class="showReview${i}" onclick="funcShowReview('.showReview${i}','${this.originalStrings[i]}')">... ${this.btnMore}</button>`;
      if (this.originalStrings[i].length>this.maxLength) {
        this.strings[i].innerHTML = this.originalStrings[i].substr(0, this.maxLength) + a;
      } else {
        this.strings[i].innerHTML = this.originalStrings[i];
      } 
    }
  }
}
function funcShowReview(a, sf) {
  let newP = document.querySelector(a).closest('p');
   newP.innerHTML = sf;
};
//  slider----------------------------------------------------------
(function() {
  if (typeof window.CustomEvent === 'function' ) return false;
  function CustomEvent(event, params) {
    params = params || {bubbles: false, cancelable: false, detail: null};
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return e;
  }
  window.CustomEvent = CustomEvent;
})();
// базовые классы и селекторы
var WRAPPER_SELECTOR = '.sliderWrapper',
ITEMS_SELECTOR = '.sliderItems',
ITEM_SELECTOR = '.sliderItem',
ITEM_CLASS_ACTIVE = 'sliderItem_active',
CONTROL_SELECTOR = '.sliderControl',
CONTROL_CLASS_SHOW = 'sliderControlShow',
// индикаторы
INDICATOR_WRAPPER_ELEMENT = 'div',
INDICATOR_WRAPPER_CLASS = 'sliderIndicators',
INDICATOR_ITEM_ELEMENT = 'div',
INDICATOR_ITEM_CLASS = 'sliderIndicator',
INDICATOR_ITEM_CLASS_TRANSITION = 'mainTransition',
INDICATOR_ITEM_CLASS_ACTIVE = 'sliderIndicatorActive',
// порог для переключения слайда (40%)
SWIPE_THRESHOLD = 20,
// класс для отключения transition
TRANSITION_NONE = 'transition-none';
function SimpleAdaptiveSlider(selector, config) {
  // .slider
  this._$root = document.querySelector(selector);
  // .slider__wrapper
  this._$wrapper = this._$root.querySelector(WRAPPER_SELECTOR);
  // .slider__items
  this._$items = this._$root.querySelector(ITEMS_SELECTOR);
  // .slider__item
  this._$itemList = this._$root.querySelectorAll(ITEM_SELECTOR);
  // текущий индекс
  this._currentIndex = 0;
  // экстремальные значения слайдов
  this._minOrder = 0;
  this._maxOrder = 0;
  this._$itemWithMinOrder = null;
  this._$itemWithMaxOrder = null;
  this._minTranslate = 0;
  this._maxTranslate = 0;
  // направление смены слайдов (по умолчанию)
  this._direction = 'next';
  // флаг, который показывает, что идёт процесс уравновешивания слайдов
  this._balancingItemsFlag = false;
  // текущее значение трансформации
  this._transform = 0;
  // swipe параметры
  this._hasSwipeState = false;
  this._swipeStartPosX = 0;
  // id таймера
  this._intervalId = null;
  // конфигурация слайдера (по умолчанию)
  this._config = {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  };
  // изменяем конфигурацию слайдера в соответствии с переданными настройками
  for (var key in config) {
    if (this._config.hasOwnProperty(key)) {
      this._config[key] = config[key];
    }
  }
  // добавляем к слайдам data-атрибуты
  for (var i = 0, length = this._$itemList.length; i < length; i++) {
    this._$itemList[i].dataset.order = i;
    this._$itemList[i].dataset.index = i;
    this._$itemList[i].dataset.translate = 0;
  }
  // перемещаем последний слайд перед первым
  if (this._config.loop) {
    var count = this._$itemList.length - 1;
    var translate = -this._$itemList.length * 100;
    this._$itemList[count].dataset.order = -1;
    this._$itemList[count].dataset.translate = -this._$itemList.length * 100;
    var transformValue = 'translateX('.concat(translate, '%)');
    this._$itemList[count].style.transform = transformValue;
  }
  // добавляем индикаторы к слайдеру
  this._addIndicators();
  // обновляем экстремальные значения переменных
  this._refreshExtremeValues();
  // помечаем активные элементы
  this._setActiveClass();
  // назначаем обработчики
  this._addEventListener();
  // запускаем автоматическую смену слайдов
  this._autoplay();
}
// set active class
SimpleAdaptiveSlider.prototype._setActiveClass = function() {
  // slides
  var i,
  length,
  $item,
  index;
  for (let i = 0, length = this._$itemList.length; i < length; i++) {
    $item = this._$itemList[i];
    index = parseInt($item.dataset.index);
    if (this._currentIndex === index) {
      $item.classList.add(ITEM_CLASS_ACTIVE);
    } else {
      $item.classList.remove(ITEM_CLASS_ACTIVE);
    }
  }
  // indicators
  var $indicators = this._$root.querySelectorAll('.' + INDICATOR_ITEM_CLASS);
  if ($indicators.length) {
    for (let i = 0, length = $indicators.length; i < length; i++) {
      $item = $indicators[i];
      index = parseInt($item.dataset.slideTo);
      if (this._currentIndex === index) {
        $item.classList.add(INDICATOR_ITEM_CLASS_ACTIVE);
      } else {
        $item.classList.remove(INDICATOR_ITEM_CLASS_ACTIVE);
      }
    }
  }
  // controls
  var $controls = this._$root.querySelectorAll(CONTROL_SELECTOR);
  if (!$controls.length) {
    return;
  }
  if (this._config.loop) {
    for (let i = 0, length = $controls.length; i < length; i++) {
      $controls[i].classList.add(CONTROL_CLASS_SHOW);
    }
  } else {
    if (this._currentIndex === 0) {
      $controls[0].classList.remove(CONTROL_CLASS_SHOW);
      $controls[1].classList.add(CONTROL_CLASS_SHOW);
    } else if (this._currentIndex === this._$itemList.length - 1) {
      $controls[0].classList.add(CONTROL_CLASS_SHOW);
      $controls[1].classList.remove(CONTROL_CLASS_SHOW);
    } else {
      $controls[0].classList.add(CONTROL_CLASS_SHOW);
      $controls[1].classList.add(CONTROL_CLASS_SHOW);
    }
  }
};
// смена слайдов
SimpleAdaptiveSlider.prototype._move = function() {
  if (this._direction === 'none') {
    this._$items.classList.remove(TRANSITION_NONE);
    this._$items.style.transform = 'translateX('.concat(this._transform, '%)');
    return;
  }
  if (!this._config.loop) {
    var condition = this._currentIndex + 1 >= this._$itemList.length;
    if (condition && this._direction === 'next') {
      this._autoplay('stop');
      return;
    }
    if (this._currentIndex <= 0 && this._direction === 'prev') {
      return;
    }
  }
  var step = this._direction === 'next' ? -100 : 100;
  var transform = this._transform + step;
  if (this._direction === 'next') {
    if (++this._currentIndex > this._$itemList.length - 1) {
      this._currentIndex -= this._$itemList.length;
    }
  } else {
    if (--this._currentIndex < 0) {
      this._currentIndex += this._$itemList.length;
    }
  }
  this._transform = transform;
  this._$items.style.transform = 'translateX('.concat(transform, '%)');
  this._setActiveClass();
};
// функция для перемещения к слайду по индексу
SimpleAdaptiveSlider.prototype._moveTo = function(index) {
  var currentIndex = this._currentIndex;
  this._direction = index > currentIndex ? 'next' : 'prev';
  for (var i = 0; i < Math.abs(index - currentIndex); i++) {
    this._move();
  }
};
// метод для автоматической смены слайдов
SimpleAdaptiveSlider.prototype._autoplay = function(action) {
  if (!this._config.autoplay) {
    return;
  }
  if (action === 'stop') {
    clearInterval(this._intervalId);
    this._intervalId = null;
    return;
  }
  if (this._intervalId === null) {
    this._intervalId = setInterval(function() {
      this._direction = 'next';
      this._move();
    }.bind(this),
    this._config.interval
    );
  }
};
// добавление индикаторов
SimpleAdaptiveSlider.prototype._addIndicators = function() {
  if (this._$root.querySelector('.' + INDICATOR_WRAPPER_CLASS)) {
    return;
  }
  var $wrapper = document.createElement(INDICATOR_WRAPPER_ELEMENT);
  $wrapper.className = INDICATOR_WRAPPER_CLASS;
  for (var i = 0, length = this._$itemList.length; i < length; i++) {
    var $item = document.createElement(INDICATOR_ITEM_ELEMENT);
    $item.className = INDICATOR_ITEM_CLASS;
    $item.classList.add(INDICATOR_ITEM_CLASS_TRANSITION);
    $item.dataset.slideTo = i;
    $wrapper.appendChild($item);
  }
  this._$root.appendChild($wrapper);
};

// refresh extreme values
SimpleAdaptiveSlider.prototype._refreshExtremeValues = function() {
  var $itemList = this._$itemList;
  this._minOrder = parseInt($itemList[0].dataset.order);
  this._maxOrder = this._minOrder;
  this._$itemWithMinOrder = $itemList[0];
  this._$itemWithMaxOrder = this._$itemWithMinOrder;
  this._minTranslate = parseInt($itemList[0].dataset.translate);
  this._maxTranslate = this._minTranslate;
  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var order = parseInt($item.dataset.order);
    if (order < this._minOrder) {
      this._minOrder = order;
      this._$itemWithMinOrder = $item;
      this._minTranslate = parseInt($item.dataset.translate);
    } else if (order > this._maxOrder) {
      this._maxOrder = order;
      this._$itemWithMaxOrder = $item;
      this._minTranslate = parseInt($item.dataset.translate);
    }
  }
};
// balancing items
SimpleAdaptiveSlider.prototype._balancingItems = function() {
  if (!this._balancingItemsFlag) {
    return;
  }
  var $wrapper = this._$wrapper,
  wrapperRect = $wrapper.getBoundingClientRect(),
  halfWidthItem = wrapperRect.width / 2,
  count = this._$itemList.length,
  translate,
  clientRect;
  if (this._direction === 'next') {
    var wrapperLeft = wrapperRect.left;
    var $min = this._$itemWithMinOrder;
    translate = this._minTranslate;
    clientRect = $min.getBoundingClientRect();
    if (clientRect.right < wrapperLeft - halfWidthItem) {
      $min.dataset.order = this._minOrder + count;
      translate += count * 100;
      $min.dataset.translate = translate;
      $min.style.transform = 'translateX('.concat(translate, '%)');
      this._refreshExtremeValues();
    }
  } else if (this._direction === 'prev') {
    var wrapperRight = wrapperRect.right;
    var $max = this._$itemWithMaxOrder;
    translate = this._maxTranslate;
    clientRect = $max.getBoundingClientRect();
    if (clientRect.left > wrapperRight + halfWidthItem) {
      $max.dataset.order = this._maxOrder - count;
      translate -= count * 100;
      $max.dataset.translate = translate;
      $max.style.transform = 'translateX('.concat(translate, '%)');
      this._refreshExtremeValues();
    }
  }
  requestAnimationFrame(this._balancingItems.bind(this));
};
// adding listeners
SimpleAdaptiveSlider.prototype._addEventListener = function() {
  var $items = this._$items;
  function onClick(e) {
    var $target = e.target;
    this._autoplay('stop');
    if ($target.classList.contains('sliderControl')) {
      e.preventDefault();
      this._direction = $target.dataset.slide;
      this._move();
    } else if ($target.dataset.slideTo) {
      e.preventDefault();
      var index = parseInt($target.dataset.slideTo);
      this._moveTo(index);
    }
        // отключил автоматическую смену слайдов после события "клик"
    // if (this._config.loop) {
    //   this._autoplay();
    // }
  }
  function onTransitionStart() {
    this._balancingItemsFlag = true;
    window.requestAnimationFrame(this._balancingItems.bind(this));
  }
  function onTransitionEnd() {
    this._balancingItemsFlag = false;
    this._$root.dispatchEvent(new CustomEvent('slider.transition.end',
        {bubbles: true}));
  }
  function onMouseEnter() {
    this._autoplay('stop');
  }
  function onMouseLeave() {
    if (this._config.loop) {
      this._autoplay();
    }
  }
  function onSwipeStart(e) {
    this._autoplay('stop');
    var event = e.type.search('touch') === 0 ? e.touches[0] : e;
    this._swipeStartPosX = event.clientX;
    this._swipeStartPosY = event.clientY;
    this._hasSwipeState = true;
    this._hasSwiping = false;
  }
  function onSwipeMove(e) {
    if (!this._hasSwipeState) {
      return;
    }
    var event = e.type.search('touch') === 0 ? e.touches[0] : e;
    var diffPosX = this._swipeStartPosX - event.clientX;
    var diffPosY = this._swipeStartPosY - event.clientY;
    if (!this._hasSwiping) {
      if (Math.abs(diffPosY) > Math.abs(diffPosX)) {
        this._hasSwipeState = false;
        return;
      }
      this._hasSwiping = true;
    }
    e.preventDefault();
    if (!this._config.loop) {
      if (this._currentIndex + 1 >= this._$itemList.length && diffPosX >= 0) {
        diffPosX = diffPosX / 4;
      }
      if (this._currentIndex <= 0 && diffPosX <= 0) {
        diffPosX = diffPosX / 4;
      }
    }
    var value = (diffPosX / this._$wrapper.getBoundingClientRect().width) * 100;
    var translateX = this._transform - value;
    this._$items.classList.add(TRANSITION_NONE);
    this._$items.style.transform = 'translateX('.concat(translateX, '%)');
  }
  function onSwipeEnd(e) {
    if (!this._hasSwipeState) {
      return;
    }
    var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
    var diffPosX = this._swipeStartPosX - event.clientX;
    if (!this._config.loop) {
      if (this._currentIndex + 1 >= this._$itemList.length && diffPosX >= 0) {
        diffPosX = diffPosX / 4;
      }
      if (this._currentIndex <= 0 && diffPosX <= 0) {
        diffPosX = diffPosX / 4;
      }
    }
    var value = (diffPosX / this._$wrapper.getBoundingClientRect().width) * 100;
    this._$items.classList.remove(TRANSITION_NONE);
    if (value > SWIPE_THRESHOLD) {
      this._direction = 'next';
      this._move();
    } else if (value < -SWIPE_THRESHOLD) {
      this._direction = 'prev';
      this._move();
    } else {
      this._direction = 'none';
      this._move();
    }
    this._hasSwipeState = false;
    // отключил автоматическую смену слайдов после события "свайп"
    // if (this._config.loop) {
    //   this._autoplay();
    // }
  }
  function onDragStart(e) {
    e.preventDefault();
  }
  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this._autoplay('stop');
    } else if (document.visibilityState === 'visible') {
      if (this._config.loop) {
        this._autoplay();
      }
    }
  }
  // click
  this._$root.addEventListener('click', onClick.bind(this));
  // transitionstart and transitionend
  if (this._config.loop) {
    $items.addEventListener('transitionstart', onTransitionStart.bind(this));
    $items.addEventListener('transitionend', onTransitionEnd.bind(this));
  }
  // mouseenter and mouseleave
  if (this._config.autoplay) {
    this._$root.addEventListener('mouseenter', onMouseEnter.bind(this));
    this._$root.addEventListener('mouseleave', onMouseLeave.bind(this));
  }
  // swipe
  if (this._config.swipe) {
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          supportsPassive = true;
        },
      });
      window.addEventListener('testPassiveListener', null, opts);
    } catch (err) {}
    this._$root.addEventListener('touchstart', onSwipeStart.bind(this),
         supportsPassive ? {passive: false} : false);
    this._$root.addEventListener('touchmove', onSwipeMove.bind(this),
         supportsPassive ? {passive: false} : false);
    this._$root.addEventListener('mousedown', onSwipeStart.bind(this));
    this._$root.addEventListener('mousemove', onSwipeMove.bind(this));
    document.addEventListener('touchend', onSwipeEnd.bind(this));
    document.addEventListener('mouseup', onSwipeEnd.bind(this));
  }
  this._$root.addEventListener('dragstart', onDragStart.bind(this));
  // при изменении активности вкладки
  document.addEventListener('visibilitychange', onVisibilityChange.bind(this));
};
// перейти к следующему слайду
SimpleAdaptiveSlider.prototype.next = function() {
  this._direction = 'next';
  this._move();
};
// перейти к предыдущему слайду
SimpleAdaptiveSlider.prototype.prev = function() {
  this._direction = 'prev';
  this._move();
};
// управление автоматической сменой слайдов
SimpleAdaptiveSlider.prototype.autoplay = function(action) {
  this._autoplay('stop');
};
// инициализация слайдера
function getMainSlider() {
  mainSlider = new SimpleAdaptiveSlider('#mainSlider', {
    loop: true,
    autoplay: true,
    interval: 7000,
    swipe: true,
  });
}
function getReviewSlider() {
  truncateReview = new TruncateReview();
  truncateReview.truncate();
  reviewsSlider = new SimpleAdaptiveSlider('#reviewsSlider', {
    loop: true,
    autoplay: false,
    interval: 10000,
    swipe: true,
  });
}
