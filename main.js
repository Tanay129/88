var canvas=new fabric.Canvas(myCanvas);
var ballX=10;
var ballY=10;
var ballWidth=30;
var ballHeight=30;
var ballObject="";

function ball(){
    fabric.Image.fromURL("ball.png", function(Img){
        ballObject=Img;
        ballObject.scaleToWidth(150);
        ballObject.scaleToHeight(140);
        ballObject.set({
            top:ballY
            left:ballX
        });
        canvas.add(ballObject);
    });


}
// Create canvas variable

//Set initial positions for ball and hole images.



	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	ball_image_width = 5;
ball_image_height = 5;

function load_img(){

	fabric.Image.fromURL(getImg, function(Img){
        ballObject=Img;
        ballObject.scaleToWidth(blockWidth);
        ballObject.scaleToHeight(blockHeight);
         fabric.Image.fromURL(getImg, function(Img){
			ballObject=Img;
        ballObject.scaleToWidth(blockWidth);
        ballObject.scaleToHeight(blockHeight);
        ballObject.set({
            top:ballY,
            left:ballX
        });
        canvas.add(ballObject);
    });


ballObject.set({
            top:ballY,
            left:ballX
        });
        canvas.add(ballObject);
    };


}
	// write code to Upload ball image on canvas


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY>=0){
			ballY=ballY-ballHeight;
			canvas.remove(ballObject);
	
			ball();
	
			console.log("X axis:"+ballX+"Y axis:"+ballY);
		}
	}
		// Write a code to move ball upward.
	}

	function down()
	{
		function up()
		{
			if(ballY<=500){
				ballY=ballY+ballHeight;
				canvas.remove(ballObject);
		
				ball();
		
				console.log("X axis:"+ballX+"Y axis:"+ballY);
			}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ballY<=0){
			ballY=ballY-ballHeight;
			canvas.remove(ballObject);
	
			ball();
	
			console.log("X axis:"+ballX+"Y axis:"+ballY);
		}
	
}



		
				// Write a code to move ball left side.
		
	}

	function right()
	{
			if(ballX<=900){
				ballX=playerX+blockWidth;
		
			canvas.remove(ballObject);
			player();
		
			console.log("X axis:"+ballX+"Y axis:"+ballY);
			}
		}
			// Write a code to move ball right side.
		
	}
	
}

