//Current Date
var today = moment();
$("#1a").text(today.format('MMMM Do YYYY'));

var formEl = $('#formInput');

var saveBtn = $('.saveBtn');


saveBtn.on('click', function() {

})

//Save value in text input
// function store(){
//     var formInputEl = $('#formInput').val;

//     var userInput = {
//         formInputEl: formInputEl,
//     }
//     window.localStorage.setItem(formInputEl, JSON.stringify(userInput));
//     }

// formEl.on("submit", function(event){
//         event.preventDefault();
//         store();
//     })

