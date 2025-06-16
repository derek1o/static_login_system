document.getElementById("user").addEventListener("submit", function(event){
    event.preventDefault();
console.log("testing")
let password1 = document.getElementById("password1").value.trim();
 let password = document.getElementById("password").value.trim();
 let lastname = document.getElementById("lastname").value.trim();
 let firstname = document.getElementById("firstname").value.trim();
 let email = document.getElementById("email").value.trim();
 let username = document.getElementById("username").value.trim();

 
 if(password === password1)
    //docment.getElementById("i").innerHTML = `Registration was Sucessful!`//
  window.location.href = "login.html"
    else{
    document.getElementById("ok").innerHTML = "Password does not match"

  
}  
});                                                                                                                                  