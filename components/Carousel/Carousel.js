/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const leftImg = document.createElement("img");
  const rightImg = document.createElement("img");
  const mountainsImg = document.createElement("img");
  const computerImg = document.createElement("img");
  const treesImg = document.createElement("img");
  const turntableImg = document.createElement("img");
  const rightButton = document.createElement("div");

  carousel.append(leftButton, leftImg, rightImg, rightButton);

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.textContent = "<";
  /* mountainsImg.src = "../../assets/carousel/mountains.jpeg";
  computerImg.src = "../../assets/carousel/computer.jpeg";
  treesImg.src = "../../assets/carousel/trees.jpeg";
  turntableImg.src = "../../assets/carousel/turntable.jpeg"; */
  rightButton.textContent = ">";

  //const images = Array.prototype.slice.call(carousel.querySelectorAll(".carousel img"));
  const images = ["mountains.jpeg", "computer.jpeg", "trees.jpg", "turntable.jpg"];
  let leftIndex = 0;
  let rightIndex = 1;
  
  rightButton.addEventListener("click", (event) => {
    
  });

  leftButton.addEventListener("click", (event) => {
    
  });

  leftImg.src = `../../assets/carousel/${images[leftIndex]}`;
  rightImg.src = `../../assets/carousel/${images[rightIndex]}`;

  

 


  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(createCarousel());