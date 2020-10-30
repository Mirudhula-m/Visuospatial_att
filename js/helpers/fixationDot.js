//--------------------------------------
//**************************************
// Designing of task
//**************************************
//--------------------------------------

//--------------------------------------
// FIXATION DOT
//--------------------------------------

function fixationDot(probe_pos)
{
	var cross_len = 8;
	var fix_dot = s.line(win_x/2, win_y/2 - cross_len, win_x/2, win_y/2 + cross_len).attr({stroke:"white", strokeWidth: 4});

	if(probe_pos!=NaN)
	{	
		switch(probe_pos)
		{
			case 0:
				probe_quad = s.path("M"+(win_x/2)+" "+(win_y/2)+" v-"+dot_radius+" a"+
							dot_radius+" "+dot_radius+" 0 0 0 -"+dot_radius+" "+dot_radius+" z")
								.attr({fill:"yellow"});
				break;

			case 1:
				probe_quad = s.path("M"+(win_x/2)+" "+(win_y/2)+" v-"+dot_radius+" a"+
							dot_radius+" "+dot_radius+" 0 0 1 "+dot_radius+" "+dot_radius+" z")
								.attr({fill:"yellow"});
				break;

			case 2:
				probe_quad = s.path("M"+(win_x/2)+" "+(win_y/2)+" v"+dot_radius+" a"+
							dot_radius+" "+dot_radius+" 0 0 1 -"+dot_radius+" -"+dot_radius+" z")
								.attr({fill:"yellow"});
				break;

			case 3:
				probe_quad = s.path("M"+(win_x/2)+" "+(win_y/2)+" v"+dot_radius+" a"+
							dot_radius+" "+dot_radius+" 0 0 0 "+dot_radius+" -"+dot_radius+" z")
								.attr({fill:"yellow"});
				break;
		}
	}
}