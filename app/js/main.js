$(document).ready(function(){

    $('.slider__right').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       asNavFor: '.thumbs',
       arrows: false,
       fade: true,
       autoplay: true,
       adaptiveHeight: false,
      variableWidth: false,
    });

    $('.thumbs').slick({
       arrows: false,
       slidesToShow: 6,
       slidesToScroll: 6,
       asNavFor: '.slider__right',
       focusOnSelect: true,
       adaptiveHeight: false,
       variableWidth: false,
       responsive: [
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 5, 
          }
        },
        {
            breakpoint: 752,
            settings: {
              slidesToShow: 4, 
            }
        },
          {
            breakpoint: 604,
            settings: {
              slidesToShow: 3, 
            }
        },
        {
           breakpoint: 472,
           settings: {
             slidesToShow: 2, 
           }
       },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
   });

   $('.slider-video__inner').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: false,
    variableWidth: false,
    prevArrow: '<img src="images/icon-slider-prew.svg" alt="" class="slider__arrow slider__arrow-prew">',
    nextArrow: '<img src="images/icon-slider-next.svg" alt="" class="slider__arrow slider__arrow-next">',
    responsive: [
        {
          breakpoint: 1157,
          settings: {
            slidesToShow: 2, 
          }
        },
        {
            breakpoint: 803,
            settings: {
              slidesToShow: 1, 
            }
        },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
  });


  $('.hamburger').removeClass('is-active');
    
    $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active');
        $('.header__menu').toggleClass('header__menu--active');
    });


    $('.product-card__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.product-card__thumbs',
      nextArrow: '<img src="images/slider-product-next.svg" alt="" class="product-card__arrow product-card__arrow-next">',
      prevArrow: '<img src="images/slider-product-prew.svg" alt="" class="product-card__arrow product-card__arrow-prew">',
      responsive: [
        {
          breakpoint: 617,
          settings: {
            arrows: false,
            autoplay: true,
          }
        },
        
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    $('.product-card__thumbs').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-card__slider',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      adaptiveHeight: false,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 597,
          settings: {
            slidesToShow: 3, 
          }
        },
        {
            breakpoint: 752,
            settings: {
              slidesToShow: 3, 
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

    $('.ideas__slider').slick({
      dots: true,
      arrows: false,
      centerMode: true,
      slidesToShow: 5,
      adaptiveHeight: true,
      variableWidth: true,
      autoplay: true,
      dotsClass: 'slick-dots-cart',
    });

    $('.certificates__slider').slick({
      dots: true,
      arrows: true,
      // slidesToShow: 2,
      // centerMode: true,
      variableWidth: true,
      autoplay: true,
      dotsClass: 'slick-dots-certificates',
      nextArrow: '<img src="images/certificates-next.svg" alt="" class="certificates__arrow certificates__arrow-next">',
      prevArrow: '<img src="images/certificates-prew.svg" alt="" class="certificates__arrow certificates__arrow-prew">',
      responsive: [
        {
          breakpoint: 390,
          settings: {
            variableWidth: false,
            slidesToShow: 1, 
            slidesToScroll: 1,
          }
        },
      ]

    });

    $('.workman__slider').slick({
      dots: false,
      arrows: false,
      slidesToShow: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 844,
          settings: {
            variableWidth: false,
            slidesToShow: 3, 
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 604,
          settings: {
            variableWidth: false,
            slidesToShow: 2, 
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 398,
          settings: {
            variableWidth: false,
            slidesToShow: 1, 
            slidesToScroll: 1,
          }
        },
      ]
    });



    const accordion = () => { //функция переключения акардион списка характеристик
      const characteristicsListElem = document.querySelector('.characteristics__list'); // получаем список характеристик
      const characteristicsItemElems = document.querySelectorAll('.characteristics__item'); // получаем элемент списка
  
      //Если изначально в HTML дать какому-либо спойлеру active, то планвости не будет, так как не прописан height. Этот скрипт исправляет это:
      characteristicsItemElems.forEach(elem => { // устанавлевыет один открытый таб в верстке прописываем открытому табу active
        if (elem.children[1].classList.contains('active')) {
          elem.children[1].style.height = elem.children[1].scrollHeight + "px";
        }
      })
  
      const open = (button, dropDown) => { // функция открытия таба
        //Закрыть все спойлеры
        closeAllDrops(button, dropDown);
  
        //Изначально свойство height равно 0. Потом мы приравниваем его к scrollHeight, чтобы сработал transition. И лишь затем добавляяем класс active, который устанавливает height на auto
        dropDown.style.height = dropDown.scrollHeight + "px"; // устанавливаем высоту таба
        button.classList.add('active');
        dropDown.classList.add('active');
      };
  
      const close = (button, dropDown) => { // функция закрытие таба
        button.classList.remove('active');
        dropDown.classList.remove('active');
        dropDown.style.height = ''; //обнуляем значение, и он возьмет его из css(height: 0)
      };
  
      const closeAllDrops = (button, dropDown) => { // функция закратия других окон при открытом одном
        characteristicsItemElems.forEach(elem => { // перебор элементов всех
          if (elem.children[0] !== button && elem.children[1] !== dropDown) {
            //Закрыть все спойлеры кроме переданных button и dropDown. Здесь childern[0] и children[1] это кнопка и контент соответственно
  
            //Закрываем только те айтемы, у которых есть active
            if (elem.children[0].classList.contains("active")) close(elem.children[0], elem.children[1]);
          }
        });
      };
  
      characteristicsListElem.addEventListener('click', event => { // навешиваем событие на кнопку открытия таба с делегированием
        const target = event.target;
        if (target.classList.contains('characteristics__title')) { // определяем по какому элементу кликнули
          const parent = target.closest('.characteristics__item'); // ищем родителя кнопки подымаемся к нему с помощью closest
          const description = parent.querySelector('.characteristics__description'); //открываем характеристику 
          description.classList.contains('active') // проверяем наличе класса active
            ? close(event.target, description)
            : open(event.target, description);
        }
  
      });
  
      //Если нужно, чтобы аккордеон закрывался при клике мимо него
      document.addEventListener('click', event => {
        const target = event.target;
        if (!target.closest('.characteristics__list')) {
          closeAllDrops();
        }
      })
  
  
  
      //БЕЗ ДЕЛЕГИРОВАНИЯ
      // const characteristicsTitle = document.querySelectorAll('.characteristics__title');
      // const characteristicsDescription = document.querySelectorAll('.characteristics__description');
  
      // characteristicsTitle.forEach((elem, i) => {
      //   elem.addEventListener('click', () => {
      //     elem.classList.toggle('active');
      //     characteristicsDescription[i].classList.toggle('active');
      //   })
      // })
    };

    accordion();

 

});

var mixer = mixitup('.gallery__inner', {
  load: {
      filter: '.bedroom',
  }

});