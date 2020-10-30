// Get task input data from csv file in gist github

/* 
cue - 0
initial angle - 1, 2, 3, 4
delay duration - 5
change state - 6, 7, 8, 9
change direction - 10, 11, 12, 13
probe - 14
*/

var trialData_url = "https://gist.githubusercontent.com/RookieKoala/6576d06f4467b4ef08c29fc5447b29c3/raw/137fced870f2a0806659f18c148cd2b5f9ea4daa/trialDataTrain.txt";
var request = new XMLHttpRequest();  
request.open("GET", trialData_url, false);   
request.send(null);  

var trialData = [];

var jsonObject = request.responseText.split(/\r?\n|\r/);
for (i = 0; i < jsonObject.length; i++) 
{
	trialwiseData_obj = {};
	trialwiseData_arr = jsonObject[i].split(',');
	trialwiseData_obj.WM_cue = parseInt(trialwiseData_arr[0]);
	trialwiseData_obj.initialAngles = [parseInt(trialwiseData_arr[1]), parseInt(trialwiseData_arr[2]), parseInt(trialwiseData_arr[3]), parseInt(trialwiseData_arr[4])];
	trialwiseData_obj.delayDuration = parseInt(trialwiseData_arr[5]*1000);
	trialwiseData_obj.changeState = [parseInt(trialwiseData_arr[6]), parseInt(trialwiseData_arr[7]), parseInt(trialwiseData_arr[8]), parseInt(trialwiseData_arr[9])];
	trialwiseData_obj.changeDirection = [parseInt(trialwiseData_arr[10]), parseInt(trialwiseData_arr[11]), parseInt(trialwiseData_arr[12]), parseInt(trialwiseData_arr[13])];
	trialwiseData_obj.WM_Probe = parseInt(trialwiseData_arr[14]);
	trialData.push(trialwiseData_obj);
}