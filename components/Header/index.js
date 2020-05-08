// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
//var data = ['SMARCH 28, 2019', 'Lambda Times', '98°']
const attachHeader = document.querySelector('div.header-container')

function Header(attr) {
    const {day, label, temperature} = attr

    //create elements
    const header = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    //setup structure
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    //assign class names
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    //add textContent
    date.textContent = day
    title.textContent = label
    temp.textContent = temperature


    return header
}


const theHead = Header({day:'SMARCH 28, 2019', label:'Lambda Times', temperature:'98°'})

attachHeader.appendChild(theHead)