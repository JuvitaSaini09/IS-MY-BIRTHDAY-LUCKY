const dob = document.querySelector("#dob");
const luckyNo = document.querySelector("#lucky-no");
const errorMessage = document.querySelector("#error-message");
const checkButton = document.querySelector(".check-button");
const resMessage= document.querySelector("#res-message");
resMessage.style. display= "none";
function OnClickHandler() {
  hideError();
  resMessage.style.display = "none";
  const dateOfBirth = dob.value;
  const luckyNumber = luckyNo.value;
  if (dateOfBirth && luckyNumber) {
    calculateLuckyNumber();

  } else {

    showError("Enter valid Value !!");
  }
}

function calculateLuckyNumber() {

  const Bdate = dob.value.replaceAll("-", "");
  const LuckyNo = luckyNo.value;
  console.log(typeof Bdate);

  var Sum = 0;

  for (let i = 0; i < Bdate.length; i++) {

    Sum = Sum + Number(Bdate.charAt(i));
  }


  if (Sum % LuckyNo == 0) {
    
    resMessage.style.display = "block";
    resMessage.style.color ="green";
    resMessage.innerText ="Your birthday is lucky 🚀 !!";
  } else {
    
    resMessage.style.display = "block";
    resMessage.innerText ="Your birthday is not lucky  !!";
    
  }


}

function hideError() {
  errorMessage.style.display = "none";
}

function showError(ErrorMessageDisplay) {

  errorMessage.style.display = "block";
  errorMessage.innerText = ErrorMessageDisplay;


}

checkButton.addEventListener("click", OnClickHandler);

