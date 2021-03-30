//Parallax
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

//Navbar scroll animation
const sections = document.querySelectorAll("section");
const navbar = document.querySelectorAll(".nvbar");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navbar.forEach((nvbar) => {
    nvbar.classList.remove("active");
    if (nvbar.classList.contains(current)) {
      nvbar.classList.add("active");
    }
  });
});

//Contact Form
const scriptURL = "https://script.google.com/macros/s/AKfycbyZycMQxm0EuVEySyCFzW02e3iLDWWVdDMkSczYQpsenRooyqtII06NmH3JknAtJBQF9Q/exec";
const form = document.forms["portfolio-contact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Menghilangkan button kirim, Menampilkan Button loading
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      // Menghilangkan button loading, Menampilkan Button kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //menampilkan alert
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//Chat
window.$crisp=[];
window.CRISP_WEBSITE_ID="4084e0ea-1def-45c6-a06e-1e4230910cd5";
(function(){
  d=document;
  s=d.createElement("script");
  s.src="https://client.crisp.chat/l.js";
  s.async=1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();
