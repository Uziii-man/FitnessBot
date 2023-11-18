// Javascript code for registration page created by Uzman Arfan

function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  const genderSelect = document.getElementById("gender");
  var occupation = document.getElementById("occupation").value;
  var email = document.getElementById("email").value;
  const physical_activity = document.getElementById("physical_activity");
  const sleep_duration = document.getElementById("sleep_duration");
  const fitness_goal = document.getElementById("fitness_goal");
  

  var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var agePattern = /^\d+$/;
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  var isValid = true;

  // for the name
  if (!name.match(namePattern) || name.length < 5) {
    document.getElementById("name-error").innerHTML = "Invalid Name";
    document.getElementById("name-error").style.color = "RED"
    isValid = false;
  } else {
    document.getElementById("name-error").innerHTML = "Valid";
    document.getElementById("name-error").style.color = "GREEN"
  }
  
  // for age
  // age limit is applied
  if (!age.match(agePattern) || age < 14 || age > 80) {
      document.getElementById("age-error").innerHTML = "Invalid Age";
      document.getElementById("age-error").style.color = "RED"
      isValid = false;
  } else {
  document.getElementById("age-error").innerHTML = "Valid";
  document.getElementById("age-error").style.color = "GREEN"
  }

  // for the gender
  const genderValue = genderSelect.value;
  if (genderValue === "") {
      document.getElementById("gender-error").innerHTML = "Select a Gender";
      document.getElementById("gender-error").style.color = "RED"
      isValid = false;
  }else {
  document.getElementById("gender-error").innerHTML = "Selected";
  document.getElementById("gender-error").style.color = "GREEN"
  }


  // for occupation
  if (!occupation.match(namePattern) || occupation.length < 8) {
      document.getElementById("occupation-error").innerHTML = "Invalid Occupation";
      document.getElementById("occupation-error").style.color = "RED"
      isValid = false;
  } else {
  document.getElementById("occupation-error").innerHTML = "Valid";
  document.getElementById("occupation-error").style.color = "GREEN"
  }

  // for the email
  if (!email.match(emailPattern)) {
    document.getElementById("email-error").innerHTML = "Invalid Email";
    document.getElementById("email-error").style.color = "RED"
    isValid = false;
  } else {
    document.getElementById("email-error").innerHTML = "Valid";
    document.getElementById("email-error").style.color = "GREEN"
  }

  // for the physical activity
  const physical_activityValue = physical_activity.value;
  if (physical_activityValue === "") {
      document.getElementById("physical-activity-error").innerHTML = "Select your daily physical activity";
      document.getElementById("physical-activity-error").style.color = "RED"
      isValid = false;
  }else {
  document.getElementById("physical-activity-error").innerHTML = "Selected";
  document.getElementById("physical-activity-error").style.color = "GREEN"
  }

  // sleep duration
  const sleep_durationValue = sleep_duration.value;
  if (sleep_durationValue === "") {
      document.getElementById("sleep-error").innerHTML = "Select how many hours you sleep daily";
      document.getElementById("sleep-error").style.color = "RED"

      isValid = false;
  }else {
  document.getElementById("sleep-error").innerHTML = "Selected";
  document.getElementById("sleep-error").style.color = "GREEN"

  }

  // fitness goal
  const fitness_goalValue = fitness_goal.value;
  if (genderValue === "") {
      document.getElementById("fitness-error").innerHTML = "Select your fitness goal";
      document.getElementById("fitness-error").style.color = "RED"

      isValid = false;
  }else {
  document.getElementById("fitness-error").innerHTML = "Selected";
  document.getElementById("fitness-error").style.color = "GREEN"

  }
  
  // alert box
  if (isValid) {
    alert("Dear " + name + ", Thank you for using Fitness BOT, The result will shown in a while.");
    return true;
  } else {
    return false;
  }
}
