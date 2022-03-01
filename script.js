// Preloader
window.onload = function() {
  typeWriter(document.querySelector('.loading'));
  setTimeout(function() {
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
      typeWriter(titulo);
    }
  }, 1100)
}

// animação POPUP
var elementos = document.querySelectorAll('.popup')
let array = Array.from(elementos);
array.forEach((item,index) => {
  item.addEventListener('mouseenter', event => {
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

// Debounce Scroll/Whell
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


// Animação Scroll
const target = document.querySelectorAll('[data-anime]');
const textTarget = document.querySelectorAll('[data-animetext]');
const animationClass = 'animate';
const animationTextClass = 'animetext';
var windowPage = document.querySelector('.outer-wrapper')

function animate() {
  var parentPos = document.querySelector('.outer-wrapper').getBoundingClientRect(),
  childPos = document.querySelector('.wrapper').getBoundingClientRect(),

    relativePos = {};
    relativePos.left = childPos.left - parentPos.left;
    const windowTop = (Math.abs(relativePos.left * 3) / 4) ;

    textTarget.forEach(function(element){
      relativeTargetPos =  element.getBoundingClientRect().left - parentPos.left;
      const targetTop = Math.abs(relativeTargetPos);
      if (windowTop > targetTop){
        element.classList.add(animationTextClass);
      }else{
        element.classList.remove(animationTextClass);
      }

    })

    target.forEach(function(element){
     relativeTargetPos =  element.getBoundingClientRect().left - parentPos.left;
      const targetTop = Math.abs(relativeTargetPos);
      if (windowTop > targetTop){
        element.classList.add(animationClass);
      }else{
        element.classList.remove(animationClass);
      }

    })

  
}

animate();

windowPage.addEventListener('wheel', debounce(function(){
  animate();
}, 200));

// Animação máquina de escrever
const titulo = document.querySelector('.apresentacao-titulo');

function typeWriter(elemento){
const textoArray = elemento.innerHTML.split('');
elemento.innerHTML = '';
textoArray.forEach((letra, index) => {
  setTimeout(() => elemento.innerHTML += letra, 75*index )
});

}