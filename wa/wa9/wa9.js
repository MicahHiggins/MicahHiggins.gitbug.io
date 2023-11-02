

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit on planet Zyborg, and :insertx: was eating a meal. As he ate the :inserty:, he realized the meal was poisoned, and instantly :insertz:. Bob saw the whole thing, and was laughing since he was immune to the poison and could eat as much as he wanted — :insertx: weighs 300 pounds by the way, maybe you wanted to know that, I don't know.";

var insertX = ["Mr. Mustard","Glorf","timmy the terrible"];
var insertY = ["pancaked frogs", "rocky grittles", "ketamine"];
var insertZ = ["turned into a ghost", "burst into flames", "understood that he now had dysentary"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.071);
    weight +=" stone"
    var temperature =  Math.round((94 -32)*(5/9));
    temperature += " centigrade"
    console.log(temperature);
    console.log(weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }
  console.log(newStory);
  story.textContent = newStory;
  story.style.visibility = 'visible';
}