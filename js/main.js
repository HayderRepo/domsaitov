const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

//?nav-tabs


//!nav primary

let tab_header_p = document.querySelector(".tab-header__primary");

let tabli_p = document.querySelectorAll(".tab-header__primary li");
let tab_inner_p = document.querySelectorAll(".tab-inner_p");
console.log(tabli_p);

tab_header_p.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    tabli_p.forEach(function (li_elem) {
      li_elem.classList.remove("active");
    });
    e.target.classList.add("active");

    tab_inner_p.forEach(function (tabs) {
      tabs.classList.remove("active");
    });
    activetab = document.getElementById(id);
    activetab.classList.add("active");
  }
});


//!secondary nav-tabs


let tab_header_s = document.querySelector(".tab-header__secondary");

let tabli_s = document.querySelectorAll(".tab-header__secondary li");
let tab_inner_s = document.querySelectorAll(".tab-inner_s");
console.log(tabli_s);

tab_header_s.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    tabli_s.forEach(function (li_elem) {
      li_elem.classList.remove("active");
    });
    e.target.classList.add("active");

    tab_inner_s.forEach(function (tabs) {
      tabs.classList.remove("active");
    });
    activetab = document.getElementById(id);
    activetab.classList.add("active");
  }
});


