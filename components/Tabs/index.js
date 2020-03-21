// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tabs(tabName) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = tabName;

    tab.addEventListener("click", (event) => {
        const tabs = document.querySelectorAll(".tab");

        if(event.target.textContent === "all") {
            tabs.forEach(tab => tab.classList.remove("active-tab"));
        } else {
            document.querySelector(".all").classList.remove("active-tab");
        }
    
        event.target.classList.toggle("active-tab");
        
    });

    return tab;
}

const topics = document.querySelector(".topics");
topics.appendChild(Tabs("all"));
topics.querySelector(".tab").classList.add("all", "active-tab");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response.data.topics);
        const topics = document.querySelector(".topics");
        response.data.topics.forEach(topic => topics.appendChild(Tabs(topic)));
    
    })
    .catch(err => {
        console.log(err);
    });
