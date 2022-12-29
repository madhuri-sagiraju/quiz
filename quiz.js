
let questions = [
  {
      id: 1,
      question: "Who is making the Web Standards?",
      answer:"The World Wide Web Consortium",
      options: [
          "Mozilla",
          "Microsoft",
          "Apple",
          "The World Wide Web Consortium"
      ]   
  },
  {
      id: 2,
      question: "Which section of the Web page will contain Meta tags?",
      answer: "Heading section",
      options: [
        "Body section",
        "Heading section",
        " (a) or (b)",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "How can you create an email link?",
      answer: "A href=mailto:xxx@yyy",
      options: [
        "A href=mailto:xxx@yyy",
        "A href=xxx@yyy",
        "Mail>xxx@yyy",
        "Mail href=xxx@yyy"
      ]
    },
    {
      id: 4,
      question: "Which of the following is an attribute of frames",
      answer: "no resize",
      options: [
        "no resize",
        "legend",
        "select",
        "option"
      ]
    },
    {
      id: 5,
      question: "What is cell padding?",
      answer: "space between cell border and cell text" ,
      options: [
        "space between cells",
        "space between cell and the border",
        "space between cell border and cell text",
        "None of these"
      ]
    },
    {
      id: 6,
      question: "Which attribute can be used to change its number within an ordered list?",
      answer: "value",
      options: [
        "num",
        "skip",
        "change",
        "value"
      ]
    },
    {
      id: 7,
      question: "To publish your site online you need",
      answer: "a domain name and hosting service",
      options: [
        "a client",
        "a domain name and hosting service",
        "an account through work or school",
        "none of these"
      ]
    },
    {
      id: 8,
      question: "What is the name of the location address of the hypertext documents?",
      answer: "Uniform Resource Locator",
      options: [
        "Uniform Resource Locator",
        "Web server",
        " File",
        "Web address"
      ]
    },
    {
      id: 9,
      question: "How many colour names are used by the browsers?",
      answer: "16",
      options: [
        "8",
        "10",
        "12",
        "16"
      ]
    },
    {
      id: 10,
      question: "Who is the father of html",
      answer: "Tim Berners-Lee",
      options: [
        "Jimmy Wales",
        "Brendan Eich",
        "Tim Berners-Lee",
        "None of these"
          
        ]
      },
];

let question_count = 0;
let points = 0;
sessionStorage.setItem("points",points);
var timeLeft = 120;
var elem = document.getElementById('Timer');

var minute = 10;
var sec = 0;

var timerId = setInterval(counterFunction, 1000);

function counterFunction(){
        elem.innerHTML = minute + " min : " + sec + " sec ";
        sec--;
        if(sec < 0){
          sec = 60;
          minute--;
            
        }
        if(sec == 0 && minute == 0){
           clearTimeout(timerId);
		location.href = "final.html";
        }
    }
window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}