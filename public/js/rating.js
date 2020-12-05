const starOne = document.getElementById('star-one');
const starTwo = document.getElementById('star-two');
const starThree = document.getElementById('star-three');
const rating = document.getElementById('rating');
const ratingDisplayed = document.getElementById('rating-displayed');
let notSelected = true;


// Hover for stars
starOne.addEventListener("mouseover", () => {
  console.log("on");
  if (notSelected) {
    ratingDisplayed.innerText = "Good!";
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
    ratingDisplayed.innerText = "Great!";
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
    ratingDisplayed.innerText = "Exceptional!";
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
        rating.setAttribute("value", "1");
        ratingDisplayed.innerText = "Good!";
        starOne.setAttribute("src", "/static/img/star.svg");
    }
    else {
        notSelected = true;
        rating.setAttribute("value", "");
        ratingDisplayed.innerText = "";
        starOne.setAttribute("src", "/static/img/star-empty.svg");
        starTwo.setAttribute("src", "/static/img/star-empty.svg");
        starThree.setAttribute("src", "/static/img/star-empty.svg");
    }
});

starTwo.addEventListener("click", () => {
    console.log('clicked star one')
    if (notSelected) {
        notSelected = false;
        rating.setAttribute("value", "2");
        ratingDisplayed.innerText = "Great!";
        starOne.setAttribute("src", "/static/img/star.svg");
        starTwo.setAttribute("src", "/static/img/star.svg");
    }
    else {
        notSelected = true;
        rating.setAttribute("value", "");
        ratingDisplayed.innerText = "";
        starOne.setAttribute("src", "/static/img/star-empty.svg");
        starTwo.setAttribute("src", "/static/img/star-empty.svg");
        starThree.setAttribute("src", "/static/img/star-empty.svg");
    }
});

starThree.addEventListener("click", () => {
    console.log('clicked star one')
    if (notSelected) {
        notSelected = false;
        rating.setAttribute("value", "3");
        ratingDisplayed.innerText = "Exceptional!";
        starOne.setAttribute("src", "/static/img/star.svg");
        starTwo.setAttribute("src", "/static/img/star.svg");
        starThree.setAttribute("src", "/static/img/star.svg");
    }
    else {
        notSelected = true;
        rating.setAttribute("value", "");
        ratingDisplayed.innerText = "";
        starOne.setAttribute("src", "/static/img/star-empty.svg");
        starTwo.setAttribute("src", "/static/img/star-empty.svg");
        starThree.setAttribute("src", "/static/img/star-empty.svg");
    }
});