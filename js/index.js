//KEYCODE EVENT
$('html').keypress( function(e){
  
  if (e.keyCode === 32) {
    
    // Stuff During Event
   console.log(e.keyCode);




//STORE THE IMAGES
var img0 = 'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/one.jpg';

var img1 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/two.jpg';

var img2 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/three.jpg';

var img3 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/four.jpg';

var img4 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/five.jpg';

var img5 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/six.jpg';

var img6 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/seven.jpg';

var img7 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/eight.jpeg';

var img8 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/nine.jpg';

var img9 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/ten.jpg';

var img10 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/eleven.jpg';

var img11 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/twelve.jpg';

var img12 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/thirteen.jpg';

var img13 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/fourteen.jpg';

var img14 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/fifteen.jpg';

var img15 =
'http://www.iamalwayswithyou.com/wp-content/uploads/2016/02/good-morning-dog-meme.jpg';

var img16 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/seventeen.jpg';

var img17 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/eighteen.jpg';

var img18 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/nineteen.jpg';

var img19 =
'https://raw.githubusercontent.com/schneblymillie/makeytest/master/img/twenty.jpg';
    
    
    
    
    
    
 
//RANDOM NUMBER
var limit = 20;
var numRand = Math.floor( Math.random()*limit);
console.log( numRand );
    
//DELETE TITLE ELEMENTS
$("#takeaway").remove();

//ADD SRC ATTRIBUTE
$('img').attr( "src", eval('img' + numRand)); 
    
    
    
    
    
    //CLOSING DON'T FUCKING TOUCH
      }
  
  
  
  
  
  // Stuff After Event
  
  //REFRESH PAGE IF button si
  
  $( "#button" ).click(function() {
      document.location.reload(true);

  });
  
  if (button.clicked) {
      document.location.reload(true);
}
 
});