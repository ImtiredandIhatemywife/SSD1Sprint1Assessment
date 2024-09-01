var Workingtimeinminutes = 25;
var backgroundTimer = undefined;
//The stored soundeffect for the alarm
var sound = new Audio("soundeffectalarm.mp3");
// this function is for determining which breaktimes were selected
function split(){
    document.getElementById('Starttime');
    var time=document.getElementById("Starttime").value;
    var timer = document.getElementById('time');
    timer.innerHTML = time;
    var Workingtime = document.getElementById("breaks").value;
    var Workhour = document.getElementById("Workhour").value;
    // Option "25min" for breaks
    if (Workingtime == "25min"){
        Workingtimeinminutes = 25;
        timeLimitInMinutes = 25;
        timeLimitInSeconds = timeLimitInMinutes * 60;
    }
    // Option "55min" for breaks
    else if (Workingtime == "55min"){
        Workingtimeinminutes = 55;
        timeLimitInMinutes = 55;
        timeLimitInSeconds = timeLimitInMinutes * 60;
    }
    // Option "Non" for breaks
    else if (Workingtime == "Non"){
        Workingtimeinminutes = Workhour * 60;
        timeLimitInMinutes = Workhour * 60;
        timeLimitInSeconds = timeLimitInMinutes * 60;
    }

   // The backgroundimer determines the workhour that was inputted into seconds
    backgroundTimer = Workhour * 60 * 60;
    // The clockInterval starts the countdown of the overall background timer
    clockInterval = setInterval(startClock, 1000);
}

var timeLimitInMinutes = 25;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById('timer');
// This function changes the phase of the timer to "End" once the backgroundtimer's seconds reaches 0
function startTimer() {
    if (backgroundTimer <= 0) {
        document.getElementById("phase").innerHTML = "End";
        clearInterval(timerInterval);
    }

    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    let timerInterval;
    if (timeLimitInSeconds <= 0) {
        if (timeLimitInMinutes == 5) {


        }
        // This plays the audio everytime the phase of the timer changes from "Working", "Breaktime", or "End"
        sound.play();
        // Working time
        if (phase == "Working") {
            phase = "Break Time";
            document.getElementById("phase").innerHTML = "Break time";
            timeLimitInMinutes = 5;
            timeLimitInSeconds = timeLimitInMinutes * 60;
            // Break time
        } else if (phase == "Break Time") {
            phase = "Working";
            document.getElementById("phase").innerHTML = "Working";
            timeLimitInMinutes = Workingtimeinminutes;
            timeLimitInSeconds = timeLimitInMinutes * 60;
        }


    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
// This allows the timer to run
    timerElement.textContent = minutes + ':' + seconds;
    timeLimitInSeconds--;
    backgroundTimer--;
}
var phase = "Working";
// This function is for starting the timer
function startClock() {
    var startingTime = document.getElementById("Starttime").value;
    startingTime = startingTime.split(":");
    var startingHour = startingTime[0];
    var startingMinute = startingTime[1];
// The current time
    var today = new Date();
    var currentHour = today.getHours();
    var currentMinute = today.getMinutes();
// This starts the timer once the Start time is equal to the current time
    if (startingHour == currentHour && startingMinute == currentMinute) {
        document.getElementById("phase").innerHTML = "Working";
        document.getElementById("quack").removeAttribute("hidden");
        timerInterval = setInterval(startTimer, 1000);
        clearInterval(clockInterval);
    }
}





// This var a counter
    var counter = -1;

// This function creates a counter which adds up from Goals every time the Add goal button is clicked
    function myFunction() {
    var task = document.getElementById('Goals').value
    counter = counter + 1;
// This cost node creates an id and adds it to the counter as a string
    const node = document.createElement("p");
    node.setAttribute("id", "node" + counter.toString());
// This const cbnode create a checkbox nect to goals
    const cbnode = document.createElement("input");
    cbnode.setAttribute("type",'checkbox')
    cbnode.setAttribute("id",'goal')
// This const cblabel is the label that will display the goals
    const cblabel = document.createElement("LABEL")
    cblabel.setAttribute('for','goal')
    cblabel.innerHTML=" "+task+" ";
// This const cbbutton creates a button to delete the goals and checkbox were are added
    const cbbutton = document.createElement("input");
    cbbutton.setAttribute("type", "button");
    cbbutton.setAttribute("data-value", counter);
    cbbutton.setAttribute("onclick", "foo(this.dataset.value)");
    cbbutton.setAttribute("value", "🗑");

    node.appendChild(cbnode);
    node.appendChild(cblabel);
    node.appendChild(cbbutton);
    document.getElementById("myGoals").appendChild(node);
}
// This function deletes the goal and checkbox
    function foo(value) {
    let list = document.getElementById("myGoals");
    let element = document.getElementById("node" + value.toString());
    list.removeChild(element);
}
