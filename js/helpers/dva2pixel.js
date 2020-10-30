// converting dva values to cm and then to pixels
// this conversion is specific to my system specs
// But, since jsPsych will rescale everything, the DVAs shouldn't change for every system

function dva2pixel(dva)
{
	D = 50; // distance from the screen in cm
	V = dva * (Math.PI/180); // converting to radians
	S_cm = (2*D)*Math.tan(V/2); // size of stimulus in cm

	S_px = ppcm * S_cm;

	return S_px;
}