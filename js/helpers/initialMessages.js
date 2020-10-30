//--------------------------------------
//**************************************
// Messages to the subject - Psych blocks
//**************************************
//--------------------------------------

//--------------------------------------------
// AT THE START OF THE EXPERIMENT
//--------------------------------------------

var full_screen = 
{
	type: "fullscreen",
	fullscreen_mode: true,
	message: "<p style = 'font-size:20px; color:black'>The experiment will switch to full screen mode when you press the button below</p>",
	on_start: function()
	{
		document.body.style.cursor = 'pointer';
	},
	on_finish: function()
	{
		document.body.style.cursor = 'none';
	}
};

var welcome_msg = 
{
	type: "html-keyboard-response",
	stimulus: "<p style = 'font-size:20px; color:black'>Welcome to the practice experiment..</p><p style = 'font-size:20px; color:black'>Press any key to "
			  +"begin.</p>",
};

// resizing the sizes of stimuli based on input from subject
var inputs = 
{
  type: 'resize',
  item_width: 3 + 3/8,
  item_height: 2 + 1/8,
  prompt: "<p style = 'font-size:20px; color:black'>Click and drag the lower right corner of the box until it is the size of a credit card held up to the screen.</p>",
  pixels_per_unit: 135,
  on_start: function()
	{
		document.body.style.cursor = 'pointer';
	},
  on_finish: function()
	{
		document.body.style.cursor = 'none';
	}
};