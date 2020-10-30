//--------------------------------------
//**************************************
// Timeline of the experiment
//**************************************
//--------------------------------------

function createTimeline()
{

	var exp_timeline = [];
	jsPsych.data.addProperties({subjectNum: subjectNum});

//	exp_timeline.push(full_screen, welcome_msg, inputs, instructions, example)//, calibration_msg, calibration);
	exp_timeline.push(full_screen, inputs);

	for(curr_blockNum = 0; curr_blockNum < n_blocks; curr_blockNum++)
	{
		exp_timeline.push(pre_block_msg(curr_blockNum+1, curr_totalTrialNum));

		for(curr_trialNum = 0; curr_trialNum < n_Trials; curr_trialNum++)
		{	
			// every 32 trials --> do forced recalibration
/*			if(curr_trialNum%5 == 0)
			{
				exp_timeline.push(loop_forced_clickRecal);
			}

			// pre-trial eye-tracking validation
			exp_timeline.push(loop_fixation);
*/
			// get counterbalanced data
			//******colorCues_time = trialData[curr_totalTrialNum].....;
			colorCues_time = 2000;
			cue_pos1 = 1;
			cue_pos2 = 2;
			cueColor1 = 'red';
			cueColor2 = 'blue';
			gratingAngles = [30, 40, 50, 90];
			gratingContrast = [1, 0.5, 1, 1];
			gratingPosition = [3, 1, 2, 3];
			/* position 1 = away from the vertical center
			   position 2 = center of the placeholder
			   position 3 = towards the vertical center
			*/



			fixationScreen_time = 500;
			exp_timeline.push(fixationScreen(fixationScreen_time));
			gratingSet1_time = 1000;
			exp_timeline.push(gratingSet1(gratingSet1_time));
			whiteCues_time = 1000;
			exp_timeline.push(whiteCues(whiteCues_time, cue_pos1, cue_pos2));
			exp_timeline.push(colorCues(colorCues_time, cue_pos1, cue_pos2, cueColor1, cueColor2));
			delay_time = 1000;
			exp_timeline.push(delayScreen(delay_time));
			gratingSet2_time = 100;
			exp_timeline.push(gratingSet2(gratingSet2_time, gratingAngles, gratingContrast, gratingPosition));


		//	exp_timeline.push(all_gratingSet1(colorCues_time, cue_pos1, cue_pos2, cueColor1, cueColor2));

/*			if(curr_trialNum%10 == 0 && curr_trialNum > 9)
			{
				exp_timeline.push(loop_validation);
			}
*/
			curr_totalTrialNum++;
		}

		exp_timeline.push(post_block_msg());
//		exp_timeline.push(loop_validation);
	}
	return exp_timeline;
}