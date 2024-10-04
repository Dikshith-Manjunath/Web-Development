console.log("This is a date and time tutorial");
let dt = new Date();
console.log(dt);

//   let newdate = new Date("2029-03-15")
//   console.log(newdate)
//   console.log("This is the approximate date of release of GTA - VI");

// Syntax - let name = new Date(year,month, date,hours, minutes, seconds,milliseconds); 
// let newdate = new Date("2025-03-15")

let newdate = new Date(2025,3,29,12,30,0,0)
console.log(newdate)

let yr = newdate.getFullYear();
console.log("This year is: ", yr);

let mn = newdate.getMonth();
console.log("The month is : ",mn);

 let dat = newdate.getDate();
 console.log("The date is : ",dat);
 


 console.log(Date.now()); //This tells the number of milliseconds that have passed since 1970 or when the time was defined
 
//   The same can be done for hours , minutes , seconds and milliseconds as well

newdate.setDate(8);
newdate.setMinutes(30);
console.log(newdate)
setInterval(updateTime,1000);
function updateTime() {
    Time.innerHTML = new Date();
}
