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

const fname= localStorage.getItem('contact-name');
document.getElementById('Namecell').innerHTML = fname;

const phone= localStorage.getItem('contact-phone');
document.getElementById('phonecell').innerHTML = phone;

const email= localStorage.getItem('contact-email');
document.getElementById('emailcell').innerHTML = email;


//////////////////////////////////////////////////