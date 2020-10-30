// change angle and final angles



changeAngle = changeAngleData[curr_totalTrialNum];
finalAngles = getFinalAngles(initialAngles, changeState, changeDirection, changeAngle);
finalAngleData[curr_totalTrialNum] = finalAngles;

function getDynamicVariables(initialAngles, changeState, changeDirection)
{
	var psychBlock_NR =
	{
		type:"call-function",
		func: function(data)
		{
			changeAngle = 
		},
/*		on_load: function() 
		{
  		    console.log('s7 just finished loading.');
  		},
*/  	on_finish: function(data)
  		{
  			
  		}
	}
	return psychBlock_NR;
}