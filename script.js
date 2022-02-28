window.onload = function() {
  setTimeout(function() {
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
    }
  }, 1000)
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

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
var windowPage = document.querySelector('.outer-wrapper')

function animate() {

  var parentPos = document.querySelector('.outer-wrapper').getBoundingClientRect(),
  childPos = document.querySelector('.wrapper').getBoundingClientRect(),
    relativePos = {};
    relativePos.top = childPos.top - parentPos.top,
    relativePos.right = childPos.right - parentPos.right,
    relativePos.bottom = childPos.bottom - parentPos.bottom,
    relativePos.left = childPos.left - parentPos.left;
    const windowTop = Math.abs(relativePos.left)+ 500 ;

    target.forEach(function(element){
      childPos = document.querySelector('.wrapper').getBoundingClientRect(),
      relativeTargetPos = {};
      relativeTargetPos.top =  element.getBoundingClientRect().top - parentPos.top,
      relativeTargetPos.right =  element.getBoundingClientRect().right - parentPos.right,
      relativeTargetPos.bottom =  element.getBoundingClientRect().bottom - parentPos.bottom,
      relativeTargetPos.left =  element.getBoundingClientRect().left - parentPos.left;
      const targetTop = Math.abs(relativeTargetPos.left);
      if (windowTop > (element.getBoundingClientRect().left - parentPos.left)){
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


