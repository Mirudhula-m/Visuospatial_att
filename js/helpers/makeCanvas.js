// initialising new canvas

function Canvas(id, back_id, height, width, positionX, positionY) 
{
	this.canvas = document.getElementById(id);
	this.context = this.canvas.getContext("2d"); // main on-screen context

	try{
		this.backCanvas = document.getElementById(back_id);
	    this.backCtx = this.backCanvas.getContext("2d");
	    this.backCanvas.height = height;
		this.backCanvas.width = width;
		this.backCanvas.style.top = positionY;
		this.backCanvas.style.left = positionX;
		this.backCanvas.style.position = "absolute";
	}
	catch{}
	
//	this.height = screen.height; // height of screen
//	this.width = screen.width; // width of screen
	this.canvas.height = height;
	this.canvas.width = width;
	this.canvas.style.top = positionY;
	this.canvas.style.left = positionX;
	this.canvas.style.position = "absolute";
}
