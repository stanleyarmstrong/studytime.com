var hours;
var minutes;
var seconds;
var addTime;
var time;
var client_id = "c53234aeaa1047d98d13838fe8382e14";
var client_secret = "e5e98da9de174515840f98dafe0cde5a";
//Welcome message to the site
console.log("Welcome to occassionalstudying.com! Stay for a little while and listen to some great tunes.");
$('.timeRemaining').hide();
//Submits the time and verifies that the user's input was correct and then runs the startTimer function and runs the streamAudio function
//The main of the function if you will
function submitTime(){
  time = 0;
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
            addTime = hours * 3600;
            time += addTime;
          }
          break;
        case 1:
          if(inputs[i].value === 0){
            minutes = 0;
          }
          else{
            minutes = inputs[i].value;
            addTime = minutes * 60;
            time += addTime;
          }
          break;
        default:
          if(inputs[i].value === 0){
            seconds = 0;
          }
          else{
            seconds = inputs[i].value;
            addTime += seconds;
            time += seconds;
          }
      }
    }
    time*=1000;
    console.log("Total time remaining " + time );
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    startTimer();
  }
}
//Sets the interval of which you will study to 25 minutes and then does the same as submitTime
function pomSession() {
  time = 0;
  hours = 0;
  minutes = 25;
  seconds = 0;
  addTime = minutes * 60 * 1000;
  time += addTime;
  submitTimer = true;
  console.log('Starting a new Pomodoro session. Buyer beware.');
  console.log(time);
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
}
//Changes the hours,minutes, and seconds in the file
//Changes the hours, minutes, and seconds on screen
function deltaTime(){
  var stopInterval = setInterval(function(){
      time-=1000;
      hours = Math.floor((time / 3600000) % 24);
      minutes = Math.floor((time / 60000) % 60);
      seconds = Math.floor((time/1000) % 60);
      singleDigitChecker();
      $('#timeRemaining').text(hours + " : " + minutes + " : " + seconds);
      if(time <= 0){
        clearInterval(stopInterval);
      }
      else{
        return true;
      }
  }, 1000);

}
//Checks if the digit of the timer is a single digit or not
//If not then it adds a 0 in front of the digit
function singleDigitChecker(){
  for(var i = 0; i<3; i++){
    switch(i){
      case 0:
        if(hours.toString().length >= 2){
            hours = hours;
        }
        else{
          hours = '0' + hours;
        }
        break;
      case 1:
        if(minutes.toString().length >= 2){
          minutes = minutes;
        }
        else{
          minutes = '0' + minutes;
        }

        if(minutes < 60){
          minutes = minutes;
        }
        else{
          minutes = '00';
        }
        break;
      default:
        if(seconds.toString().length >= 2){
          seconds = seconds
        }
        else{
          seconds = '0' + seconds;
        }
        break;
    }
  }
}
function streamAudio(){
}
