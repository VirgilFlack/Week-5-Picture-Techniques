let imageCongo;
let imageDenmark;
let input;
let botton;

function preload( ) {
imgCongo=loadImage('https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Republic_Congo.png');
imgDenmark=loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png')
}


function setup( ){
    createCanvas(500, 500);
    background(112,128,144);
    textSize(22);
    text('Type Denmark or Congo', 20, 40);
    
    input = createInput ( );
    input.position( 20, 60);
    input.input(showImage);
    
    botton = createButton('Submit');
    botton.position(220, 60);
    botton.mousePressed(showImage);
    
    console.log('I am in Setup');
}

function showImage( ){
    
    if( input.value() == "Congo")
   {
    image( imgCongo, 20, 200, 400, 210);
   }

     else if( input.value() == "Denmark")
   {
    image( imgDenmark, 20, 200, 400, 210);
    }
       
   }