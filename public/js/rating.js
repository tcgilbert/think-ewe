const starOne = document.getElementById('star-one');
const starTwo = document.getElementById('star-two');
const starThree = document.getElementById('star-three');
let notSelected = true;


// Hover for stars
starOne.addEventListener("mouseover", () => {
  console.log("on");
  if (notSelected) {
    starOne.setAttribute("src", "/static/img/star.svg");
  }
});

starOne.addEventListener("mouseout", () => {
  console.log("off");
  if (notSelected) {
    starOne.setAttribute("src", "/static/img/star-empty.svg");
  }
});

starTwo.addEventListener("mouseover", () => {
  console.log("on");
  if (notSelected) {
    starOne.setAttribute("src", "/static/img/star.svg");
    starTwo.setAttribute("src", "/static/img/star.svg");
  }
});

starTwo.addEventListener("mouseout", () => {
  console.log("off");
  if (notSelected) {
    starOne.setAttribute("src", "/static/img/star-empty.svg");
    starTwo.setAttribute("src", "/static/img/star-empty.svg");
  }
});

starThree.addEventListener("mouseover", () => {
  console.log("on");
  if (notSelected) {
    starOne.setAttribute("src", "/static/img/star.svg");
    starTwo.setAttribute("src", "/static/img/star.svg");
    starThree.setAttribute("src", "/static/img/star.svg");
  }
});

starThree.addEventListener("mouseout", () => {
  console.log("off");
  if (notSelected) {
    starOne.setAttribute("src", "/static/img/star-empty.svg");
    starTwo.setAttribute("src", "/static/img/star-empty.svg");
    starThree.setAttribute("src", "/static/img/star-empty.svg");
  }
});

// Click for Stars

starOne.addEventListener("click", () => {
    console.log('clicked star one')
    if (notSelected) {
        notSelected = false;
        starOne.setAttribute("src", "/static/img/star.svg");
    }
    else {
        notSelected = true;
        starOne.setAttribute("src", "/static/img/star-empty.svg");
        starTwo.setAttribute("src", "/static/img/star-empty.svg");
        starThree.setAttribute("src", "/static/img/star-empty.svg");
    }
});

starTwo.addEventListener("click", () => {
    console.log('clicked star one')
    if (notSelected) {
        notSelected = false;
        starOne.setAttribute("src", "/static/img/star.svg");
        starTwo.setAttribute("src", "/static/img/star.svg");
    }
    else {
        notSelected = true;
        starOne.setAttribute("src", "/static/img/star-empty.svg");
        starTwo.setAttribute("src", "/static/img/star-empty.svg");
        starThree.setAttribute("src", "/static/img/star-empty.svg");
    }
});

starThree.addEventListener("click", () => {
    console.log('clicked star one')
    if (notSelected) {
        notSelected = false;
        starOne.setAttribute("src", "/static/img/star.svg");
        starTwo.setAttribute("src", "/static/img/star.svg");
        starThree.setAttribute("src", "/static/img/star.svg");
    }
    else {
        notSelected = true;
        starOne.setAttribute("src", "/static/img/star-empty.svg");
        starTwo.setAttribute("src", "/static/img/star-empty.svg");
        starThree.setAttribute("src", "/static/img/star-empty.svg");
    }
});