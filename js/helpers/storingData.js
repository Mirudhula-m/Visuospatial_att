//--------------------------------------------
// STORING DATA
//--------------------------------------------

function storeData(blockNum, trialNum, cue_pos, initialAngles, changeState, changeDirection, delayDurationFixation, delayDuration, probe_pos, curr_totalTrialNum)
{
	var psychBlock_store = 
	{
		type:"html-keyboard-response", // dummy
		data:
		{
			subjectNum: subjectNum,
			blockNum: blockNum,
			trialNum: trialNum,
			WM_cue: cue_pos,
			initialAngles: initialAngles,
			delayDurationFixation: delayDurationFixation,
			delayDuration: delayDuration,
			changeState: changeState,
			changeDirection: changeDirection,
			WM_Probe: probe_pos
		},
		on_load: function(data) 
		{
  		    console.log('Storing Data...');
  		},
		stimulus: function()
		{
			return " ";
		},
		trial_duration: 15,
		on_finish: function(data)
		{
			data.finalAngles = finalAngleData[curr_totalTrialNum];
			data.Response_AFC = response_AFC_data[curr_totalTrialNum];
			data.RT_AFC = rt_AFC_data[curr_totalTrialNum];
			data.changeAngle = changeAngleData[curr_totalTrialNum];
			data.meanCorrect = meanCorrectData[curr_totalTrialNum];
			
			data.is_trialData = 1;
			if(trialNum % 8 == 0)
			{
				data.is_staircaseData = 1;
			}

			is_trialReject = trialRejection();
			data.is_trialReject = is_trialReject;
		}
	}
	return psychBlock_store;
}
