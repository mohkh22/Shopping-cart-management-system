let listpro = document.getElementById("listpro");
let checkout = document.getElementById("checkout");
let inter = document.getElementById("inter");
let time = document.getElementById("time");

let t = 10800; 
setInterval(() => {
    time.innerHTML = `${parseInt(t / 3600)} : ${parseInt((t % 3600)/60)}: ${t%60}`; 
    t --;
}, 1000);


if(localStorage.getItem("cart") != null && localStorage.getItem("cart") != "[]"){
    let cart = JSON.parse(localStorage.getItem("cart"));
     for (let i = 0; i < cart.length; i++) {
        listpro.innerHTML += `<li>
               <h4>${cart[i]}</h4>
               <button onclick="remove(${i})" >x</button> 
        </li>`;
     }
     checkout.style.display = "block";
}
else {
    document.getElementById("empty").style.display = "block";
}


function add(btn){
    let cart = [];

    if(localStorage.getItem("cart") != null){
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    if(cart.length == 3){
          alert("You can't buy more than 3 products");
          return;
    }

   try{
     let text = btn.parentNode.children[1].innerText ;
    cart.push(text);
    localStorage.setItem("cart",JSON.stringify(cart));
    checkout.style.display = "block";
    location.reload();
   }catch(error){
       alert(error.message);
   }

    
}



function remove(i){
    let question = confirm("Are you sure you want to delete this product?");
    if(!question){
        return;
    }
   let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(i,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    location.reload();
}

function btncheckout(){
    console.log("checkout");
    let cart = JSON.parse(localStorage.getItem("cart"));
     try{
        for (let i = 0; i < cart.length; i++) {
            if(cart.length > 0){
             setTimeout(() => {
                cart.shift();
                localStorage.setItem("cart",JSON.stringify(cart));
               checkout.style.display = "none";
               location.reload();
               alert("Thanks for your purchase");
          }, 5000);
        }
          
    }
    alert("Your request is being processed");
}
      catch(error){
         alert(error.message);
     }
     
       
    }
    
 
