const dob=document.querySelector("#dob");
const luckyNo=document.querySelector("#lucky-no");
const checkButton=document.querySelector("#check-button");
const errorMessage=document.querySelector("#error-message");

function OnClickHandler(){
    console.log("hi");
}
    /*
    hideError();
    const dateOfBirth=dob.value;
    const luckyNumber=luckyNo.value;
    if(dateOfBirth&&luckyNumber)
    {

    }
    else{
        showError("Enter valid Values !!");
    }
    function hideError()
{
  errorMessage.style.display="none";
}
function showError()
{
  errorMessage.style.display="block";

    */




checkButton.addEventListener("click",OnClickHandler);