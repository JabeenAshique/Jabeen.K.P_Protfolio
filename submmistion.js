const send = document.getElementById('send');
btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log("hi");
    const firstname= document.getElementById("firstname").value;
const email= document.getElementById("email").value;
const msg = document.getElementById("msg").value;
var body= 'FirstName: '+ firstname + '<br/> Email: '+ email +'<br/> Message + '
Email.send({
        Host : "smtp.gmail.com",
        Username : "jbjaby@gmail.com",
        Password : "gnpk cepo uoxp nopb",
        To : 'jbjaby@gmail.com',
        From : email,
        Subject : msg,
        Body : body
    }).then(
      message => alert(message)
    );
})