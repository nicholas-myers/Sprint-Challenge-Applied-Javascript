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

const carouselContainer = document.querySelector(".carousel-container")

///create component
const createCarousel = () => {
  //instantiate
  const carousel = document.createElement("div")
  const leftButton = document.createElement("div")
  const image1 = document.createElement("img")
  const image2 = document.createElement("img")
  const image3 = document.createElement("img")
  const image4 = document.createElement("img")
  const rightButton = document.createElement("div")

  // structure
  carousel.appendChild(leftButton)
  carousel.appendChild(image1)
  carousel.appendChild(image2)
  carousel.appendChild(image3)
  carousel.appendChild(image4)
  carousel.appendChild(rightButton)
 
  // set Attributes
  carousel.classList.add("carousel")
  leftButton.classList.add("left-button")
  image1.src = "./assets/carousel/mountains.jpeg"
  image2.src = "./assets/carousel/computer.jpeg"
  image3.src = "./assets/carousel/trees.jpeg"
  image4.src = "./assets/carousel/turntable.jpeg"
  rightButton.classList.add("right-button")

  

  // create image array and start the count at 0
  const imageArray = [image1, image2, image3, image4]
  let count = 0


  // add an event listener that checks if the count is equal to the image number then display only that image
  leftButton.addEventListener("click", (event) => {
    count--
    if (count < 0) {
      count = 3
    }
    console.log(count)
   for ( let i = 0; i < imageArray.length; i ++) {

    if (imageArray[count] === imageArray[i]) {
      imageArray[i].classList.add("animateLeft")
      imageArray[i].style.display = "block"
    } else if (imageArray[count] !== imageArray[i]) {
      imageArray[i].style.display = "none"
      imageArray[i].classList.remove("animateLeft")
      imageArray[i].classList.remove("animateRight")
    }

  } //close for
})

  rightButton.addEventListener("click", (event) => {
    count++
    if (count > 3) {
      count = 0
    }
    console.log(count)
    for ( let i = 0; i < imageArray.length; i ++) {
      if (imageArray[count] === imageArray[i]) {
        imageArray[i].classList.add("animateRight")
        imageArray[i].style.display = "block"
      } else if (imageArray[count] !== imageArray[i]) {
        imageArray[i].style.display = "none"
        imageArray[i].classList.remove("animateRight")
        imageArray[i].classList.remove("animateLeft")
      }
  }
})
  return carousel
} //close createCarousel


// console.log(createCarousel())

carouselContainer.appendChild(createCarousel())


// .w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
// .w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}