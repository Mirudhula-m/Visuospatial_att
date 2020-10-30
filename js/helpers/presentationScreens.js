//--------------------------------------
//**************************************
// PRESENTATION SCREENS
//**************************************
//--------------------------------------

//--------------------------------------
// FIXATION DOT
//--------------------------------------

function fixationScreen(duration, curr_totalTrialNum)
{

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			inTrial_gazeMetric_initialIter = eyeIter;

			fixationCross_svg();
			stim_str = s.toString();
			s.clear();
			return stim_str;
			
		},
		on_load: function() 
		{
			console.log("---------------------------------------------------");
			console.log("START OF NEW TRIAL "+curr_totalTrialNum+" ---------");
			console.log("---------------------------------------------------");

			// start making grating for the next screen
			//setTimeout(function(){ makeStimGrating1('canvas1', 'backCanvas1', 90, 1)}, duration); 
  		},
  		on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s1 = "+lat);
  			trial_latency.s1 = lat - duration;

  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// STIMULUS 1 PRESENTATION
//--------------------------------------

function gratingSet1(duration)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			fixationCross_svg();
			stim_str = s.toString();
			s.clear();
			
			return '<div><canvas id = "canvas1"></canvas><canvas id = "backCanvas1"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s2 just finished loading.');

  		    // start making grating for the next screen
			//setTimeout(function(){ makeStimGrating1('canvas1', 'backCanvas1', 90, 1)}, duration); 
			makeStimGrating1('canvas1', 'backCanvas1', 90, 1); 
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s2 = "+lat);
  			trial_latency.s2 = lat - duration;

  		}
	}
	return psychBlock_NR;
}


//--------------------------------------
// INTRODUCING WHITE CUES
//--------------------------------------

function whiteCues(duration, cue_pos1, cue_pos2)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			fixationCross_svg();

			stim_str = s.toString();
			s.clear();
	
			return '<div><canvas id = "cue1"></canvas><canvas id = "cue2"></canvas><canvas id = "canvas1"></canvas><canvas id = "backCanvas1"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s3 just finished loading.');

			drawCues(cue_pos1, 'white', 'cue1');
			drawCues(cue_pos2, 'white', "cue2");

  		    // start making grating for the next screen
			//setTimeout(function(){ makeStimGrating1('canvas1', 'backCanvas1', 90, 1)}, duration); 
  			makeStimGrating1('canvas1', 'backCanvas1', 90, 1); 
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s3 = "+lat);
  			trial_latency.s2 = lat - duration;

  		}
	}
	return psychBlock_NR;
}


//--------------------------------------
// INTRODUCING COLOUR CUES
//--------------------------------------

function colorCues(duration, cue_pos1, cue_pos2, cueColor1, cueColor2)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			fixationCross_svg();
			stim_str = s.toString();
			s.clear();
	
			return '<div><canvas id = "cue1"></canvas><canvas id = "cue2"></canvas><canvas id = "canvas1"></canvas><canvas id = "backCanvas1"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s4 just finished loading.');

  		    drawCues(cue_pos1, cueColor1, 'cue1');
			drawCues(cue_pos2, cueColor2, 'cue2');

  		    // start making grating for the next screen
	//		setTimeout(function(){ makeStimGrating1('canvas1', 'backCanvas1', 90, 1)}, duration);

			makeStimGrating1('canvas1', 'backCanvas1', 90, 1); 
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s4 = "+lat);
  			trial_latency.s2 = lat - duration;

  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// INTRODUCING ALL SCREENS RELATED TO GRATING 1
//--------------------------------------

// This function is written in order to avoid the weird flashes that is occuring due to latency...
// ...when the screens are introduced as separate gratings.
// Here, the grating is first displayed and then the cues are timed using window.setTimeout
// But, this is not working as I expected it to..

function all_gratingSet1(duration, cue_pos1, cue_pos2, cueColor1, cueColor2)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: 3000,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			fixationCross_svg();
			stim_str = s.toString();
			s.clear();
	
			return '<div><canvas id = "cue1"></canvas><canvas id = "cue2"></canvas><canvas id = "canvas1"></canvas><canvas id = "backCanvas1"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('sall1 just finished loading.');

  		    window.setTimeout(function(){ drawCues(cue_pos1, "white", 'cue1')}, 1000); 
  		    window.setTimeout(function(){ drawCues(cue_pos2, "white", 'cue2')}, 1000);

  		    window.setTimeout(function(){ drawCues(cue_pos1, cueColor1, 'cue1')}, 2000); 
  		    window.setTimeout(function(){ drawCues(cue_pos2, cueColor2, 'cue2')}, 2000);

  		    makeStimGrating1('canvas1', 'backCanvas1', 90, 1);
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("sall1 = "+lat);
  			trial_latency.s2 = lat - duration;

  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// DELAY SCREEN
//--------------------------------------

function delayScreen(duration)
{

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			fixationCross_svg();
			stim_str = s.toString();
			s.clear();
			return stim_str;
			
		},
		on_load: function() 
		{
			console.log('s5 just finished loading.');

			setTimeout(function(){ makeStimGrating2('canvas1', 'backCanvas1', -1, -1, gratingAngles[0], gratingContrast[0], gratingPosition[0])}, duration);
  		    setTimeout(function(){ makeStimGrating2('canvas2', 'backCanvas2', 1, -1, gratingAngles[1], gratingContrast[1], gratingPosition[1])}, duration);
  		    setTimeout(function(){ makeStimGrating2('canvas3', 'backCanvas3', -1, 1, gratingAngles[2], gratingContrast[2], gratingPosition[2])}, duration);
  		    setTimeout(function(){ makeStimGrating2('canvas4', 'backCanvas4', 1, 1, gratingAngles[3], gratingContrast[3], gratingPosition[3])}, duration);
  		},
  		on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s5 = "+lat);
  			trial_latency.s1 = lat - duration;

  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// STIMULUS 2 PRESENTATION
//--------------------------------------

function gratingSet2(duration, gratingAngles, gratingContrast, gratingPosition)
{
	/* position 1 = away from the center
	   position 2 = center of the placeholder
	   position 3 = towards the center
	*/

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: 300,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			fixationCross_svg();
			stim_str = s.toString();
			s.clear();
			
			return '<div>'+
					'<canvas id = "canvas1"></canvas><canvas id = "backCanvas1"></canvas>'+
					'<canvas id = "canvas2"></canvas><canvas id = "backCanvas2"></canvas>'+
					'<canvas id = "canvas3"></canvas><canvas id = "backCanvas3"></canvas>'+
					'<canvas id = "canvas4"></canvas><canvas id = "backCanvas4"></canvas>'+
					'</div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s6 just finished loading.');

  	//	    makeStimGrating2('canvas1', 'backCanvas1', -1, -1, gratingAngles[0], gratingContrast[0], gratingPosition[0]);
  	//	    makeStimGrating2('canvas2', 'backCanvas2', 1, -1, gratingAngles[1], gratingContrast[1], gratingPosition[1]);
  	//	    makeStimGrating2('canvas3', 'backCanvas3', -1, 1, gratingAngles[2], gratingContrast[2], gratingPosition[2]);
  	//	    makeStimGrating2('canvas4', 'backCanvas4', 1, 1, gratingAngles[3], gratingContrast[3], gratingPosition[3]);
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s6 = "+lat);
  			trial_latency.s2 = lat - duration;

  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// RESPONSE BLOCK
//--------------------------------------

function ResponseBlock(duration, probe_pos, curr_totalTrialNum)
{
	var psychBlock_R =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: [90, 77], // z (no change) - 90; m (change) - 77
		stimulus: function(data)
		{
			a = (new Date()).getTime();

			fixationDot(probe_pos);
			_4bars(finalAngleData[curr_totalTrialNum]);
			cue_flag = 0;
			_4arcs(cue_flag);
			stim_str = s.toString();
			s.clear();
			return stim_str;
		},
/*		on_load: function() 
		{
  		    console.log('RB just finished loading.');
  		},
*/ 		on_finish: function(data)
  		{
  			// recording subject data
			sub_response = [90, 77].indexOf(data.key_press); // 0 for no change and 1 for change
  			if(data.rt == null) { sub_RT = data.rt; }
  			else { sub_RT = (data.rt).toFixed(2); }

  			response_AFC_data[curr_totalTrialNum] = sub_response;
  			rt_AFC_data[curr_totalTrialNum] = sub_RT;

  			lat = (new Date()).getTime() - a;
  			console.log("s8 = "+lat);
  			trial_latency.s8 = lat - duration;
  		}
	}
	return psychBlock_R;
}

//--------------------------------------
// FEEDBACK MESSAGE
//--------------------------------------

function feedback_message(duration, probe_pos, changeState, trialNum, curr_totalTrialNum)
{
	var feedback = 
	{
		type: "html-keyboard-response",
		choices: jsPsych.NO_KEYS,
		stimulus: function(data)
		{
			a = (new Date()).getTime();

			changeAngle = changeAngleData[curr_totalTrialNum];
			
			// reset after every block
			if(trialNum == 1) 
			{ 
				countCorrect = 0; 
				staircaseCorrect = 0;
				countNAN = 0;
			}
			
			// reset staircase variables after every 8 trials
			if(trialNum > 8 && trialNum % 8 == 1)
			{
				staircaseCorrect = 0;
				countNAN = 0;
			}
			
			// compare subject response and actual response
			if(response_AFC_data[curr_totalTrialNum] == changeState[probe_pos])
			{
				countCorrect = countCorrect + 1; 
				staircaseCorrect = staircaseCorrect + 1;
				return "<p style = 'font-size:20px; color:black'>Correct Response.</p>";
			}
			else if(response_AFC_data[curr_totalTrialNum] == -1)
			{
				countNAN = countNAN + 1;
				return "<p style = 'font-size:20px; color:black'>No Response recorded.</p>";
			}
			else
			{
				return "<p style = 'font-size:20px; color:black'>Incorrect Response.</p>";
			}
		},
		trial_duration: duration,
		on_finish: function(data)
		{
			// staircase session
			if(trialNum >= 8 && trialNum % 8 == 0 && countNAN != 8)
			{
				[new_changeAngle, meanCorrect] = do_staircase(staircaseCorrect, countNAN, changeAngle)
				meanCorrectData[curr_totalTrialNum] = meanCorrect;
				changeAngleData[curr_totalTrialNum+1] = new_changeAngle;

				console.log("new changeAngle = "+changeAngleData[curr_totalTrialNum+1]);
				console.log("meanCorrect = "+meanCorrectData[curr_totalTrialNum]);
			}
			else
			{
				changeAngleData[curr_totalTrialNum+1] = changeAngleData[curr_totalTrialNum];
				console.log("same changeAngle = "+changeAngleData[curr_totalTrialNum+1]);
			}
			lat = (new Date()).getTime() - a;
  			console.log("feedback = "+lat);
  			trial_latency.s9 = lat - duration;

			trial_latency_json = JSON.stringify(trial_latency);
			all_trial_latency.push(trial_latency_json);
			trial_latency = {};
		}
	}
	return feedback;
}