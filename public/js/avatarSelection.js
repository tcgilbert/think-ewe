function selected(avatar) {
  avatarArray.forEach((a) => {
    if (a !== avatar) {
      a.classList.remove("avatar-selected");
    } else {
      avatar.classList.add("avatar-selected");
    }
  });
}

const male1 = document.getElementById("male1");
const male2 = document.getElementById("male2");
const male3 = document.getElementById("male3");
const male4 = document.getElementById("male4");
const male5 = document.getElementById("male5");
const female1 = document.getElementById("female1");
const female2 = document.getElementById("female2");
const female3 = document.getElementById("female3");
const female4 = document.getElementById("female4");
const female5 = document.getElementById("female5");
const avatarValue = document.getElementById("avatar");
const avatarArray = [
  male1,
  male2,
  male3,
  male4,
  male5,
  female1,
  female2,
  female3,
  female4,
  female5,
];

male1.addEventListener("click", () => {
  avatarValue.value = "male1";
  selected(male1);
  console.log(avatarValue);
});
male2.addEventListener("click", () => {
  avatarValue.value = "male2";
  selected(male2);
  console.log(avatarValue);
});
male3.addEventListener("click", () => {
  avatarValue.value = "male3";
  selected(male3);
  console.log(avatarValue);
});
male4.addEventListener("click", () => {
  avatarValue.value = "male4";
  selected(male4);
  console.log(avatarValue);
});
male5.addEventListener("click", () => {
  avatarValue.value = "male5";
  selected(male5);
  console.log(avatarValue);
});
female1.addEventListener("click", () => {
  avatarValue.value = "female1";
  selected(female1);
  console.log(avatarValue);
});
female2.addEventListener("click", () => {
  avatarValue.value = "female2";
  selected(female2);
  console.log(avatarValue);
});
female3.addEventListener("click", () => {
  avatarValue.value = "female3";
  selected(female3);
  console.log(avatarValue);
});
female4.addEventListener("click", () => {
  avatarValue.value = "female4";
  selected(female4);
  console.log(avatarValue);
});
female5.addEventListener("click", () => {
  avatarValue.value = "female5";
  selected(female5);
  console.log(avatarValue);
});
