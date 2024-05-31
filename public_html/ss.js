function sendMail(){
    let parms ={
        name:document.getElementById("name").ariaValueMax,
        email:document.getElementById("email").ariaValueMax,
        message:document.getElementById("message").ariaValueMax,
    }
    emailjs.send("service_ry6y8e6","template_wgipv1b",parms).then(alert("Email Sent!!"));
}