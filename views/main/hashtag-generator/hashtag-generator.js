function captionkeywordsgenerator(caption=null) {
  var instagramCaption = caption;
  var splitStringData = instagramCaption.split('.');
  var keywords = splitStringData[1].trim().split(' ');
  splitStringData[0] = splitStringData[0] + '. ';
  for (var count = 0; count < keywords.length; count++) {
    splitStringData[0] += '#' + keywords[count] + ' ';
  }
  document.getElementById('generatedCaption').textContent=splitStringData[0];
  //return splitStringData[0];
}

$("#body").on('keydown', '#caption', function(e) { 
  var keyCode = e.keyCode || e.which; 

  if (keyCode == 9) { 
    e.preventDefault(); 
    // call custom function here
  } 
});

function addhash(caption){
  
}

function hello(){
  alert('hello');
}