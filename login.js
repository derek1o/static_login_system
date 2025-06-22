document.getElementById("loginform").addEventListener("submit", function(event){
    event.preventDefault();
    let password1 = "derek"
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    if(password === password1)
       // document.getElementById("user").innerHTML = "Login was Sucessful!"//#
    window.location = "https://quiz-nine-peach.vercel.app/"
        else{
        document.getElementById("user").innerHTML = "Password Incorrect"
    
      
    }  
    });  