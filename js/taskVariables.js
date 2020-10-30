//--------------------------------------
//**************************************
//  Task specific variables
//**************************************
//--------------------------------------

var subjectNum = 0;

//--------------------------------------------
// setting the snap canvas
//--------------------------------------------
var s = Snap('#svg'); //snap svg

// initialising window size
win_x =  screen.width;
win_y =  screen.height;
var s = Snap(win_x, win_y);

//--------------------------------------------
// HTML5 CANVAS
//--------------------------------------------

var jgl_canvas;
var url;

//--------------------------------------------
// Stimulus design variables
//--------------------------------------------

// Pixels per cm for my computer
// ppi is 127.68 (considering CSS pixels)
var ppcm = 50.268;

// values in DVA

var placeholderDia_DVA = 4;
var placeholderDist_DVA = 4.5; // distance from center
var orientedGratingSize_DVA = 1.4;

//--------------------------------------------
// Experiment variables
//--------------------------------------------

n_blocks = 8;
n_Trials = 64;

var curr_totalTrialNum = 1;

changeAngleInitial = 30; // initial change angle for training

// training variables
var threshold = 0.65;
var step = 20;

//--------------------------------------------
// creating data storage variables
//--------------------------------------------
var timeline = [];

var trialData;
var all_trialData = [];
var all_blockData = [];
var response;

var changeAngleData = [];
var finalAngleData = [];
var meanCorrectData = [];

var countCorrect;
var staircaseCorrect;
var countNAN;

var response_AFC_data = [];
var rt_AFC_data = [];

changeAngleData[curr_totalTrialNum] = changeAngleInitial;

var b = [];
b[1] = 1;
//--------------------------------------------
// Variable for storing latency data
//--------------------------------------------

var trial_latency = {};
var trial_latency_json = [];
var all_trial_latency = [];


