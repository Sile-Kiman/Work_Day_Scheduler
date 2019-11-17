

var dailyhours = ["9 AM", "10 AM", "11 AM", "12 PM", "1PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var hourEL = document.querySelectorAll(".hour");
var rowEl = document.querySelector(".row");
var eventEl = document.querySelectorAll("textarea");
var colHour = document.querySelector(".col");
var eventEl1 = document.querySelector("textarea").value
var dateEl = document.querySelector("#currentDay");
var btnEL = document.querySelectorAll(".saveBtn");

//Setup date to display on the page
var date = new Date();
date = moment().format('LL');

//Setup time for daily event
var currentTime = moment().format("h A")
//console.log(currentTime)
//console.log(moment())


//Function to get the current date
function getTodayDate() {
    dateEl.textContent = date;
}
getTodayDate();

//Set an index to loop through the hours array
var i = 0;

//Function to display the hours and set difference color attribute to the textare dynamically 
function outputHours() {
    for (var j = 0; j< hourEL.length; j++) {
        if (i < dailyhours.length) {
            hourEL[j].textContent = dailyhours[i];
          
            i++
        }
        if (dailyhours[i]>currentTime) {

            eventEl[i].setAttribute("class", "future")
            console.log(dailyhours[i])
            //alert("Future")

        } else if (dailyhours[i]===currentTime) {
            eventEl[i].setAttribute("class", "present")
            //alert("Current")
        }
        //renderLastItem()
    }
}
//Call outputHours function
outputHours()


//var eventEl = document.querySelectorAll("textarea");
//console.log(eventVal)


//Set some more variables to use in the SaveEvent funtions
var e = 0;
var eventVal = "";
var eventKey="";

//Function to save each even to the local storage. 
function saveEvent() {
    if (e < eventEl.length) {
        eventVal = eventEl[e].value;
        eventKey= dailyhours[e];
        renderLastItem()
        if (eventVal==="") {
             return

        }else{
             
             localStorage.getItem(eventVal)
             localStorage.setItem(eventKey, eventVal)
             //renderLastItem()
             //console.log(eventVal)
            }
        //renderLastItem()
        e++;
        renderLastItem()
    }
    //renderLastItem()
}
 

/**function to render the last saved entry in the local storage into the textarea */
function renderLastItem() {
    var lastEvent = localStorage.getItem(eventKey);
    var textAreaVal= eventEl[e].value;
    console.log(lastEvent)
    var eventHolder =+ lastEvent;
    if (lastEvent=== "") {

        return

   }else{
         
        textAreaVal=lastEvent;
        //dateEl.textContent=lastEvent
        //console.log(textAreaVal)
    }
   
}

renderLastItem()
/**This function will refresh the page and  repopulate the events after refresh**/
function init(){
    location.reload()
   // renderLastItem()

}
//call init function
//init()

var btnEL = document.querySelectorAll(".saveBtn");
//Add an EventListner to save the events into local storage on click
btnEL.forEach(function (event) {
    event.addEventListener("click", saveEvent)
    
});



