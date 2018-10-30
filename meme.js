var imgArr = [];
var imageurl = document.getElementById('imageurl').value;

document.getElementById('button').addEventListener('click', function() {
  if (document.getElementById('imageurl').value === '') {
    alert('Please fill in a url!');
    return;
  }
  if (document.getElementById('topline').value === '') {
    alert('Please fill in top text!');
    return;
  }
  if (document.getElementById('bottomline').value === '') {
    alert('Please fill in bottom text!');
    return;
  }

  // otherwise, the imageurl is added to the image array (therefore given an index)
  imgArr.push(imageurl);
  createMeme(imgArr.length - 1);

  document.getElementById('imageurl').value = '';
  document.getElementById('topline').value = '';
  document.getElementById('bottomline').value = '';
});

function createMeme(index) {
  var panel = document.createElement('div');
  panel.className = 'panel';
  var image = document.createElement('img');
  var topLine = document.createElement('div');
  topLine.className = 'top-text-block';
  var bottomLine = document.createElement('div');
  bottomLine.className = 'bottom-text-block';

  image.src = document.getElementById('imageurl').value;

  topLine.innerHTML = document.getElementById('topline').value;

  bottomLine.innerHTML = document.getElementById('bottomline').value;

  panel.appendChild(image);
  panel.appendChild(topLine);
  panel.appendChild(bottomLine);
  document.getElementById('panel-container').appendChild(panel);
}

document
  .getElementById('panel-container')
  .addEventListener('click', deleteMeme);

function deleteMeme(e) {
  e.target.closest('.panel').remove();
}
