var dailyhours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var hourEL = document.querySelectorAll(".hour");
var rowEl = document.querySelector(".row");
var eventEl = document.querySelectorAll("textarea");
var colHour = document.querySelector(".col");
var dateEl = document.querySelector("#currentDay");
var btnEL = document.querySelectorAll(".saveBtn");

//Setup date to display on the page
var date = new Date();
date = moment().format('LL');

//Setup time for daily event
var currentTime = moment().format("h A")
 
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
            
        } else if (dailyhours[i] === currentTime) {
            eventEl[i].setAttribute("class", "present")
             
        }
    
    }
    
}
//Call outputHours function
outputHours()
 
//Set some more variables to use in the SaveEvent funtions

var eventVal = "";
var eventKey="";
var e = 0;
//Function to save each even to the local storage. 
function saveEvent() {
     
    if (e< eventEl.length) {
        eventVal = eventEl[e].value;
        eventKey= dailyhours[e];
       
        if (eventVal !=="") {
            localStorage.getItem(eventVal);
            localStorage.setItem(eventKey, eventVal);
            e++;

        }         
    }  
}

/**function to render the last saved entry in the local storage into the textarea */

function renderLastItem() {
   
    lastEvent = localStorage.getItem("9 AM");
    eventEl[0].value=lastEvent
    lastEvent = localStorage.getItem("10 AM");
    eventEl[1].value =lastEvent;
    lastEvent = localStorage.getItem("11 AM");
    eventEl[2].value =lastEvent;
    lastEvent = localStorage.getItem("12 PM");
    eventEl[3].value =lastEvent;
    lastEvent = localStorage.getItem("1 PM");
    eventEl[4].value =lastEvent;
    lastEvent = localStorage.getItem("2 PM");
    eventEl[5].value =lastEvent; 
    lastEvent = localStorage.getItem("3 PM");
    eventEl[6].value =lastEvent;
    lastEvent = localStorage.getItem("4 PM");
    eventEl[7].value =lastEvent;
    lastEvent = localStorage.getItem("5 PM");
    eventEl[8].value =lastEvent;

    } 
//call function to render item on the page after refresh
renderLastItem();

var btnEL = document.querySelectorAll(".saveBtn");
// Add an EventListner to save the events into local storage on click
btnEL.forEach(function (event) {
    event.addEventListener("click", saveEvent)
     
});



