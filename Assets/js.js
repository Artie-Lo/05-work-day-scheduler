$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

$(document).ready(function () {// loading html & css
    //display day & time using moment.js.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".clickBtn").on("click", function () {
       
        console.log(this);
        let text = $(this).siblings(".description").val(); 
         time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function scheduledTime() {
        
        var currentTime = moment().hour(); // use of moment.js

        $(".time").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourBlock, currentTime)

            //past, present, or future schedule item
            if (hourBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourBlock === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    scheduledTime(); //re-run function 
})