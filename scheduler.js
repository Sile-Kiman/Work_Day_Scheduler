var dailyhours = ["9 AM", "10 AM", "11 AM", "12 AM", "1PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var hourEL = document.querySelectorAll(".hour");
var rowEl = document.querySelector(".row");
var eventEl = document.querySelectorAll("textarea")
var colHour = document.querySelector(".col")

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
 
            i++
         }
        if (dailyhours[i] > date1) {
            
            eventEl[i].setAttribute("class", "future")
            console.log(dailyhours[i])
            //alert("Future")
    
        } else if (dailyhours[i] === date1) {
            eventEl[i].setAttribute("class", "present")
            //alert("Current")
        
        }
 
    }
}
outputHours()
 
 

