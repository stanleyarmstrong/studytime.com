var hours = 0;
var minutes = 0;
var seconds = 0;
var time;
//Welcome message to the site
console.log("Welcome to occassionalstudying.com! Stay for a little while and listen to some great tunes.");
$('.timeRemaining').hide();
//Submits the time and verifies that the user's input was correct and then runs the startTimer function and runs the streamAudio function
//The main of the function if you will
function submitTime(){
  var inputs = [document.getElementById('hours'), document.getElementById('minutes') , document.getElementById('seconds')];
  if(inputs[0].checkValidity() == false || inputs[1].checkValidity() == false || inputs[2].checkValidity() == false){
    alert('The amount of time you inserted is not valid. Try a different amount of time!');
  }
  else{
    console.log("Proceeding to timer portion of app. Buyer beware");
    var u = 1;
    for(var i = 0; i < inputs.length; i++){
      switch(i){
        case 0:
          if(inputs[i].value == 0){
            hours = 0;
          }
          else{
            hours = inputs[i].value;
          }
          break;
        case 1:
          if(inputs[i].value == 0){
            minutes = 0;
          }
          else{
            minutes = inputs[i].value;
          }
          break;
        default:
          if(inputs[i].value == 0){
            seconds = 0;
          }
          else{
            seconds = inputs[i].value;
          }
      }
    }
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    startTimer();
    streamAudio();
  }
}
//Sets the interval of which you will study to 25 minutes and then does the same as submitTime
function pomSession() {
  hours = 0;
  minutes = 25;
  seconds = 1;
  submitTimer = true;
  console.log('Starting a new Pomodoro session. Buyer beware.');
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  startTimer();
  streamAudio();
}
//Displays the time remaining on screen
function startTimer(){
  $('.studyTime').hide();
  $('.timeAmmount').hide();
  $('.submit').hide();
  $('.odometer').show();
  $('.timeRemaining').show();
  singleDigitChecker();
  $('#timeRemaining').text(hours + ' : ' + minutes + ' : ' + seconds);
  deltaTime();
  if(hours === 0 && minutes === 0 && seconds === 0){
    alert("Congratulations, you have finished yours study session. Enjoy the rest of your day!");
    window.location.reload();
  }
}
//Changes the hours,minutes, and seconds in the file
//Changes the hours, minutes, and seconds on screen
function deltaTime(){
  var stopInterval =setInterval(function(){
    if(minutes === 0 && hours === 0 && seconds === 0){
      clearInterval(stopInterval);
    }
    seconds--;
    console.log(seconds);
    if(seconds < 0){
      minutes--;
      seconds = 59;
    }
    singleDigitChecker();
    $('#timeRemaining').text(hours+ ' : ' + minutes + ' : ' + seconds);
    if(seconds === 0 && minutes > 0){
      seconds = 59;
      minutes--;
      console.log(minutes);
      if(minutes === 0 && hours === 0){
        seconds= 59;
        console.log(seconds);
      }
      if(minutes === 0 && hours > 0){
        minutes = 59;
        hours--;
        console.log(hours);
      }

  }
  }, 1000);
}
//Checks if the digit of the timer is a single digit or not
//If not then it adds a 0 in front of the digit
function singleDigitChecker(){
  for(var i = 0; i<3; i++){
    switch(i){
      case 0:
        if(hours.toString().length == 2){
            hours = hours;
        }
        else{
          hours = '0' + hours;
        }
        break;
      case 1:
        if(minutes.toString().length == 2){
          minutes = minutes;
        }
        else{
          minutes = '0' + minutes;
        }

        break;
      default:
        if(seconds.toString().length == 2){
          seconds = seconds
        }
        else{
          seconds = '0' + seconds;
        }

        break;
    }
  }
}
