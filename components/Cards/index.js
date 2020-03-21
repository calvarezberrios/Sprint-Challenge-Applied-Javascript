// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(data, topic) {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorName = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    card.setAttribute("data-topic", topic)
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    card.append(headline, author);
    author.append(imgContainer, authorName);
    imgContainer.appendChild(img);

    return card;
}

const cardsContainer = document.querySelector(".cards-container");
//cardsContainer.appendChild(cardCreator({headline: "test", authorPhoto: "#", authorName: "Tester"}, "test"));

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data.articles);
        const categories = Object.getOwnPropertyNames(response.data.articles);

        categories.forEach(category => {
            console.log(response.data.articles[category]);
            const articles = response.data.articles[category];

            articles.forEach(article => cardsContainer.appendChild(cardCreator(article, category)));
        });
    })
    .catch(err => {
        console.log(err);
    })