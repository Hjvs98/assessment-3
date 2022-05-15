// let faveCol = document.querySelector(`#color`);
// let favePlace = document.querySelector(`#place`);
// let faveRitual = document.querySelector(`#ritual`);

// function clickEventCol(event) {
//   event.preventDefault();
//   alert("My Favorite Color is Army Green");
// }
// faveCol.addEventListener("click", clickEventCol);

// function clickEventPla(event) {
//   event.preventDefault();
//   alert("My Favorite Place is Greece");
// }
// favePlace.addEventListener("click", clickEventPla);
// function clickEventRit(event) {
//   event.preventDefault();
//   alert("My Favorite Ritual is golf warmups");
// }
// faveRitual.addEventListener("click", clickEventRit);
////////////////////////////////////////////////////////////
const faveBtns = document.querySelectorAll(`button`);

function selectFave(e) {
  const faveOption = e.target.textContent;
  const buttons = document.querySelectorAll(`button`);
  for (let i = 0; i < buttons.length; i++) {
    if (faveOption === "My Favorite Color") {
      alert("My Favorite Color is Army Green");
    } else if (faveOption === "My Favorite Place") {
      alert("My Favorite Place is Greece");
    } else if (faveOption === "My Favorite Ritual") {
      alert("My Favorite Ritual is Golf Warmups");
    }
    return faveOption;
  }
}
for (let i = 0; i < faveBtns.length; i++) {
  faveBtns[i].addEventListener("click", selectFave);
}

const sub = document.querySelector(`.glow-on-over`);
function handleClick(event) {
  alert("Your Form Has Been Submitted");
}
sub.addEventListener("click", handleClick);
