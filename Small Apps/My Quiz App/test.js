//ES 5
//Question Constructor

// function Question(text,choices,answer){
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }

// //Question Prototype

// Question.prototype.chechAnswer = function(answer){
//     return this.answer === answer;
// }

// **** ES6 Usage to create Question Constructor and its prototype function

class Question{
    constructor(text,choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    chechAnswer(answer){
        return this.answer === answer; 
    }
}

//ES 5
//  // Quiz Constructor        

//  function Quiz(questions){
//     this.questions = questions;
//     this.score = 0;
//     this.questionIndex = 0;
// }

// //Quiz Prototypes

// //Quiz get questions
// Quiz.prototype.getQuestion = function(questions){
//     return this.questions[this.questionIndex];
// }

// //Quiz is Finish
// Quiz.prototype.isFinish = function(){
//     return this.questions.length === this.questionIndex;
// }

// //Quiz guess answer
// Quiz.prototype.guess = function(answer){
//     var question = this.getQuestion();

//     if (question.chechAnswer(answer)) {
//         this.score++;
//     }
//     this.questionIndex++;
// }


// **** ES6 Usage to create Quiz Constructor and its prototype function

class Quiz{
    constructor(questions){
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }
    getQuestion(questions){
        return this.questions[this.questionIndex]; 
    }
    isFinish(){
        return this.questions.length === this.questionIndex;
    }
    guess(answer){
        var question = this.getQuestion();

        if (question.chechAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
}


// Create instances ( *** Real Questions *** ) according to Question constructor
var q1 = new Question('“Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?', ['Reşat Nuri Güntekin','Halide Edip Adıvar','Ziya Gökalp','Ömer Seyfettin'], 'Halide Edip Adıvar'); 
var q2 = new Question('Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir?', ['Hititler','Elamlar','Sumerler','Urartular'], 'Sumerler'); 
var q3 = new Question('Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir?', ['Endonezya','Srilanka','Tayland','Hindistan'], 'Endonezya');
var q4 = new Question('Hangi Ülkenin İki Tane Başkenti Vardır?', ['Güney Afrika','Srilanka','Senegal','SriLanka'], 'Güney Afrika');
var q5 = new Question('Aspirinin Hammaddesi Nedir?', ['Söğüt','Koknar','Kavak','Mese'], 'Söğüt');

//console.log(q1.chechAnswer('C#'));

var questions = [q1,q2,q3,q4,q5];

//Start Quiz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{

        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector('#question').textContent = question.text;
        for (let i = 0; i < choices.length; i++) {
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
            
            guess('btn'+i, choices[i]);
        }
        showProgress();
    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore(){
    var html = `<h2>Score ${quiz.score}</h2> <button id="btn_new" class="btn btn-primary" onclick="location.reload();">Yeniden Dene</button> `;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex + 1;
    document.querySelector('#progress').innerHTML = 'Question ' + questionNumber + ' of ' + totalQuestion;
}






