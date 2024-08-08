// console.log("This is a tutorial on intervals and Timeouts")
// setTimeout --> It allows us to run the function once after an interval of time 
// setInterval --> It allows us to run the function repeatedly after an interval of time
// function greet(name, byetext){
//     console.log("Hello , Good morning"+ name + " " + byetext);
// }
// timeOut = setTimeout(greet, 2000 , " harry", "Take care");


//  must not call the function into the set timeout as it ruins the syntax 
// setTimeout(greet(), 2000 , " harry", "Take care"); --> This is the wrong syntax
//  clearTimeout(timeOut);
 // Here we are clearing the timeout after 2 seconds
//  In case there is no necessity of the setTimeout function 



// now let's see setinterval 
// intervalID = setInterval(greet, 5000 , "Dikshith", "pls take care");

// the same way, the clear function can be used with setInterval as well 

// clearInterval(intervalID);

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);
