function closePopup1(event) {
  const bg = document.getElementById("bg-popup1");
  // const name = document.querySelector(".popup-wrap");
  var parent = event.target.parentElement.parentElement;

  bg.classList.remove('on');
  parent.classList.remove('on');

  bg.classList.add('off');
  parent.classList.add('off');
}

function openPopup1(str)  {
  const bg = document.getElementById("bg-popup1");
  const name = document.querySelector("." + str);

  if (name.classList.contains('popup-wrap')){
    bg.classList.add('on');
    name.classList.add('on');
  }
}  

function closePopup2(event) {
  const bg = document.getElementById("bg-popup2");
  // const name = document.querySelector(".popup-wrap");
  var parent = event.target.parentElement.parentElement;

  bg.classList.remove('on');
  parent.classList.remove('on');

  bg.classList.add('off');
  parent.classList.add('off');
}

function openPopup2(str)  {
  const bg = document.getElementById("bg-popup2");
  const name = document.querySelector("." + str);

  if (name.classList.contains('popup-wrap2')){
    bg.classList.add('on');
    name.classList.add('on');
  }
}  