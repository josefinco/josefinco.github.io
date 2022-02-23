var elementos = document.querySelectorAll('.popup')
let array = Array.from(elementos);


array.forEach((item,index) => {
  item.addEventListener('mouseenter', event => {
    //TODO: ADICIONAR TRANSIÇÃO NO INDEX

    if(index%2==0){
      item.lastElementChild.classList.toggle("show");
      console.log("PRA cima");
    }else{
      console.log("PRA BAIXO");
      item.lastElementChild.classList.toggle("show");
    }
  })
});

array.forEach(item => {
  item.addEventListener('mouseleave', event => {
    item.lastElementChild.classList.remove("show");
  })
});
