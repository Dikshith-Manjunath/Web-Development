// //in JS since there is no main function , the variables are always globally defined but can be separately defined within a block like this :
//  let x = 500
//  {
//      let x = 600
//      console.log(x)
//  } 
//  console.log(x)

// // constants can also be used
// const a = "Hello there This text cannot be changed "
// console.log(a)
// {
//     a = "why can this not be changed "
//     console.log(a)    //this command doesn't work
// }

//  //if - else  and else if ladder
 let age = 21
 if (age >= 21 ){
    console.log("You are old enough to drink")
 }
 else{
    console.log("You are not old enough to drink")
 }
//  //here everything is pretty much the same as c++ or c or python
//  //now for switch:
let day = "Saturday"
switch (day) {
    case "Monday":
        console.log("The day today is Monday")
        break;
    case "Tuesday":
        console.log("The day today is Tuesday")
        break;
    case "Wednesday":
        console.log("The day today is Wednesday")
        break;
    case "Thursday":
        console.log("The day today is Thursday")
        break;
    case "Friday":
        console.log("The day today is Friday")
        break;
    case "Saturday":
        console.log("The day today is Saturday")
        break;
    case "Sunday":
        console.log("The day today is Sunday")
        break;
    
    default:
        console.log("Today is a day of the week")
        break;
}