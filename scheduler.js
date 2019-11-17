

var dailyhours = ["9 AM", "10 AM", "11 AM", "12 PM", "1PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var hourEL = document.querySelectorAll(".hour");
var rowEl = document.querySelector(".row");
var eventEl = document.querySelectorAll("textarea")
var colHour = document.querySelector(".col")
var eventEl1 = document.querySelector("textarea").value

var dateEl = document.querySelector("#currentDay");
var date = new Date();
date = moment().format('LL');
var date1 = moment().format("h A")
console.log(date1)

console.log(moment())


//Function to get the current date
function getTodayDate() {
    dateEl.textContent = date;


}
getTodayDate();

var i = 0;

function outputHours() {
    for (var j = 0; j < hourEL.length; j++) {
        if (i < dailyhours.length) {
            var test = hourEL[j].textContent = dailyhours[i];
            //var fiedlVal= eventEl[i].value
            //fiedlVal = 9;
            //console.log(fiedlVal)
            i++
        }
        if (dailyhours[i] > date1) {

            eventEl[i].setAttribute("class", "future")
            console.log(dailyhours[i])
            alert("Future")

        } else if (dailyhours[i] === date1) {
            eventEl[i].setAttribute("class", "present")
            alert("Current")

        }
        //saveEvent(event)
    }
}
outputHours()

//var i=0;
var btnEL = document.querySelectorAll(".saveBtn");

//var eventEl = document.querySelectorAll("textarea").values;
//var eventEl1 = document.querySelector("textarea");
//var textareaVal =eventEl[i];
//function saveEvent(event){
var eventEl = document.querySelectorAll("textarea");
console.log(eventVal)
var e = 0;
var eventVal = "";
var eventKey="";
function saveEvent() {
    if (e < eventEl.length) {
        eventVal = eventEl[e].value;
        eventKey= dailyhours[e];
        
        if (eventVal === "") {
            //errMsg.setAttribute("style", "color: red")
            //errMsg.textContent = "Text area cannot be empty when save button is clicked"
            return
        } else {
            //textareaVal.textContent = "";
            localStorage.getItem(eventVal)
            localStorage.setItem(eventKey, eventVal)
            renderLastItem()

            console.log(eventVal)
        }
        //renderLastItem()
        e++;
        //renderLastItem()
    }
    //renderLastItem()
}
var eventHolder="";
/**function to show the last page  */
function renderLastItem() {
    var lastEvent = localStorage.getItem(eventKey);
    var eventHolder =+ lastEvent;
    if (lastEvent=== "") {
        return
    }else{
        eventEl[e].value=lastEvent;
    }
}
//renderLastItem()


/**This function will refresh the page and send user back to begining page when go back button is clicked */
function init() {
    if(location.reload()===true)
    //location.reload();
    renderLastItem()

}




//event.addEventListener("click",saveEvent)
//});
//var eventEl = document.querySelectorAll("textarea");
console.log(eventEl)


// var textareaVal =eventEl[i].value;
// document.addEventListener("click", function (event) {
//     event.preventDefault();
//     event.target
//     var eventEL = document.querySelector("textarea").value;
//     if (textareaVal === "") {
//         //errMsg.setAttribute("style", "color: red")
//         //errMsg.textContent = "Text area cannot be empty when save button is clicked"
//         return
//     } else {
//         textareaVal.textContent = "";
//         localStorage.getItem(textareaVal)
//         localStorage.setItem("Event", textareaVal)
//          //renderLastItem()

//     }
// })
//  /**Function to display users final score */
//  function displayResult() {
//     finishDiv.style.visibility = "visible";
//     timeElement.textContent = "Time:" + " " + timer;
//     var HighScores = timer;
//     localStorage.getItem(HighScores)
//     finalScore.textContent = "Your finally score is: " + HighScores;
//      localStorage.setItem("HighScores", HighScores)

// }

btnEL.forEach(function (event) {
    event.addEventListener("click", saveEvent)
});



