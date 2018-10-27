//FUNCTION grabURL from input form
//  button listens for even click
//  when that event is heard, a callback function executes that
//  sets the meme div in the document equal to the user passed in image url link
//  (as an img with source attribute set equal to value of passed in url)

//  represent number of images you have by pushing into an array,
//  the length of the array determines which of the three panels the image will push in

var imgArr = [];
//  When event happens - button is clicked, the image source for the selected div is updated
document.getElementById('button').addEventListener('click', function() {
  //save the inputted value of imageurl into a var
  var imageurl = document.getElementById('imageurl').value;
  // if there are already 3 memes (in the array) filling divs, warn user
  if (imgArr.length === 3) {
    alert("Woops that's too many! Please delete one and try again.");
  } else {
    // otherwise, the imageurl is added to the image array (therefore given an index)
    imgArr.push(imageurl);
    //  and showPics function can execute
    showPics();
    createMeme(imgArr.length - 1);
  }
});

//  FUNCTION putMemeInDiv / showPics
//  takes in a created meme from createMeme
//  puts meme in correct div on page

//  what I want it to do is make the colum in the row of that div be populated with the url linked image when button is clicked

//  then, it can create a new row? and that row will be the one to populate
//  not sure if I should set up a preexisting rows and columns to populate, and the inserstion number increments each time the button is clicked

//  or if js should genereate a new spot each time to place the image url in the div

//  how do I make images same size?

//  each image also given inputted text superimposed on top and bottom of the image

function showPics() {
  //  selects the panel background of div id and assigns it to the url of the image
  //  at the corresponding index in the imgArr
  document.getElementById('right').style.backgroundImage =
    'url(' + imgArr[2] + ')';
  document.getElementById('middle').style.backgroundImage =
    'url(' + imgArr[1] + ')';
  document.getElementById('left').style.backgroundImage =
    'url(' + imgArr[0] + ')';
}

//FUNCTION createMeme

function createMeme(index) {
  //  get size of canvas div we have to work with
  //  grabs value of id topline and saves to variable
  var topText = document.getElementById('topline').value;
  var topDiv = document.querySelectorAll('.top-text-block');
  // need to access top div at index
  topDiv[index].innerText = topText;
  //  grabs value of id bottomline and saves to variable
  var bottomText = document.getElementById('bottomline').value;
  var bottomDiv = document.querySelectorAll('.bottom-text-block');
  bottomDiv[index].innerText = bottomText;

  //  changes font style to impact
  //  size it for panel div
  //  place top text in top fourth of panel div
  //  place bottom text in bottom fourth of panel div
}

//  FUNCTION deleteMeme
//  takes in an event listener - click on meme
// add css transition to go opaque with x when mouse hovers over
//  when it hears event (click), that meme/meme div is deleted
//  other divs readjust in the imgArr to take its place

//  loop through panels left right and middle- all things that have the class
//  panel, and add an event listener to each

//  **these lines below 86 were at first loading all three and then getting rid of the left div
//  all together, leaving only the middle and right divs- need to just empty div backround
//  and text without getting rid of the whole placehold panel div

//  var leftPanel = document.getElementById('left');
//  leftPanel.addEventListener('click', deleteMeme);

//  function deleteMeme() {
//  leftPanel.outerHTML = '';
//  }

document.getElementById('left').addEventListener('click', deleteMeme);

function deleteMeme() {
  document.getElementById('left').style.backgroundImage = null;
  document.getElementByClass('top-text-block').remove();
}

//  document.getElementById('.panel').addEventListener('click', function(){
//  var item = document.getElementById()
//  })

//  TO DO -- need to figure out how to remove text as well
//  move over images to fill empty space- swap places in the array

function shiftMeme() {
  //  move over the indexes of the images when one is deleted, will shift one to the left if
  //  not already in the first [0] index
}
