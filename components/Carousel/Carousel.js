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


const carouselContainer = document.querySelector('.carousel-container');




// Create DOM elements

const carousel = document.createElement('div');
const leftBtn = document.createElement('div');
const imgOne = document.createElement('img');
const imgTwo = document.createElement('img');
const imgThree = document.createElement('img');
const imgFour = document.createElement('img');
const rightBtn = document.createElement('div');

  
// Set classes

carousel.classList.add('carousel');
leftBtn.classList.add('left-button');
rightBtn.classList.add('right-button');


// Set text / content

leftBtn.textContent = ' < ';
rightBtn.textContent = ' > ';
imgOne.setAttribute('src', './assets/carousel/mountains.jpeg');
imgTwo.setAttribute('src', './assets/carousel/computer.jpeg');
imgThree.setAttribute('src', './assets/carousel/trees.jpeg');
imgFour.setAttribute('src', './assets/carousel/turntable.jpeg');


// Set structure

carousel.appendChild(leftBtn);
carousel.appendChild(rightBtn);
carousel.appendChild(imgOne);
carousel.appendChild(imgTwo);
carousel.appendChild(imgThree);
carousel.appendChild(imgFour);

carouselContainer.appendChild(carousel);

// Image array

let imgArray = [imgOne, imgTwo, imgThree, imgFour];

imgArray[0].style.display = 'block';

//let displayImg = 0;

// Event listeners

leftBtn.addEventListener('click', () => {
  imgArray.forEach(item => {
    item.style.display = 'none';
  })
  let tempImg = imgArray.shift();
  imgArray.push(tempImg);
  console.log(imgArray);
  imgArray[0].style.display = 'block';

})

rightBtn.addEventListener('click', () => {
  imgArray.forEach(item => {
    item.style.display = 'none';
  })
  let tempImg = imgArray.pop();
  imgArray.unshift(tempImg);
  imgArray[0].style.display = 'block';
})



