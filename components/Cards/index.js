// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const attachCards = document.querySelector('div.cards-container')
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    // .then(result => {
    //     console.log(result.data)
    // })

function cardMaker(attrs){
    const {authorName, authorPhoto, headline} = attrs

    //create Elements
    const card = document.createElement('div')
    const articleTitle = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('span')

    //structure
    card.appendChild(articleTitle)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imageDiv)
    authorDiv.appendChild(name)
    imageDiv.appendChild(image)

    //add classes
    card.classList.add('card')
    articleTitle.classList.add('headline')
    authorDiv.classList.add('author')
    imageDiv.classList.add('img-container')
    
    //add content
    articleTitle.textContent = headline
    image.src = authorPhoto
    name.textContent = authorName

   return card 
}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(result => {
        result.data.articles.bootstrap.forEach(item => {
            const newCard = cardMaker(item)
            attachCards.appendChild(newCard)
        });

        result.data.articles.javascript.forEach(item => {
            const newCard = cardMaker(item)
            attachCards.appendChild(newCard)
        });

        result.data.articles.jquery.forEach(item => {
            const newCard = cardMaker(item)
            attachCards.appendChild(newCard)
        });

        result.data.articles.node.forEach(item => {
            const newCard = cardMaker(item)
            attachCards.appendChild(newCard)
        });

        result.data.articles.technology.forEach(item => {
            const newCard = cardMaker(item)
            attachCards.appendChild(newCard)
        });

        // result.data.articles.forEach(item => {
        //     topicArr = Array.from(item)
        //     //return topicArr
        //     topicArr.forEach(thing => {
        //         const newCard = cardMaker(thing)
        //         attachCards.appendChild(newCard)
        //     })
            
        // })
    })
    
    .catch(error => {
        console.log('fail')
    })