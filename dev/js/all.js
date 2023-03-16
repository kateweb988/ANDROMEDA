
document.addEventListener("DOMContentLoaded", () => {
   const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)

});
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
       e.preventDefault();
       $(this).parents('form').submit();
    })
    $.validator.addMethod(
       "regex",
       function (value, element, regexp) {
          var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
       },
       "Please check your input."
    );
    function valEl(el) {
 
       el.validate({
          rules: {
             tel: {
                required: true,
                regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
             },
             name: {
                required: true
             },
             email: {
                required: true,
                email: true
             }
          },
          messages: {
             tel: {
                required: 'Поле обязательно для заполнения',
                regex: 'Телефон может содержать символы + - ()'
             },
             name: {
                required: 'Поле обязательно для заполнения',
             },
             email: {
                required: 'Поле обязательно для заполнения',
                email: 'Неверный формат E-mail'
             }
          },
          submitHandler: function (form) {
             $('#loader').fadeIn();
             var $form = $(form);
             var $formId = $(form).attr('id');
             switch ($formId) {
                case 'popupResult':
                   $.ajax({
                      type: 'POST',
                      url: $form.attr('action'),
                      data: $form.serialize(),
                   })
                      .always(function (response) {
                         setTimeout(function () {
                            $('#loader').fadeOut();
                         }, 800);
                         setTimeout(function () {
                            $.arcticmodal('close');
                            $('#popup-thank').arcticmodal({});
                            $form.trigger('reset');
                            //строки для остлеживания целей в Я.Метрике и Google Analytics
                         }, 1100);
 
                      });
                   break;
             }
             return false;
          }
       })
    }
 
    $('.js-form').each(function () {
       valEl($(this));
    });
    $('[data-scroll]').on('click', function () {
       $('html, body').animate({
          scrollTop: $($.attr(this, 'data-scroll')).offset().top
       }, 2000);
       event.preventDefault();
    })
 });
  
});
// document.addEventListener("DOMContentLoaded", () => {
//   $(window).bind('scroll',function(e){
//     parallaxScroll();
// });

// /* Scroll the background layers */

// function parallaxScroll(){
//     var scrolled = $(window).scrollTop();
//     $('#about .sub').css('top',(-250+(scrolled*0.48))+'px');
//     $('#van .sub').css('top',(-600+(scrolled*0.48))+'px');
//     $('#order .sub').css('top',(-1600+(scrolled*0.5))+'px');
//     $('#faq .sub').css('top',(-1900+(scrolled*0.44))+'px');
//     $('#rev .sub').css('top',(-1600+(scrolled*0.3))+'px');
//     $('#calc .sub').css('top',(-1200+(scrolled*0.48))+'px');
//   };
// });
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for(var i = 0; i < accordeonButtons.length; i++) {
      var accordeonButton = accordeonButtons[i];
  
      accordeonButton.addEventListener("click", toggleItems, false);
  }
  
  //пишем функцию
  function toggleItems() {
  
      // переменная кнопки(актульная) с классом
      var itemClass = this.className;
  
      // добавляем всем кнопкам класс close
      for(var i = 0; i < accordeonButtons.length; i++) {
          accordeonButtons[i].className = "accordeon__button closed";
      }
  
      // закрываем все открытые панели с текстом
      var pannels = document.getElementsByClassName("accordeon__panel");
      for (var z = 0; z < pannels.length; z++) {
          pannels[z].style.maxHeight = 0;
      }
  
      // проверка. если кнопка имеет класс close при нажатии
      // к актуальной(нажатой) кнопке добававляем активный класс
      // а панели - которая находится рядом задаем высоту
      if(itemClass == "accordeon__button closed") {
          this.className = "accordeon__button active";
          var panel = this.nextElementSibling;
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  
  }
});
document.addEventListener("DOMContentLoaded", () => {
   let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
   let popupBg3 = document.querySelector('.popup__bg3');
let popup3 = document.querySelector('.popup3');
let openPopupButtons3 = document.querySelectorAll('.header__link1');
let closePopupButton3 = document.querySelector('.close-popup3');

openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg3.classList.add('active');
        popup3.classList.add('active');
    })
});

closePopupButton3.addEventListener('click',() => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg3) {
        popupBg3.classList.remove('active');
        popup3.classList.remove('active');
    }
});
document.addEventListener('keydown', function(e) {
   if (e.key === 'Escape') {
   //ваша функция закрытия окна
     popupBg3.classList.remove('active');
     popup3.classList.remove('active');
   }
   });
});
document.addEventListener("DOMContentLoaded", () => {
   //popup
	let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.open-popup');
  let closePopupButton = document.querySelector('.close-popup');
  
  openPopupButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          popupBg.classList.add('active');
          popup.classList.add('active');
      })
  });
  
  closePopupButton.addEventListener('click',() => {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
  });
  
  document.addEventListener('click', (e) => {
      if(e.target === popupBg) {
          popupBg.classList.remove('active');
          popup.classList.remove('active');
      }
  });
  document.addEventListener('keydown', function(e) {
   if (e.key === 'Escape') {
   //ваша функция закрытия окна
     popupBg.classList.remove('active');
     popup.classList.remove('active');
   }
   });
  let popupBg2 = document.querySelector('.popup__bg2');
let popup2 = document.querySelector('.popup2');
let openPopupButtons2 = document.querySelectorAll('.open-popup2');
let closePopupButton2 = document.querySelector('.close-popup2');

openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg2.classList.add('active');
        popup2.classList.add('active');
    })
});
document.addEventListener('keydown', function(e) {
   if (e.key === 'Escape') {
   //ваша функция закрытия окна
     popupBg2.classList.remove('active');
     popup2.classList.remove('active');
   }
   });

closePopupButton2.addEventListener('click',() => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg2) {
        popupBg2.classList.remove('active');
        popup2.classList.remove('active');
    }
});

});