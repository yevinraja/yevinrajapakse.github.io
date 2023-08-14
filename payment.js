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

const  infant= localStorage.getItem('Infant');
document.getElementById('infantcell').innerHTML = infant;



///////////////////////////////////////////////////////////

var carderror = document.getElementById("card-error");
var nameoncarderror = document.getElementById("nameoncard-error");
var montherror = document.getElementById("month-error");
var yearerror = document.getElementById("year-error");
var cvverror= document.getElementById("cvv-error");

function validatecard(){
    var card = document.getElementById("card-error").value;

    if(card.length == 0){
        carderror.innerHTML = "Incomplete field";
        return false;
    }
   // if(!card.match(/^[0-9]{8}$/)){
     //   carderror.innerHTML = "Enter a valid card number";
    //return false;
    //}

  //carderror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    //return true;
}

function validatenameoncard(){
    var nameonecard = document.getElementById("nameoncardname").value;

    if(nameonecard.length == 0){
        nameoncarderror.innerHTML = "name is required";
        return false;
    }
    if(!nameonecard.match(/^[a-zA-Z\s]*$/)){
        nameoncarderror.innerHTML = "Enter a valid name";
    return false;
    }

    nameoncarderror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}




 
 