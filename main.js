// responsive navbar
let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");

menu.addEventListener("click", () => {
  nav.classList.add("open");
});

close.addEventListener("click", () => {
  nav.classList.remove("open");
});
// fixed header on scrolling
let header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
// calculate BMI
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let resultBox = document.querySelector(".result");
  if (!height || !weight) {
    resultBox.textContent = "Please enter valid height and weight.";
    return;
  }

  // convert cm → meters
  let heightInMeters = height / 100;

  // BMI formula
  let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // classify result
  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal weight";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  // show result
  resultBox.textContent = `Your BMI is: ${bmi} (${status})`;
});

// scrolling animation
// home section
let homeLeft = document.querySelector(".home .container .left");
let homeRight = document.querySelector(".home .container .right");

let observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      homeLeft.classList.add("active");
      homeRight.classList.add("active");
    } else {
      homeLeft.classList.remove("active");
      homeRight.classList.remove("active");
    }
  });
});

observer1.observe(homeLeft);
observer1.observe(homeRight);
// brands logos
let brands = document.querySelectorAll(".brands .container .img");

let observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

brands.forEach((brand) => {
  observer2.observe(brand);
});
// program cards
let programCards = document.querySelectorAll(".program .container .card");

let observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

programCards.forEach((card) => {
  observer3.observe(card);
});
// choose-us section
let chooseUsLeft = document.querySelector(".choose-us .left");
let chooseUsRight = document.querySelector(".choose-us .right");

let observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      chooseUsLeft.classList.add("active");
      chooseUsRight.classList.add("active");
    } else {
      chooseUsLeft.classList.remove("active");
      chooseUsRight.classList.remove("active");
    }
  });
});

observer4.observe(chooseUsLeft);
observer4.observe(chooseUsRight);
// pricing plans
let pricingPlans = document.querySelectorAll(".pricing .container .plan");

let observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

pricingPlans.forEach((card) => {
  observer5.observe(card);
});
// bmi section
let bmiLeft = document.querySelector(".bmi .left");
let bmiRight = document.querySelector(".bmi .right");

let observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      bmiLeft.classList.add("active");
      bmiRight.classList.add("active");
    } else {
      bmiLeft.classList.remove("active");
      bmiRight.classList.remove("active");
    }
  });
});

observer6.observe(bmiLeft);
observer6.observe(bmiRight);
// footer columns
let footerCols = document.querySelectorAll("footer .container .col");
let footerLeft = document.querySelector("footer .container .left");
let copyRight = document.querySelector(".copy-right");

let observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

footerCols.forEach((col) => {
  observer7.observe(col);
});
observer7.observe(footerLeft);
observer7.observe(copyRight);