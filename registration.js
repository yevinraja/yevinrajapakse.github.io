var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var cemailError = document.getElementById("cemail-error");
var genderError = document.getElementById("gender-error");

function validatename(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)){
        nameError.innerHTML = "Write your full name";
    return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateemail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[a-zA-z\._\-[0-9]*@[a-zA-Z]*[\.][a-zA-Z]{2,4}$/)){
        emailError.innerHTML = "Enter a valid email";
    return false;
    }
     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatecemail(){
    var cemail = document.getElementById("contact-cemail").value;

    if(cemail.length == 0){
        cemailError.innerHTML = "Email is required";
        return false;
        
    }

    //if(cemail !== email){
       // var email = document.getElementById("contact-email").value;
       // cemailError.innerHTML = "Email does not match";
      //  return false;
    // }

    if(!cemail.match(/^[a-zA-z\._\-[0-9]*@[a-zA-Z]*[\.][a-zA-Z]{2,4}$/)){
        cemailError.innerHTML = "confirm your email";
    return false;

    }
     cemailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}






  function saveTolocalstorage(){

    const fname = document.getElementById("contact-name").value;
    localStorage.setItem("contact-name" , fname);

    const phone = document.getElementById("contact-phone").value;
    localStorage.setItem("contact-phone" , phone);

    const emailId = document.getElementById("contact-email").value;
    localStorage.setItem("contact-email" , emailId);

    const confirmEmail = document.getElementById("contactcemail").value;
    localStorage.setItem("contactcemail" , confirmEmail);

    const gender = document.getElementById("contact-gender").value;
    localStorage.setItem("contact-gender" , gender);

  }



  function storeInputsToSession() {
    
    var fullName = document.getElementById('contactname').value;
    var phoneNo = document.getElementById('contactphone').value;
    var emailId = document.getElementById('contactemail').value;
    var confirmEmail = document.getElementById('contactcemail').value;
    var gender = document.getElementById('format').value;

    // Store the values in session storage
    sessionStorage.setItem('fullName', fullName);
    sessionStorage.setItem('phoneNo', phoneNo);
    sessionStorage.setItem('emailId', emailId);
    sessionStorage.setItem('confirmEmail', confirmEmail);
    sessionStorage.setItem('gender', gender);
  }

//////////////////////////////////////////////////
  
  const continueBtn = document.getElementById('continueBtn');
  continueBtn.addEventListener('click', storeInputsToSession);


  // get from local/session storage
const storedtime = sessionStorage.getItem('time');
var timecell = document.getElementById('timecell');
timecell.innerHTML = storedtime;

const storeddate = localStorage.getItem('selectedDate');
var datecell = document.getElementById('datecell');
datecell.innerHTML = storeddate;

const storedtotal = sessionStorage.getItem('total');
var totalcell = document.getElementById('totalpcell');
totalpcell.innerHTML = storedtotal;

const storedduration = sessionStorage.getItem('duration');
var durationcell = document.getElementById('durationcell');
durationcell.innerHTML = storedduration;

const slAdult = localStorage.getItem('SL Adult');
document.getElementById('sladultcell').innerHTML = slAdult;

const slChild = localStorage.getItem('SL Child');
document.getElementById('slchildcell').innerHTML = slChild;

const  foreigneradult= localStorage.getItem('Foreigner Adult');
document.getElementById('foreigneracell').innerHTML = foreigneradult;

const  foreignerchild= localStorage.getItem('Foreigner Child');
document.getElementById('foreignerccell').innerHTML = foreignerchild;


