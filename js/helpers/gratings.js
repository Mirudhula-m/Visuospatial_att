// draw gratings

function drawGratings(diameter_dva, x, y, angle, gratingCycle, contrast)
{
	radius_px = dva2pix(diameter_dva) / 2;

	y0 = y-(radius_px*Math.cos((Math.PI/180)*angle)); // initial
	y1 = y+(radius_px*Math.cos((Math.PI/180)*angle)); // final
	x0 = x-(radius_px*Math.sin((Math.PI/180)*angle));
	x1 = x+(radius_px*Math.sin((Math.PI/180)*angle));

	N_colourStops = (gratingCycle * 2) - 1;

	var grd = ctx.createLinearGradient(x0, y0, x1, y1);

	for(var stopIter = 0; stopIter <= N_colourStops; stopIter++)
	{
		if(stopIter%2 == 0)
		{
			grd.addColorStop(stopIter/N_colourStops, "white");
		}
		else
		{
			grd.addColorStop(stopIter/N_colourStops, "black");
		}
	}

	ctx.beginPath();
	ctx.arc(x, y, radius_px, 0, 2*Math.PI);
	ctx.fillStyle = grd;
	ctx.fill();
}