const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['ALiEn.jpg', 'cyberpunk-city.jpg', 'gabe-770x470.jpg','joker.jpg','PSY-Gangnam-Style-Funko-Pop-Rocks-Vinyl-Figure.jpg'];
/* Declaring the alternative text for each image file */
var altDict = {
    'ALiEn.jpg':"Spooky grey alien",
    'cyberpunk-city.jpg':"vibrant neon city",
    'gabe-770x470.jpg':"Gabe Newell close up",
    'joker.jpg':"Famous painting of a jester looking sad",
    'PSY-Gangnam-Style-Funko-Pop-Rocks-Vinyl-Figure.jpg':"Psy action figure"
};
/* Looping through images */
for (img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}`);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
};
    /* newImage.addEventListener('click', SizingALT(newImage.alt))
    newImage.addEventListener('click', SizingSRC(newImage.src))
}
function SizingALT(ALT){
    ALT = displayedImage.alt;
};
function SizingSRC(SRC){
    SRC = displayedImage.src;
}; */


/* Wiring up the Darken/Lighten button */
// if button dark, change it to light, change class, reverse true too
btn.addEventListener('click', () => {
    const Cname = btn.getAttribute('class');
    if (Cname === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
