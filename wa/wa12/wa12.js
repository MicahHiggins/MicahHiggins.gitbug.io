const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAuthor);
const contentTxt = document.querySelector('#js-quote-text');
const loaderContainer = document.querySelector('.loader-container');
let authorTxt = document.querySelector('#js-answer-text');
let author = "";


const displayLoading = () => {
    loaderContainer.style.display = 'block';
};

const hideLoading = () => {
    loaderContainer.style.display = 'none';
};

const endpoint = 'https://api.quotable.io/random'
async function getQuote() {
   // console.log("yo");

    try {
        contentTxt.textContent = '';
        displayLoading();
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        author = json['author'];
        authorTxt.textContent = '';
        window.setTimeout(function () {
            hideLoading();
            displayQuote(json['content']);
             //empties the author text when a new quote is wanted
        }, 500);
        
        
        
    }
    catch(err) {
        console.log(err)
        alert('Failed to fetch new quote')
    }
}

function displayQuote(content) {
    contentTxt.textContent = "\""+ content+"\"";
}

function displayAuthor() {
    authorTxt.textContent = "- "+author;
}

getQuote();