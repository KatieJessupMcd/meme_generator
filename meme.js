//FUNCTION grabURL from input form
//button listens for even click
//when that event is heard, a callback function executes that
//sets the meme div in the document equal to the user passed in image url link
//(as an img with source attribute set equal to value of passed in url)

//represent number of images you have by pushing into an array,
//the length of the array determines which of the three panels the image will push in
var imgArr = [];
//When event happens - button is clicked, the image source for the selected div is updated
document.getElementById('button').addEventListener('click', function() {
  var imageurl = document.getElementById('imageurl').value;
  if (imgArr.length === 3) {
    alert("Woops that's too many! Please delete one and try again.");
  } else {
    imgArr.push(imageurl);
    showPics();
  }
});

//FUNCTION putMemeInDiv / showPics
//takes in a created meme from createMeme
//puts meme in correct div on page

//what I want it to do is make the colum in the row of that div be populated with the url linked image when button is clicked

//then, it can create a new row? and that row will be the one to populate
//not sure if I should set up a preexisting rows and columns to populate, and the inserstion number increments each time the button is clicked

//or if js should genereate a new spot each time to place the image url in the div

//how do I make images same size?

//each image also given inputted text superimposed on top and bottom of the image

function showPics() {
  document.getElementById('right').style.backgroundImage =
    'url(' + imgArr[2] + ')';
  document.getElementById('middle').style.backgroundImage =
    'url(' + imgArr[1] + ')';
  document.getElementById('left').style.backgroundImage =
    'url(' + imgArr[0] + ')';
}

//FUNCTION createMeme
//takes in an input url
//takes in a top text string- get element by id top input
//takes in a bottom text string- get element by id bottom input

function createMeme() {}

//top text is put into the top of the image in correct font
//bottom text is put into the bottom of the image in correct font

//FUNCTION deleteMeme
//takes in an event listener - click on meme

//when it hears event, that meme/meme div is deleted
//other divs readjust in the imgArr to take its place
