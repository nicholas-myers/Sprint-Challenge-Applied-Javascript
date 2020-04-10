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

  

  // event listeners
  const imageArray = [image1, image2, image3, image4]
  let count = 0
  leftButton.addEventListener("click", (event) => {
    // console.log(imageArray[0])
    count++
   for ( let i = 0; i < imageArray.length; i ++) {
    if(count === 1) {
      imageArray[0].style.display ="block"
      imageArray[1].style.display ="none"
      imageArray[2].style.display = "none"
      imageArray[3].style.display = "none"
    } else if (count === 2) {
      imageArray[0].style.display ="none"
      imageArray[1].style.display ="block"
      imageArray[2].style.display = "none"
      imageArray[3].style.display = "none"
    } else if (count === 3) {
      imageArray[0].style.display ="none"
      imageArray[1].style.display ="none"
      imageArray[2].style.display = "block"
      imageArray[3].style.display = "none"
    } else if (count === 4) {
      imageArray[0].style.display ="none"
      imageArray[1].style.display ="none"
      imageArray[2].style.display = "none"
      imageArray[3].style.display = "block"
      count = 0
    }
   } //close for

  }) //close leftbutton listener

  rightButton.addEventListener("click", (event) => {
    count++
   for ( let i = 0; i < imageArray.length; i ++) {
    if(count === 1) {
      imageArray[0].style.display ="block"
      imageArray[1].style.display ="none"
      imageArray[2].style.display = "none"
      imageArray[3].style.display = "none"
    } else if (count === 2) {
      imageArray[0].style.display ="none"
      imageArray[1].style.display ="block"
      imageArray[2].style.display = "none"
      imageArray[3].style.display = "none"
    } else if (count === 3) {
      imageArray[0].style.display ="none"
      imageArray[1].style.display ="none"
      imageArray[2].style.display = "block"
      imageArray[3].style.display = "none"
    } else if (count === 4) {
      imageArray[0].style.display ="none"
      imageArray[1].style.display ="none"
      imageArray[2].style.display = "none"
      imageArray[3].style.display = "block"
      count = 0
    }
   } //close for
  })

  return carousel
} //close createCarousel


// console.log(createCarousel())

carouselContainer.appendChild(createCarousel())