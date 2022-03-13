// add our skills progress animated width
// let skillsSection = document.querySelector(".our-skills");
// let skillsProgressSpans = document.querySelectorAll(
//   ".our-skills .skills .skill .progress span"
// );

// window.onscroll = function () {
//   console.log("hi");
// };

// window.onscroll = function () {
//   console.log("skillsProgressSpans");
//   // if (window.scrollY === skillsSection.offsetTop) {
//   //   skillsProgressSpans.forEach((span) => {
//   //     span.style.width = span.dataset.width;
//   //   });
//   // } else {
//   //   console.log("no");
//   // }
// };

// add counter down on events section
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .info .time .unit .days-left").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .info .time .unit .hours-left").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .info .time .unit .minutes-left").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .info .time .unit .seconds-left").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// add increase counter on scroll at start stats section
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .number .num");
let started = false; // function not started yet

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop - 150) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
