const dob=document.querySelector("#dob");
const luckyNo=document.querySelector("#lucky-no");
const errorMessage=document.querySelector("#error-message");
const checkButton=document.querySelector(".check-button");

function OnClickHandler(){
    hideError();
    const dateOfBirth=dob.value;
    const luckyNumber=luckyNo.value;
    if(dateOfBirth&&luckyNumber)
    { 
       calculateLuckyNumber();

    }
    else{
        
        showError("Enter valid Value !!");
 }
}
function calculateLuckyNumber(){

  const Bdate=dob.value.replaceAll("-","");
  const LuckyNo=luckyNo.value;
  console.log(typeof Bdate);
  const Sum=0;
  /*
  for(let i=0;i<Bdate.length;i++){
    
       Sum=Sum+(Bdate.CharAt(i));
  }
console.log(Sum);
*/
}
function hideError()
{
  errorMessage.style.display="none";
}

function showError(ErrorMessageDisplay)
{
  
  errorMessage.style.display="block";
  errorMessage.innerText=ErrorMessageDisplay;


}

checkButton.addEventListener("click",OnClickHandler);
    



