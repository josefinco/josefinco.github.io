var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

var elementos = document.querySelectorAll('.popup')
let array = Array.from(elementos);


array.forEach((item,index) => {
  item.addEventListener('mouseenter', event => {
    //TODO: ADICIONAR TRANSIÇÃO NO INDEX

    if(index%2==0){
      item.lastElementChild.classList.toggle("showup");
    }else{
      item.lastElementChild.classList.toggle("showdown");
    }
  })
});

array.forEach(item => {
  item.addEventListener('mouseleave', event => {
    item.lastElementChild.classList.remove("showup");
    item.lastElementChild.classList.remove("showdown");
  })
});


$(document).ready(function() {
  var $target = $('.anime'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});


