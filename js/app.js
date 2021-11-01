const loginForm = document.querySelector("#login-form");
const machineInput = document.querySelector("input#comNum");
const userInput = document.querySelector("input#userNum");
const paintValues = document.querySelector("h2");

function onLoginForm(event){
  event.preventDefault();
  const randomNum = Math.floor(Math.random() * machineInput.value + 1);
  localStorage.setItem("machineAnswer", randomNum);
  localStorage.setItem("userAnswer", parseInt(userInput.value));
  paintAnswers();
}

function paintAnswers(){
  const USER_ANSWER = localStorage.getItem("userAnswer");
  const MACHINE_ANSWER = localStorage.getItem("machineAnswer");
  
  if(USER_ANSWER === MACHINE_ANSWER){
    paintValues.innerText = `You chose: ${USER_ANSWER}, the machine chose: ${MACHINE_ANSWER}. 
    You won! `;
  }else{
    paintValues.innerText = `You chose: ${USER_ANSWER}, the machine chose: ${MACHINE_ANSWER}. 
    You lost!`;
  }
}

loginForm.addEventListener("submit", onLoginForm);