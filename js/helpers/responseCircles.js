// function to make the 4 response placeholder circles

function makerespCircles(canvas, pos1, color1, pos2, color2)
{
	var c = new Canvas(canvas, "_", win_y, win_x, 0, 0);

	var circleColor = ["white", "white", "white", "white"];

	try
	{
		circleColor[pos1-1] = color1;
		circleColor[pos2-1] = color2;
	}
	catch{}

	c.context.beginPath();
	c.context.arc(win_x/2-(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2-(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 4;
	c.context.strokeStyle = circleColor[0];
	c.context.stroke();

	c.context.beginPath();
	c.context.arc(win_x/2+(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2-(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 4;
	c.context.strokeStyle = circleColor[1];
	c.context.stroke();

	c.context.beginPath();
	c.context.arc(win_x/2-(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2+(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 4;
	c.context.strokeStyle = circleColor[2];
	c.context.stroke();

	c.context.beginPath();
	c.context.arc(win_x/2+(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2+(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 4;
	c.context.strokeStyle = circleColor[3];
	c.context.stroke();
}
