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


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(result => {
        // console.log(result.data.articles)
        //access all articles
        const articles = result.data.articles
        // access each topics array of articles
        const jsArticles = articles.javascript
        const bootstrapArticles = articles.bootstrap
        const techArticles = articles.technology
        const jqueryArticles = articles.jquery
        const nodeArticles = articles.node

        //iterate through each array and pass through our article
        jsArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        bootstrapArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        techArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        jqueryArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        nodeArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        
    })
    .catch(error => {
        // console.log(error)
    })

const createCard = (article) => {
    ///instantiate
    const card = document.createElement("div")
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imageContainer = document.createElement("div")
    const authorImage = document.createElement("img")
    const authorName = document.createElement("span")

    // sturcutre elements
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(authorImage)
    author.appendChild(authorName)


    //set attributes
    card.classList.add("card")
    headline.classList.add("headline")
    author.classList.add("author")
    imageContainer.classList.add("img-container")
    authorImage.src = article.authorPhoto

    // set content
    headline.textContent = author.headline
    authorName.textContent= `By ${author.authorName}`

    return card
}


// console.log(createCard())

const cardsContainer = document.querySelector(".cards-container")

