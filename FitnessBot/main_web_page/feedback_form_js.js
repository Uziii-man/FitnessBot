// validation form 
function validateForm() {
  let x = document.forms["form"]["name"].value;
  let y = document.forms["form"]["mail"].value;
  let z = document.forms["form"]["comment"].value;
  var selectedrating = document.getElementById("formrating");       

  if (x == "" || y == "" || selectedrating.value == "") {
      alert("Please fill in all the required fields.");
  return false;
  }

  if (!y.endsWith("@gmail.com")) {
      alert("Please enter a valid email address.");
  return false;
  }

  printprompt(x, selectedrating, z);
}

function printprompt(name,rating,comment){
    document.getElementById('qb').style.display = "block";
    printtis = "Dear "+name+", Thank you very much for your feedback. You have rated our site as "+rating.value+", and your comment was "+comment+"."
    document.getElementById('closeX').style.display = "block";
    document.getElementById("print").innerHTML =
    printtis;
}
        
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2000 
    )
});
        
document.querySelector("#close").addEventListener("click", function(){
    document.getElementById('qb').style.display = "none";
    document.querySelector(".popup").style.display = "none";
});   
