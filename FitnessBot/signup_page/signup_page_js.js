function validateForm() {
    var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var newsletter = document.getElementById('newsletter').value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name === '') {
          alert('Please enter your name.');
          return false;
      }
      
      if (email === '') {
          alert('Please enter your email address.');
          return false;
      } else if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return false;
      }
      
      if (newsletter === '') {
          alert('Please enter your newsletter message.');
          return false;
      }
      

    var message = "Dear " + name + ", you have successfully subscribed for a personalized newsletter";
    alert(message);
    
    return true;
  }