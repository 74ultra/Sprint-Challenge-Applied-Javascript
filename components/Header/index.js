// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headContainer = document.querySelector('.header-container');

headContainer.appendChild(Header());

function Header() {

    // Create DOM elements

    const header = document.createElement('div');
    const date = document.createElement('span');
    const headline = document.createElement('h1');
    const temp = document.createElement('span');


    // Set classes

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');


    // Set text / content

    date.textContent = 'SMARCH 28, 2019';
    headline.textContent = 'Lambda Times';
    temp.textContent = '98°'


    // Set structure

    header.appendChild(date);
    header.appendChild(headline);
    header.appendChild(temp);


    return header
}
