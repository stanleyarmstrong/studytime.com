var hours = 0;
var minutes = 0;
var seconds = 0;
function submitTime(){
  var hoursInput = document.getElementById('hours');
  var minutesInput = document.getElementsByClassName('minutes');
  if(hoursInput.checkvalidity() == false && minutesInput.checkvalidity() == false){
    alert('The amount of time you inserted is not valid. Try a different amount of time!');
  }
  else{
    console.log("Proceeding to timer portion of app.Buyers beware");
    return true;
  }
}
