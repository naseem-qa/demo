
'use strict';
var msg = prompt('What is your name?');
alert('hello' + ' ' + msg);
console.log('hello' , msg);

var nam = prompt('Do you know who is Naseem?');
name = nam.toLowerCase();

if (nam == 'yes') {
  alert('welecom1!');
}
else if (nam == 'no') {
  alert('try to know some thing about Naseem !');
}
else {
  alert('try to know some thing about Naseem !');
}

var city = prompt('Do you know where Naseem live?');
city = city.toLocaleLowerCase();
if (city == 'yes') {
    alert('great');
}
else if (city == 'no ') {
    alert('that not good !');
}
else {
    alert('that not good !');
}

var spec = prompt('Do you know my specilaization ?');
spec = spec.toLocaleLowerCase();
if (spec == 'yes') {
    alert('I am happy to hear that.');
}
else if (spec == 'no') {
    alert('that is not problem!');
}
else {
    alert('that is not problem!');
}


var job = prompt('Do you know naseem current job ?');
job = job.toLocaleLowerCase();
if (job == 'yes') {
    alert('you are close!');
}
else if (job == 'no') {
    alert('don\'t worry!. come on');
}
else {
    alert('don\'t worry! come on');
}

var phobia = prompt('Do you know any things about Naseem phobia ?');
phobia = phobia.toLocaleLowerCase();
if (phobia == 'yes') {
    alert('she has aphobia from reptile and insect!');
}
else if (phobia == 'no') {
    alert('This is good for you!');
}
else {
    alert('This is good for you! ');
}


alert('Thank you for searching about me' + msg);