var Workingtimeinminutes = 25;
var sound = new Audio("soundeffectalarm.mp3");
function split(){

    document.getElementById('Starttime');
    var time=document.getElementById("Starttime").value;
    var timer = document.getElementById('time');
    timer.innerHTML = time;
    var Workingtime = document.getElementById("breaks").value;
    var Workhour = document.getElementById("Workhour").value;
    if (Workingtime == "25min"){
        3;
    }
    else if (Workingtime == "55min"){
        Workingtimeinminutes = 55;
        timeLimitInMinutes = 55;
        timeLimitInSeconds = timeLimitInMinutes * 60;
    }
    else if (Workingtime == "Non"){
        Workingtimeinminutes = Workhour * 60;
        timeLimitInMinutes = Workhour * 60;
        timeLimitInSeconds = timeLimitInMinutes * 60;
    }
    clockInterval = setInterval(startClock, 1000);
}

var timeLimitInMinutes = 25;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById('timer');

function startTimer() {

    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    let timerInterval;
    if (timeLimitInSeconds <= 0) {
        if (timeLimitInMinutes == 5) {


        }
        sound.play();
        if (phase == "Working") {
            phase = "Break Time";
            document.getElementById("phase").innerHTML = "Break time";
            timeLimitInMinutes = 5;
            timeLimitInSeconds = timeLimitInMinutes * 60;
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

    timerElement.textContent = minutes + ':' + seconds;
    timeLimitInSeconds--;
}
var phase = "Working";
function startClock() {
    var startingTime = document.getElementById("Starttime").value;
    startingTime = startingTime.split(":");
    var startingHour = startingTime[0];
    var startingMinute = startingTime[1];

    var today = new Date();
    var currentHour = today.getHours();
    var currentMinute = today.getMinutes();

    if (startingHour == currentHour && startingMinute == currentMinute) {
        document.getElementById("phase").innerHTML = "Working";
        document.getElementById("quack").removeAttribute("hidden");
        timerInterval = setInterval(startTimer, 1000);
        clearInterval(clockInterval);
    }
}
