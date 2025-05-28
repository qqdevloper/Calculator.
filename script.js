window.onload = function () { 
  const display = document.getElementById("display"); 

  window.appendToDisplay = function (value) {
    display.value += value;
  };
function appendToDisplay(input){
  if (input === 'pi') {
    display.value += Math.PI;
  }
  else {
    display.value += input;
  }
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try {
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}
