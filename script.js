//Current Date
var today = moment();

$("#1a").text(moment().format('dddd MMMM Do YYYY'));


// Variables
var saveBtn = $('.saveBtn');
var items = $('.schedule');




// Save value in text input
function store(){
    var formInputEl = $('.schedule').val;
    
    var userInput = {
        formInputEl: formInputEl,
    }
    window.localStorage.setItem(formInputEl, JSON.stringify(formInputEl));
    }

saveBtn.on("click", function(event){
        event.preventDefault();
        store();
    })





    function timeBlock() {
        var blockHour = moment().hours(); //logs the current hour military time
        //How do I get the block hour?
        
    
        $(".schedule").each(function() { //loops through each textbox
            var currentHour = parseInt(moment().format('H')) //Gives current hour
            // console.log(currentHour)
            if (currentHour > blockHour) {
                $(".schedule").addClass("future");
            } else if (currentHour === blockHour) {
                $(".schedule").addClass("present");
            } else {
                $(".schedule").addClass("past");
            }
        })
    };



    timeBlock();

