// converting the values of stimulus dimension from DVA to pixels
// these values will be computed before the task runs
// these values will get scaled according to the system size

var placeholderDia = dva2pixel(placeholderDia_DVA).toFixed(2);
var placeholderDist = dva2pixel(placeholderDist_DVA).toFixed(2);
var orientedGratingDia = dva2pixel(orientedGratingSize_DVA).toFixed(2);


// Below code calculates the angle that will be used for determing the ...
// ...position of the oriented grating

// The angle is in radians


var gratingPosAngle; // only for position 1 and 3

gratingPosAngle =  (2*Math.asin((placeholderDia/2)/(2*placeholderDist))).toFixed(2);