var hours = 0;
var minutes = 0;
var seconds = 0;
var submitTime;
function submitTime(){
  var hoursInput = document.getElementById('hours');
  var minutesInput = document.getElementById('minutes');
  var secondsInput = document.getElementById('seconds');
  if(hoursInput.checkValidity() == false || minutesInput.checkValidity() == false || secondsInput.checkValidity() == false){
    alert('The amount of time you inserted is not valid. Try a different amount of time!');
  }
  else{
    console.log("Proceeding to timer portion of app. Buyers beware");
    hours = hoursInput.value;
    minutes = minutesInput.value;
    if(secondsInput.value == 0){
      seconds = 0;
    }
    else{
      seconds = secondsInput.value;
    }
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    submitTime = true;
    startTimer();
    return true;
  }
}

function startTimer(){
  
}
