var hours = 0;
var minutes = 0;
var seconds = 0;
var submitTimer;
$('#timeRemaining').hide();
$('.odometer').hide();
function submitTime(){
  var inputs = [document.getElementById('hours'), document.getElementById('minutes') , document.getElementById('seconds')];
  if(inputs[0].checkValidity() == false || inputs[1].checkValidity() == false || inputs[2].checkValidity() == false){
    alert('The amount of time you inserted is not valid. Try a different amount of time!');
  }
  else{
    console.log("Proceeding to timer portion of app. Buyer beware");
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
  seconds = 0;
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
  $('#timeRemaining').show();
  if(hours <=0 && minutes <= 0 && seconds <= 0){
    alert("Congratulations, you have finished your study session. Enjoy the rest of your day!");
    window.location.reload();
  }
}
