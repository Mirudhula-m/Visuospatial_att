//--------------------------------------
//**************************************
// MESSAGE TO THE SUBJECT
//**************************************
//--------------------------------------

var recalibrationMSG = 
{
	type: "html-keyboard-response",
	stimulus: function()
	{
		return  "<p style = 'font-size:27px; color:black'>Re-calibration required. The following screen will show a series of buttons in succession. Set your gaze on the mouse pointer while clicking the button. Press any key to continue.</p>";
	}
}

//--------------------------------------
//**************************************
// RE-CALIBRATION
//**************************************
//--------------------------------------

var recalib5pt_TL = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
	button_html: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;
		GazeCloudAPI.UseClickRecalibration = true; 
		document.body.style.cursor = 'pointer';

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)-200)+'px; top: '+((win_y/2)-200)+'px">';
	},
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		GazeCloudAPI.UseClickRecalibration = false; 
		document.body.style.cursor = 'none';
	}
}

var recalib5pt_TR = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
	button_html: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;
		GazeCloudAPI.UseClickRecalibration = true; 
		document.body.style.cursor = 'pointer';

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)+200)+'px; top: '+((win_y/2)-200)+'px">';
	},
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		GazeCloudAPI.UseClickRecalibration = false; 
		document.body.style.cursor = 'none';
	}
}

var recalib5pt_BR = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
	button_html: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;
		GazeCloudAPI.UseClickRecalibration = true; 
		document.body.style.cursor = 'pointer';

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)+200)+'px; top: '+((win_y/2)+200)+'px">';
	},
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		GazeCloudAPI.UseClickRecalibration = false; 
		document.body.style.cursor = 'none';
	}
}

var recalib5pt_BL = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
	button_html: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;
		GazeCloudAPI.UseClickRecalibration = true; 
		document.body.style.cursor = 'pointer';

		return '<input type="button" value="  " style="position: absolute; left: '+((win_x/2)-200)+'px; top: '+((win_y/2)+200)+'px">';
	},
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		GazeCloudAPI.UseClickRecalibration = false; 
		document.body.style.cursor = 'none';
	}
}	

var recalib5pt_C = 
{
	type: "html-button-response",
	choices: [''],
	stimulus: function()
	{
		return "<div class = 'buttonDiv' style = 'height: "+win_y+"px; width: "+win_x+"px'><h2 style = 'color:black'>  </h2></div>";
	},
	button_html: function()
	{
		GazeCloudAPI.OnResult = PlotGaze_withFB;
		gazeMetric_initialIter = eyeIter;
		GazeCloudAPI.UseClickRecalibration = true; 
		document.body.style.cursor = 'pointer';

		return '<input type="button" value="  " style="position: absolute; left: '+(win_x/2)+'px; top: '+(win_y/2)+'px">';
	},
	on_finish: function(data)
	{
		gazeMetric_finalIter = eyeIter;

		GazeCloudAPI.UseClickRecalibration = false; 
		document.body.style.cursor = 'none';
	}
}		

var recalib5pt = 
{
	timeline: [recalib5pt_TL, recalib5pt_TR, recalib5pt_BR, recalib5pt_BL, recalib5pt_C],
	repetitions: 5
}

var cond_recalib5pt = 
{
	timeline: [recalibrationMSG, recalib5pt],
	conditional_function: function()
	{
		if(do_recalib == 0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

