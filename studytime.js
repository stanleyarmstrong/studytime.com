var hours = 0;
var minutes = 0;
var seconds = 0;
var submitTime;
function submitTime(){
  var inputs = [document.getElementById('hours'), document.getElementById('minutes') , document.getElementById('seconds')];
  if(inputs[0].checkValidity() == false || inputs[1].checkValidity() == false || inputs[2].checkValidity() == false){
    alert('The amount of time you inserted is not valid. Try a different amount of time!');
  }
  else{
    console.log("Proceeding to timer portion of app. Buyer beware");
    for(var i = 0; i < inputs.length(); i++){
      if(inputs[i].value == 0){
        inputs[i] == 0;
      }
      else{
        inputs[i] = inputs[i].value;
      }
    }
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    submitTime = true;
    startTimer();
    return true;
  }
}
function pomSession() {
  hours = 0;
  minutes = 25;
  seconds = 0;
  submitTime = true;
  console.log('Starting a new Pomodoro session. Buyer beware.');
  startTimer();
}
function startTimer(){

}
