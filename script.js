$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar2").addClass("sticky2");
    } else {
      $(".navbar2").removeClass("sticky2");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    if (this.scrollY > 1900) {
      $(".right2").addClass("loading");
    } else {
      $(".right2").removeClass("loading");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu navbar script
  $(".menu-button").click(function () {
    $(".navbar2 .menu2").toggleClass("active");
    $(".menu-button i").toggleClass("active");
  });

  // typing animation
  // Hire me if you think i'm fit for your job
  var typed = new Typed(".typing", {
    // strings: ["Welcome to my web portfolio", ""],
    strings: ["Junior Web Developer", "Junior Frontend", "Junior Backend", "Designer", "IT Support"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Junior Web Developer", "Junior Frontend", "Junior Backend", "Designer", "IT Support"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });


});
// hide when click image project
function myFunction() {
  var x = document.getElementById("hide");
  var y = document.getElementById("hide2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction2() {
  var x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//

// send message contact
const scriptURL = "https://script.google.com/macros/s/AKfycbxmOY1PAKM1LE2RL3_yeuIiyB0q83pXOLKkMivjVmCHiNnRBWAn5SArDTmXowQRsEWlKw/exec";
const form = document.forms["portfolio-form-contact"];
// loading
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit di klik
  // tampilkan tombol loading, hilangkan tombol kirim
  // btnLoading.classList.toggle("d-none");
  // btnKirim.classList.toggle("d-none");
  btnLoading.style.display = btnLoading.style.display === "none" ? "" : "none";
  btnKirim.style.display = btnKirim.style.display === "" ? "none" : "";
  //
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim, hilangkan tombol loading
      // btnLoading.classList.toggle("d-none");
      // btnKirim.classList.toggle("d-none");
      btnLoading.style.display = btnLoading.style.display === "none" ? "" : "none";
      btnKirim.style.display = btnKirim.style.display === "" ? "none" : "";
      // tampilkan alert
      alert.style.display = alert.style.display === "none" ? "" : "none";

      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// owl carousel script
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});