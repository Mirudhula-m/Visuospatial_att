//--------------------------------------
//**************************************
// Designing of task
//**************************************
//--------------------------------------

//--------------------------------------
// FIXATION CROSS - SVG method
//--------------------------------------

function fixationCross_svg()
{
	var cross_len = 18;
	
	var fix_cross = s.line(win_x/2, win_y/2 - cross_len/2, win_x/2, win_y/2 + cross_len/2).attr({stroke:"white", strokeWidth: 4});
	var fix_cross = s.line(win_x/2 - cross_len/2, win_y/2, win_x/2 + cross_len/2, win_y/2).attr({stroke:"white", strokeWidth: 4});

}

//--------------------------------------
// FIXATION CROSS - on HTML5 Canvas
//--------------------------------------

function fixationCross_canvas(canvas)
{
	var cross_len = 18;

	var c = new Canvas(canvas);

	c.context.moveTo(win_x/2, win_y/2 - cross_len/2);
	c.context.lineTo(win_x/2, win_y/2 + cross_len/2);
	c.context.lineWidth = 4;
	c.context.strokeStyle = 'white';
	c.context.stroke();

	c.context.moveTo(win_x/2 - cross_len/2, win_y/2);
	c.context.lineTo(win_x/2 + cross_len/2, win_y/2);
	c.context.lineWidth = 4;
	c.context.strokeStyle = 'white';
	c.context.stroke();
}
