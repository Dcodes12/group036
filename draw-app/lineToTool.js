function LineToTool(){
	//This is the Name and Icon of the Line tool 
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
	
    //Initialises the position of the point of the line tool before the mouse is pressed 
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
	
    //This is the the function for drawing the line 
	this.draw = function(){
        //
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
				//loadPixels Loads the pixels data for the line tool, so the line appears 
			}

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
				//Updates the backing canvas for the line tool with the contents of the [loadPixels] array.
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		
		}
	};


}
