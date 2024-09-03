function closePopup(event) {
  const bg = document.getElementById("bg-popup");
  // const name = document.querySelector(".popup-wrap");
  var parent = event.target.parentElement.parentElement;

  bg.classList.remove('on');
  parent.classList.remove('on');

  bg.classList.add('off');
  parent.classList.add('off');
}

function openPopup(str)  {
  const bg = document.getElementById("bg-popup");
  const name = document.querySelector("." + str);

  if (name.classList.contains('popup-wrap')){
    bg.classList.add('on');
    name.classList.add('on');
  }
}  