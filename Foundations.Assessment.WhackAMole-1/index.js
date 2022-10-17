//a function to create a random amount of time that the mole will peep
//a function to choose the random hole from which the mole will peep
//a function to make the mole pop from the random hole
//a function to start the game

const holes = document.querySelectorAll(".hole");
const length = holes.length;

//makes random number (for mole to pop up in)
let interval = setInterval(() => {
  const random = Math.floor(Math.random() * length);
  
//makes it so every dirt patch isn't "occupied"
   holes.forEach((e) => {
    e.classList.remove("active");
  });
  
//adding previous two statements together
  holes[random].classList.add("active");
}, 700);


const score = document.querySelector("#score > span");
let count = 0;

//this is if there is a mole it'll increase score
holes.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("active")) {
      count++
    }
  });
});

window.addEventListener("press", () => {
    document.querySelector("press").addEventListener("click", () => {
      playGame();
    });
  });
  
const playGame = () => {
const holes = document.querySelectorAll(".hole");
const length = grounds.length;
  
const score = document.querySelector("#score > p");
let count = 0;
  
//if that hole has a mole count increases by one
    holes.forEach((e) => {
      e.addEventListener("click", () => {
        if (e.classList.contains("active")) {
          count++;
          score.innerHTML = count;
        }
      });
    });

//makes a random number
    let interval = setInterval(() => {
      const random = Math.floor(Math.random() * length);
  
//makes it so that every dirt hole doesn't let you get a point if you press it, only those with moles
      holes.forEach((e) => {
        e.classList.remove("active");
      });
  
//adding the previous two statements together
      holes[random].classList.add("active");
    }, 100);
  };