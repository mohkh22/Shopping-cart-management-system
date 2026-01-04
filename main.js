let user =document.getElementById("username");
let pass =document.getElementById("pass");
let login =document.getElementById("login");


let username ="Mohamed";
let password = "123456";

login.addEventListener("click",function(){
    if(user.value == username && pass.value == password){
        document.getElementById("loading").style.display = "block";
       setTimeout(() => {      
         document.location.href = "cart.html";
        alert("welcome " + user.value);
        document.getElementById("loading").style.display = "none";
       }, 3000);
    }else{
         document.getElementById("loading").style.display = "block";
       setTimeout(() => {     
        alert("wrong username or password");
                document.getElementById("loading").style.display = "none";
       },3000);
    }
}) ; 

