// calculation for staircasing the change angle

function do_staircase(CR, NAN, curr_changeAngle)
{
	CR = staircaseCorrect;
	NAN = countNAN;
	meanCorrect = (CR / (8 - NAN)).toFixed(2);
	new_changeAngle = curr_changeAngle + ((threshold - meanCorrect) * step);

	return [new_changeAngle, meanCorrect];
}