const firstname= document.getElementById("firstname");
const email= document.getElementById("email");
const msg = document.getElementById("msg");
const form = document.getElementById("gform");
const name_error= document.getElementById("name_error");
const email_error= document.getElementById("email_error");
const msg_error= document.getElementById("msg_error");


form.addEventListener('submit', (e) =>{
    
    if(firstname.value === ''|| firstname.value == null){
       e.preventDefault();
       name_error.innerHTML="Name is required";
    }
    if(email.value === ''|| email.value == null){
        e.preventDefault();
        email_error.innerHTML="Valid email is required";
     }
     if(msg.value === ''|| msg.value == null){
        e.preventDefault();
        msg_error.innerHTML="You Message is required";
     }
})
