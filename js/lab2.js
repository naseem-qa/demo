
'use strict';
var score =0;
var msg = prompt('What is your name?');
alert('hello' + ' ' + msg);
console.log('hello', msg);

var questions = [

    ['Do you know who is Naseem?', 'welecom1!', 'try to know some thing about Naseem !'],
    ['Do you know where Naseem live?', 'great', 'that not good !'],
    ['Do you know my specilaization ?', 'I am happy to hear that.', 'that is not problem!'],
    ['Do you know naseem current job ?', 'you are close!', 'don\'t worry!. come on'],
    ['Do you know any things about Naseem phobia ?', 'she has aphobia from reptile and insect!', 'This is good for you!'],

]

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    var currentPrompt = currentQuestion[0]
    var userResponse = prompt(currentPrompt)
    userResponse = userResponse.toLowerCase();
    var currentPositiveReply = currentQuestion[1];
    var currentNegativeReply = currentQuestion[2];
    switch (userResponse) {
        case 'yes':
            alert(currentPositiveReply);
            score++;
            break;
        case 'no':
            alert(currentNegativeReply);
            break;
        default:
            alert(currentNegativeReply);

    }
}


for (var j = 1; j < 5; j++) {
    var ansewr = prompt('Gusse Naseem univeristy grade?! ');
    if (ansewr > 80) {
        alert(' your ansewr is too high ');
    } else if (ansewr < 80) {
        alert(' your ansewr is too low');
    } else if (ansewr == 80) {9
        alert('that is it');
        score++;
        j = 5;
    }
 }

var favoritedishes = [ 'see food', 'mansaf ', 'fettuccin','burger','tabola','green salad'];

for ( var k=0 ; k<6 ; k++ ) {
    var favoritefood = prompt ('can you gusse some of my faverite dishes?');
    favoritefood = favoritefood.toLocaleLowerCase()

for ( var j=0 ; j<6 ; j++){
    if (  favoritefood === favoritedishes [k]){
        alert (' yes this is one of my favorite dishes!');
        score++ ;
    } 
} 
}


alert( ' your score ='+ ' '+ score );
alert('Thank you for searching about me' +' '+ msg);

