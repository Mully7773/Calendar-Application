//Current Date
var today = moment();

$("#1a").text(moment().format('dddd MMMM Do YYYY'));


// Variables
var saveBtn = $('.saveBtn');
var blocks = $('.schedule');


var block9 = $('#9');
var block10 = $('#10');
var block11 = $('#11');
var block12 = $('#12');
var block1 = $('#1');
var block2 = $('#2');
var block3 = $('#3');
var block4 = $('#4');
var block5 = $('#5');





saveBtn.on("click", function() {
    // var textArea = $(this).siblings(".schedule")[0]
    // var text = textArea.val();
    var hour = $(this).siblings(".hour").text();
    var schedule = $(this).siblings(".schedule").val();
    

    localStorage.setItem(hour, schedule)
    });







    function timeBlock() {

        blocks.each(function() { //loops through each textbox
            var currentHour = parseInt(moment().format('H')) //Gives current hour
            // console.log(currentHour)
            var blockHour = parseInt($(this).attr('id'))
            console.log("blockhour", blockHour)
            console.log("currentHour", currentHour)
            if (currentHour < blockHour) {
                $(this).addClass("future");
            } else if (currentHour === blockHour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    };



    timeBlock();

