var hours = 0;
var minutes = 0;
var seconds = 0;
var time = 1000;
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
    for(var i = 0; i < inputs.length; i+=u){
      switch(i){
        case 0:
          if(inputs[i].value === 0){
            hours = 0;
          }
          else{
            hours = inputs[i].value;
          }
          var addTime = hours * 3600;
          time *= addTime
          break;
        case 1:
          if(inputs[i].value == 0){
            minutes = 0;
          }
          else{
            minutes = inputs[i].value;
          }
          var addTime = minutes * 60;
          time *= (minutes * 60);
          break;
        default:
          if(inputs[i].value == 0){
            seconds = 0;
          }
          else{
            seconds = inputs[i].value;
          }
          time *= seconds;
      }
    }
    console.log("Total time remaining " + time );
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    startTimer();
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
  var stopInterval = setInterval(function(){
      time-=1000;
      //hours = Math.floor((time/1000/3600) % 24);
      //minutes = Math.floor((time/1000/60) % 60);
      console.log('Time remaining:' + time);
      seconds = Math.floor((time/1000) % 60);
      console.log('Seconds remaining: ' + seconds);
      singleDigitChecker();
      $('#timeRemaining').text(seconds);
      if(time === 0){
        clearInterval(stopInterval);
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
