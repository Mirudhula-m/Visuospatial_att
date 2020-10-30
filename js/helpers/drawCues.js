//--------------------------------------
// DRAW CUES
//--------------------------------------

function drawCues(cue_pos, cue_color, canvas)
{
	var cue_len = 18;
	var d1 = 12; // start point distance away from center
	var d2 = 24; // end point distance away from the center

/* SVG method
	switch(cue_pos)
	{
		case 1:
			s.line(win_x/2-d1, win_y/2-d1, win_x/2-d2, win_y/2-d2).attr({stroke:cue_color, strokeWidth: 4.5});
			break;
		case 2:
			s.line(win_x/2+d1, win_y/2-d1, win_x/2+d2, win_y/2-d2).attr({stroke:cue_color, strokeWidth: 4.5});
			break;
		case 3:
			s.line(win_x/2-d1, win_y/2+d1, win_x/2-d2, win_y/2+d2).attr({stroke:cue_color, strokeWidth: 4.5});
			break;
		case 4:
			s.line(win_x/2+d1, win_y/2+d1, win_x/2+d2, win_y/2+d2).attr({stroke:cue_color, strokeWidth: 4.5});
			break;
	}
*/

	var c = new Canvas(canvas, "_", win_y, win_x, 0, 0);

	switch(cue_pos)
	{
		case 1:
			c.context.moveTo(win_x/2 - d1, win_y/2 - d1);
			c.context.lineTo(win_x/2 - d2, win_y/2 - d2);
			c.context.lineWidth = 4.5;
			c.context.strokeStyle = cue_color;
			c.context.stroke();
			break;
		case 2:
			c.context.moveTo(win_x/2 + d1, win_y/2 - d1);
			c.context.lineTo(win_x/2 + d2, win_y/2 - d2);
			c.context.lineWidth = 4.5;
			c.context.strokeStyle = cue_color;
			c.context.stroke();
			break;
		case 3:
			c.context.moveTo(win_x/2 - d1, win_y/2 + d1);
			c.context.lineTo(win_x/2 - d2, win_y/2 + d2);
			c.context.lineWidth = 4.5;
			c.context.strokeStyle = cue_color;
			c.context.stroke();
			break;
		case 4:
			c.context.moveTo(win_x/2 + d1, win_y/2 + d1);
			c.context.lineTo(win_x/2 + d2, win_y/2 + d2);
			c.context.lineWidth = 4.5;
			c.context.strokeStyle = cue_color;
			c.context.stroke();
			break;
	}	
}