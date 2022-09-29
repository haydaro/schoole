let reflech = document.querySelector(".reflech i");
let arrreflech = Array.from(document.querySelectorAll(".rigth ul a"));
let bodyarray = Array.from(document.querySelectorAll(".queri >div"));
let god = Array.from(document.querySelectorAll(".god div"));
let goo = Array.from(document.querySelectorAll(".goo div"));
let choys = Array.from(document.querySelectorAll(".choys ul li"));
let img = Array.from(document.querySelectorAll(".events .img > div"));
let head = document.querySelector("#head");
let zero = document.querySelector(".head .top .start");
let order = 0;
reflech.onclick = function () {
  document.querySelector(".rigth ul").classList.toggle("value");
};
window.onscroll = function () {
  bodyarray.forEach((e) => {
    if (e.offsetTop <= scrollY + 100) {
      let id = e.id;
      arrreflech.forEach((r) => {
        r.dataset.goal == id
          ? (r.className = "active")
          : r.classList.remove("active");
      });
    }
  });
  if (scrollY == head.offsetTop) {
    zero.className = "start";
    document.querySelector(".head .top ul").classList.remove("topo");
  } else {
    zero.className = "zero";
    document.querySelector(".head .top ul").classList.add("topo");
  }
};
let secrolarrimg = setInterval(() => {
  let num = order;
  order++;
  order == 3 ? (order = 0) : false;
  god[num].className = "item";
  god[order].className = "active";
  goo[num].className = "item";
  goo[order].className = "active";
}, 3000);
choys.forEach((e) => {
  e.addEventListener("click", function () {
    choys.forEach((c) => {
      c.classList.remove("active");
    });
    e.className = "active";
    img.forEach((f) => {
      e.dataset.goal == f.dataset.goal
        ? (f.style.display = "block")
        : (f.style.display = "none");
      e.dataset.goal == "all" ? (f.style.display = "block") : false;
    });
  });
});
