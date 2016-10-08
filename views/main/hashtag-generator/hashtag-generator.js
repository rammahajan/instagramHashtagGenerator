function captionkeywordsgenerator(caption=null) {
  var instagramCaption = caption;
  var result=caption;
  var splitStringData = instagramCaption.split('.');
  if(splitStringData[0] && splitStringData[1]){
    var keywords = splitStringData[1].trim().split(' ');
    splitStringData[0] = splitStringData[0] + '. ';
    for (var count = 0; count < keywords.length; count++) {
      splitStringData[0] += '#' + keywords[count] + ' ';
    }
    result= splitStringData[0];
  }
  document.getElementById('generatedCaption').hidden=false;
  document.getElementById('generatedCaption').textContent=result;
  //return splitStringData[0];
}

$("#body").on('keydown', '#generatedCaption', function(e) { 
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