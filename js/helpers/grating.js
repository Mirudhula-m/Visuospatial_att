// This file is for making gratings


function jglMakeGrating(width, height, sf, angle, phase, pixPerDeg) {

	// Get sf in number of cycles per pixel
	sfPerPix = sf / pixPerDeg;
	// Convert angle to radians
	angleInRad = ((angle + 0) * Math.PI) / 180;
	// Phase to radians
	phaseInRad = (phase * Math.PI) * 180;

	// Get x and y coordinates for 2D grating
	xStep = 2 * Math.PI / width;
	yStep = 2 * Math.PI / height;
	x = jglMakeArray(-Math.PI, xStep, Math.PI + 1); // to nudge jglMakeArray to include +PI
	y = jglMakeArray(-Math.PI, yStep, Math.PI + 1);
	// To tilt the 2D grating, we need to tilt
	// x and y coordinates. These are tilting constants.
	xTilt = Math.cos(angleInRad) * sf * 2 * Math.PI;
	yTilt = Math.sin(angleInRad) * sf * 2 * Math.PI;

	//What is width and height? Are these in degrees of visual angle or pixels?
	//See how lines2d and dots work. For example, jglFillRect(x, y, size, color) uses size in pixels
	//

	//How does jgl compute size in degress of visual angle
	var ixX, ixY; // x and y indices for arrays
	var grating = []; // 2D array
	for (ixX = 0; ixX < x.length; ixX++) {
		currentY = y[ixY];
		grating[ixX] = [];
		for (ixY = 0; ixY < y.length; ixY++) {
			grating[ixX][ixY] = Math.cos(x[ixX] * xTilt + y[ixY] * yTilt);
			// Scale to grayscale between 0 and 255
			grating[ixX][ixY] = Math.round(((grating[ixX][ixY] + 1) / 2) * 255);
		}
	}
	return (grating);
}
function jglMakeArray(low, step, high) {
	if (step === undefined) {
		step = 1;
	}
	var size = 0
	var array = []
	if (low < high) {
		size = Math.floor((high - low) / step);
		array = new Array(size);
		array[0] = low;
		for (var i = 1; i < array.length; i++) {
			array[i] = array[i - 1] + step;
		}
		return array;
	} else if (low > high) {
		size = Math.floor((low - high) / step);
		array = new Array(size);
		array[0] = low;
		for (var j = 1; j < array.length; j++) {
			array[j] = array[j - 1] - step;
		}
		return array;
	}
	return [low];
}

function jglCreateTexture(canvas, array, mask, contrast) {

	/* Note on how imageData works.
	 * ImageDatas are returned from createImageData,
	 * they have an array called data. The data array is
	 * a 1D array with 4 slots per pixel, R,G,B,Alpha. A
	 * greyscale texture is created by making all RGB values
	 * equals and Alpha = 255. The main job of this function
	 * is to translate the given array into this data array.
	 */
	if (!$.isArray(array)) {
		return;
	}
	var image;

	// 2D array passed in
	image = canvas.backCtx.createImageData(array.length, array.length);
	var row = 0;
	var col = 0;
	for (var i = 0; i < image.data.length; i += 4) {
		mask_val = mask[row][col]
//		ran_val = Math.random() * 256
		bgm_val = 128;

		image.data[i + 0] = bgm_val * (1 - contrast) + array[row][col] * contrast;
		image.data[i + 1] = bgm_val * (1 - contrast) + array[row][col] * contrast;
		image.data[i + 2] = bgm_val * (1 - contrast) + array[row][col] * contrast;
		image.data[i + 3] = mask_val;

		col++;
		if (col == array[row].length) {
			col = 0;
			row++;
		}
	}
	return image;
}

function twoDGaussian(amplitude, x0, y0, sigmaX, sigmaY, x, y) {
	var exponent = -((Math.pow(x - x0, 2) / (2 * Math.pow(sigmaX, 2))) + (Math.pow(y - y0, 2) / (2 *
		Math.pow(sigmaY, 2))));
	return amplitude * Math.pow(Math.E, exponent);
}

function make2dMask(arr, amp, s) {
	var midX = Math.floor(arr.length / 2)
	var midY = Math.floor(arr[0].length / 2)
	var mask = []
	for (var i = 0; i < arr.length; i++) {
		var col = []
		for (var j = 0; j < arr[0].length; j++) {
			col.push(twoDGaussian(amp * 255, midX, midY, s, s, i, j))
		}
		mask.push(col)
	}
	return mask
}

function applyMask(arr, mask) {
	var masked_arr = []
	for (var i = 0; i < arr.length; i++) {
		var col = []
		for (var j = 0; j < arr[0].length; j++) {
			col.push(arr[i][j] * mask[i][j])
		}
		masked_arr.push(col)
	}
	return masked_arr
}

//--------------------------------------
//**************************************
// STIMULUS 1 - First GRATING SET
//**************************************
//--------------------------------------

function makeStimGrating1(canvas, backcanvas, angle, contrast) 
{
	// this function makes 4 gratings
	var jgl_canvas = new Canvas(canvas, backcanvas, win_y, win_x, 0, 0);

	// Only continue if WebGL is available and working
  if (jgl_canvas.context === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }


	var arr = jglMakeGrating(placeholderDia, placeholderDia, 0.75, angle, 0, 0);
	var mask = make2dMask(arr, 5, 100);
	var drawing = jglCreateTexture(jgl_canvas, arr, mask, contrast);

	jgl_canvas.context.beginPath();
	jgl_canvas.context.arc(win_x/2-(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2-(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	jgl_canvas.context.closePath();
	jgl_canvas.context.arc(win_x/2+(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2-(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	jgl_canvas.context.closePath();
	jgl_canvas.context.arc(win_x/2-(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2+(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	jgl_canvas.context.closePath();
	jgl_canvas.context.arc(win_x/2+(placeholderDist*Math.cos(45*Math.PI/180)), win_y/2+(placeholderDist*Math.sin(45*Math.PI/180)), placeholderDia/2, 0, 2 * Math.PI);
	jgl_canvas.context.closePath();
	jgl_canvas.context.clip();

	var tempCanvas = document.createElement("canvas");
	var tempctx = tempCanvas.getContext("2d");
	tempCanvas.width = screen.width;
    tempCanvas.height = screen.height;
    tempCanvas.style.position = "absolute";
    tempCanvas.style.top = "0px";
    tempCanvas.style.left = "0px";

	tempctx.putImageData(drawing, 0, 0);
	url = tempCanvas.toDataURL();

	var img = new Image();
    img.onload = function()
    {
        // drawImage the image on the canvas
        jgl_canvas.context.drawImage(img, win_x/2-(placeholderDist*Math.cos(45*Math.PI/180))-(placeholderDia/2), win_y/2-(placeholderDist*Math.sin(45*Math.PI/180))-(placeholderDia/2));
        jgl_canvas.context.drawImage(img, win_x/2+(placeholderDist*Math.cos(45*Math.PI/180))-(placeholderDia/2), win_y/2-(placeholderDist*Math.sin(45*Math.PI/180))-(placeholderDia/2));
        jgl_canvas.context.drawImage(img, win_x/2-(placeholderDist*Math.cos(45*Math.PI/180))-(placeholderDia/2), win_y/2+(placeholderDist*Math.sin(45*Math.PI/180))-(placeholderDia/2));
        jgl_canvas.context.drawImage(img, win_x/2+(placeholderDist*Math.cos(45*Math.PI/180))-(placeholderDia/2), win_y/2+(placeholderDist*Math.sin(45*Math.PI/180))-(placeholderDia/2));
    }
    img.src = url;
}

//--------------------------------------
//**************************************
// STIMULUS 1 - First GRATING SET
//**************************************
//--------------------------------------

function makeStimGrating2(canvas, backcanvas, placeholderPositionX, placeholderPositionY, angle, contrast, gratingPosition) 
{
	/* position 1 = away from the center
	   position 2 = center of the placeholder
	   position 3 = towards the center
	   All positions are the same distance away from fixation cross
	*/

	// this function makes 4 gratings
	/*  1 - top left
		2 - top right
		3 - bottom left
		4 - bottom right
	*/
	
	var jgl_canvas = new Canvas(canvas, backcanvas, win_y, win_x, 0, 0);	
	var arr = jglMakeGrating(placeholderDia, placeholderDia, 1.3, angle, 0, 0);
	var mask = make2dMask(arr, 5, 100);
	var drawing = jglCreateTexture(jgl_canvas, arr, mask, contrast);

	jgl_canvas.context.beginPath();

	switch(gratingPosition)
	{
		case 1:
			jgl_canvas.context.arc(win_x/2+((placeholderPositionX)*(placeholderDist*Math.cos(gratingPosAngle))), win_y/2+((placeholderPositionY)*(placeholderDist*Math.sin(gratingPosAngle))), orientedGratingDia/2, 0, 2 * Math.PI);			
			break;
		case 2:
			jgl_canvas.context.arc(win_x/2+((placeholderPositionX)*(placeholderDist*Math.cos(45*Math.PI/180))), win_y/2+((placeholderPositionY)*(placeholderDist*Math.sin(45*Math.PI/180))), orientedGratingDia/2, 0, 2 * Math.PI);			
			break;
		case 3:
			jgl_canvas.context.arc(win_x/2+((placeholderPositionX)*(placeholderDist*Math.sin(gratingPosAngle))), win_y/2+((placeholderPositionY)*(placeholderDist*Math.cos(gratingPosAngle))), orientedGratingDia/2, 0, 2 * Math.PI);			
			break;
	}
	
	jgl_canvas.context.closePath();
	jgl_canvas.context.clip();

	var tempCanvas = document.createElement("canvas");
	var tempctx = tempCanvas.getContext("2d");
	tempCanvas.width = screen.width;
    tempCanvas.height = screen.height;
    tempCanvas.style.position = "absolute";
    tempCanvas.style.top = "0px";
    tempCanvas.style.left = "0px";

	tempctx.putImageData(drawing, 0, 0);
	url = tempCanvas.toDataURL();

	var img = new Image();
    img.onload = function()
    {
        // drawImage the image on the canvas
        jgl_canvas.context.drawImage(img, win_x/2+(placeholderPositionX)*(placeholderDist*Math.cos(45*Math.PI/180))-(placeholderDia/2), win_y/2+(placeholderPositionY)*(placeholderDist*Math.sin(45*Math.PI/180))-(placeholderDia/2));
    }
    img.src = url;
}


