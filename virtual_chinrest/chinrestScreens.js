


var set_creditcard =
{
	type:"html-keyboard-response",
	stimulus: function()
	{
		return '<div id="content">'+
        '<div id="page-size">'+
            '<h3 style = "color:black"> Let’s find out what your monitor size is (click to go into <div onclick="fullScreen(); registerClick();" style="display:inline; cursor:pointer; color: red"><em><u>full screen mode</u></em></div>).</h2>'+
            
            '<p style = "color:black">Please use any credit card that you have available (it can also be a grocery store membership card, your drivers license, or anything that is of the same format), hold it onto the screen, and adjust the slider below to its size.</p>'+
            
            '<p style = "color:black">(If you do not have access to a real card, you can use a ruler to measure image width to 3.37inch or 85.6mm, or make your best guess!)</p>'+
            '<b style="font-style: italic; color: black">Make sure you put the card onto your screen.</b>'+
            '<br>'+
            '<div id="container">'+
                '<div id="slider"></div>'+
                '<br>'+
                '<img id="card" src="card.png" style="width: 50%">'+
                '<br><br>'+
                '<button class="btn btn-primary" onclick="configureBlindSpot()">Click here when you are done!</button>'+
            '</div>'+
        '</div>';
    },
}

var blindSpotdist =
{
	type:"html-keyboard-response",
	stimulus: function()
	{
		return configureBlindSpot();
    },
}