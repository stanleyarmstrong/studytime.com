var hours = 0;
var minutes = 0;
var seconds = 0;
var time;
var submitTimer;
console.log("Welcome to occassionalstudying.com! Stay for a little while and listen to some great tunes.");
$('.timeRemaining').hide();
$('.odometer').hide();
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
  }
}
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
function startTimer(){
  $('.studyTime').hide();
  $('.timeAmmount').hide();
  $('.submit').hide();
  $('.odometer').show();
  $('.timeRemaining').show();
  deltaTime();
  if(hours <=0 && minutes <= 0 && seconds <= 0){
    alert("Congratulations, you have finished your study session. Enjoy the rest of your day!");
    window.location.reload();
  }
}
function deltaTime(){
  setInterval(function(){
    singleDigitChecker();
    $('#timeRemaining').text(hours+ ' : ' + minutes + ' : ' + seconds);
    seconds--;
    console.log(seconds);
    if(seconds === 0 && minutes > 0){
      seconds = 59;
      minutes--;
      console.log(minutes);
      if(minutes === 0 && hours > 0){
        minutes = 59;
        hours--;
        console.log(hours);
      }
      else if(minutes === 0){
        minutes = 59;
        console.log(minutes);
      }
    }

  }, 1000);
}
function singleDigitChecker(){
  for(var i = 0; i<3; i++){
    switch(i){
      case 0:
        if(hours >= 10){
          hours = hours;
        }
        else{
          if(hours.toString().length == 2){
            hours = hours;
          }
          else{
          hours = '0' + hours;
          }
        }
        break;
      case 1:
        if(minutes >= 10){
          minutes = minutes;
        }
        else{
          if(minutes.toString().length == 2){
            minutes = minutes;
          }
          else{
          minutes = '0' + minutes;
          }
        }
        break;
      default:
        if(seconds >= 10){
          seconds = seconds;
        }
        else{
          if(seconds.toString().length == 2){
            seconds = seconds
          }
          else{
            seconds = '0' + seconds;
          }
        }
        break;
    }
  }
}
