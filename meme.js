//FUNCTION grabURL from input form
//button listens for even click
//when that event is heard, a callback function executes that
//sets the meme div in the document equal to the user passed in image url link
//(as an img with source attribute set equal to value of passed in url)

//When event happens - button is clicked, the image source forh the selected div is updated
document.getElementById('button').addEventListener('click', function() {
  document.getElementById('memeDiv').innerHTML =
    '<img src=' + "'" + document.getElementById('imageurl').value + "'" + '/>';
});

//FUNCTION putMemeInDiv
//takes in a created meme from createMeme
//puts meme in correct div on page

//what I want it to do is make the colum in the row of that div be populated with the url linked image when button is clicked

//then, it can create a new row? and that row will be the one to populate
//not sure if I should set up a preexisting rows and columns to populate, and the inserstion number increments each time the button is clicked

//or if js should genereate a new spot each time to place the image url in the div

//how do I make images same size?

//each image also given inputted text superimposed on top and bottom of the image

//FUNCTION createMeme
//takes in an input url
//takes in a top text string
//takes in a bottom text string

//top text is put into the top of the image in correct font
//bottom text is put into the bottom of the image in correct font

//FUNCTION deleteMeme
//takes in an event listener - click on meme

//when it hears event, that meme/meme div is deleted
//other divs readjust to take its place
