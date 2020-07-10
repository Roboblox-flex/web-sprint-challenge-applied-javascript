// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
  console.log(response.data.articles);

  const values = Object.values(response.data.articles)
  console.log(values)

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
        console.log(values[i][j].authorName)
      const card = cardMaker(values[i][j]);
      cardsContainer.appendChild(card);
    }
  }
})
.catch((error) => {
  console.log(
    "something went wrong, hopefully the error tells us what",
    error
  );
});
// Write a function that takes a single article object and returns the following markup:
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
const cardsContainer = document.querySelector('.cards-container')
function cardMaker(data){
     const card = document.createElement('div')
     const headline = document.createElement('div')
     const title = document.createElement('div')
     const imageContainer = document.createElement('div')
     const image = document.createElement('img')
     const name = document.createElement('span')

     card.classList.add('card')
     headline.classList.add('headline')
     title.classList.add('author')
     imageContainer.classList.add('img-container')

     headline.textContent = data.headline
     image.src = data.authorPhoto;
     name.textContent = `By ${data.authorName}`;

     card.appendChild(headline)
     card.appendChild(title)
     title.appendChild(imageContainer)
     title.appendChild(name)
     imageContainer.appendChild(image)

     card.addEventListener("click", (e) => {
        console.log(data.headline);
        
        });


     return card
}


// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
