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
