const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

//?nav-tabs

let tab_header = document.querySelector(".tab-header");

let tabli = document.querySelectorAll(".tab-header li");
let tab_inner = document.querySelectorAll(".tab-inner");
console.log(tabli);

tab_header.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    tabli.forEach(function (li_elem) {
      li_elem.classList.remove("active");
    });
    e.target.classList.add("active");

    tab_inner.forEach(function (tabs) {
      tabs.classList.remove("active");
    });
    activetab = document.getElementById(id);
    activetab.classList.add("active");
  }
});
