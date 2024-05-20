Shery.mouseFollower();
Shery.makeMagnet(".navbar li, .image, .scroll, .ss1 img, .f1 i");


var tl = gsap.timeline();

tl.to("#loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: time(),
});

tl.to("#loader", {
  top: "-100vh",
  //   delay: 0,
  duration: 1,
});

function time() {
  var a = 0;

  setInterval(function () {
    if (a < 100) {
      a = a + Math.floor(Math.random() * 20);
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 100);
}

tl.from(".nav1 li, .nav2 li", {
  y: -100,
  duration: 0.35,
  delay: 0.1,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".part1 h5, .part1 h3, .part1 p, .info1, .part2", {
  y: -100,
  duration: 0.4,
  delay: 0.1,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".scroll i", {
  scale: 0,
  opacity: 0,
});

tl.to(".scroll i", {
  y: 30,
  repeat: -1,
  duration: 0.7,
  yoyo: true,
});

let typed = new Typed(".typing", {
  strings: ["Pranav Soni", "Wordpress Developer", "Frontend Developer", "UI Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 200,
  loop: true,
  startDelay: 6500,
});

let body = document.querySelector("body");
let nav = document.querySelector(".navbar");
let btn = document.querySelector(".sun");
let name_changer = document.querySelector(".part1 span");
let info1 = document.querySelector(".info1");
let info3 = document.querySelector(".info3");
let p2_img = document.querySelector(".part2 img");
let scroller = document.querySelector(".scroll button");
let hr1 = document.querySelector(".hr1");
let hr2 = document.querySelector(".hr2");
let hr3 = document.querySelector(".hr3");
let hr4 = document.querySelector(".hr4");
let s1_h2 = document.querySelector(".s1");
let ss1_img = document.querySelector(".ss1 img");
let sl1_i1 = document.querySelector(".i1");
let sl1_i2 = document.querySelector(".i2");
let sl1_i3 = document.querySelector(".i3");
let sl1_i4 = document.querySelector(".i4");
let sl1_i5 = document.querySelector(".i5");
let t1_h2 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
let p1 = document.querySelector(".p1");
let p2_1 = document.querySelector(".p2_1 img");
let p2_2_h3 = document.querySelector(".p2_2 h3");
let h22_span = document.querySelector(".h22 span");
let p2_21 = document.querySelector(".p2_21");
let p3_3 = document.querySelector(".p3_3");
let p3_2_h3 = document.querySelector(".p3_2 h3");
let h3_3_span = document.querySelector(".h3_3 span");
let p3_1_img = document.querySelector(".p3_1 img");
let p2_2_img = document.querySelector(".p2_2 img");
let pr2_2_h3 = document.querySelector(".pr2_2 h3");
let pr2_2_h22_1 = document.querySelector(".pr2_2 .h22_1 span");
let pr2_3 = document.querySelector(".pr2_3");
let mid_h5 = document.querySelector(".mid h5");
let f1_1_i = document.querySelector(".f1_1 i");
let f1_2_i = document.querySelector(".f1_2 i");
let f1_1 = document.querySelector(".f1_1");
let f1_2 = document.querySelector(".f1_2");
let line = document.querySelector(".line");
let f2_h5 = document.querySelector(".f2 h5");
let ip1_input = document.querySelector(".ip1 input");
let ip1_label = document.querySelector(".ip1 label");
let ip2_input = document.querySelector(".ip2 input");
let ip2_label = document.querySelector(".ip2 label");
let ip3_textarea = document.querySelector(".ip3 textarea");
let ip3_label = document.querySelector(".ip3 label");
let bn = document.querySelector(".bn");
let last = document.querySelector(".last");

btn.addEventListener("click", () => {
  gsap.to(".sun", {
    rotation: "+=360"
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const liElements = document.querySelectorAll('.nav2 li');
  liElements.forEach(function (li) {
    li.addEventListener('click', function () {
      const id = this.id.replace('Link', '');
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

const liElements = document.querySelectorAll('li');

// Add click event listener to each li element
liElements.forEach(li => {
  li.addEventListener('click', () => {
    // Get the title attribute of the child i element
    const title = li.querySelector('i').getAttribute('title');

    // Redirect based on title
    switch (title) {
      case 'Linkedin':
        window.open('https://www.linkedin.com/in/pranav-soni-93889b229/', '_blank'); // Replace with your LinkedIn URL
        break;
      case 'Github':
        window.open('https://github.com/pranavsoni27', '_blank'); // Replace with your GitHub URL
        break;
      // Add more cases for additional links if needed
      default:
        // Do nothing if title doesn't match
        break;
    }
  });
});

document.getElementById('g1').addEventListener('click', function () {
  window.open('https://github.com/pranavsoni27/Gaming-Website', '_blank');
});

document.getElementById('d1').addEventListener('click', function () {
  window.open('https://pranavsoni27.github.io/Gaming-Website/', '_blank');
});

document.getElementById('g2').addEventListener('click', function () {
  window.open('https://github.com/pranavsoni27/snake-game', '_blank');
});

document.getElementById('d2').addEventListener('click', function () {
  window.open('https://pranavsoni27.github.io/snake-game/', '_blank');
});

document.getElementById('g3').addEventListener('click', function () {
  window.open('https://github.com/pranavsoni27/Blog-Website', '_blank');
});

document.getElementById('d3').addEventListener('click', function () {
  window.open('https://pranavsoni27.github.io/Blog-Website/', '_blank');
});

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.f1_2').addEventListener('click', () => {
      window.location.href = 'mailto:pranavsoni2702@gmail.com';
  });
});

document.getElementById("downloadBtn").addEventListener("click", function() {
  // Google Drive link to the CV file
  var cvLink = "https://drive.google.com/file/d/1QenYO4PGkEN6VWDzdK5CvqID1rnElTCM/view?usp=sharing";
  // Open the link in a new tab
  window.open(cvLink, "_blank");
});