var canvas = new fabric.canvas('myCanvas');


block_image_width = 5;
block_image_height = 5;

ball_x = 0;
ball_y = 0;

block_x = 400;
block_y = 800;

ball_height = 5;
ball_width = 5;

function load_image(){
fabric.image.fromUrl("golf-h.png",function (Img) {
hole_object = Img;
hole_object.scaleToWidth(50);
 hole_object.scaleToHeight(50);
 hole_object.set({ 
	  top:hole_y, 
	  left:hole_x });
   canvas.add(hole_object); });
   new_image();
}

function new_image(){
	fabric.image.fromUrl("ball.png",function (Img) {
	ball_object = Img;
	ball_object.scaleToWidth(50);
	 ball_object.scaleToHeight(50);
	 ball_object.set({ 
		  top:ball_y, 
		  left:ball_x });
	   canvas.add(ball_object); });

	}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
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
		if(block_y >5){
			block_x = block_y -5;
			console.log("When up arrow is pressed,  x = " + block_x + " | y = " +block_y);
			uploadBackground();
			new_image();
		}
	}

	function down()
	{
        if(block_y <=1050){
		    block_x = block_y +5;
			console.log("When up arrow is pressed,  x = " + block_x + " | y = " +block_y);
			uploadBackground();
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			block_x = block_y -5;
			console.log("When up arrow is pressed,  x = " + block_x + " | y = " +block_y);
			uploadBackground();
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			block_x = block_y +5;
			console.log("When up arrow is pressed,  x = " + block_x + " | y = " +block_y);
			uploadBackground();
			new_image();
		}
	}
	
}

