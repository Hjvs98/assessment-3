document.querySelectorAll(".collapse").forEach(function (current) {
  let toggler = document.createElement("div");
  toggler.className = "toggler";
  current.appendChild(toggler);

  toggler.addEventListener(
    "click",
    function (e) {
      current.classList.toggle("open");
    },
    false
  );
});
document.querySelectorAll(".collapsible").forEach(function (current) {
  let toggler = document.createElement("div");
  toggler.className = "toggler";
  current.appendChild(toggler);

  toggler.addEventListener(
    "click",
    function (e) {
      current.classList.toggle("open");
    },
    false
  );
});
