console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  alert("Your Response Has Been Submitted!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let catPic = document.querySelector(`#cat-ducky`);

function handleMouseover(event) {
  event.preventDefault();
  alert("You as fine as china");
}
catPic.addEventListener("mouseover", handleMouseover);

// form.addEventListener("submit", () => {
// 	count = 0;
// 	setCounterDisplay();
// 	alert("Your Response Has Been Submitted!");
//   });

//   document.querySelector("form").addEventListener("submit", handleSubmit);
