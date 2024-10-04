var string = "This Is a String"
console.log(string)
var position = string.indexOf('is')


// indexof is an inbuilt fn for finding the occurrence of a substring 
// lastindexof can be used to find the last occurrence of a substring

console.log(position)
position = string.lastIndexOf('is')
console.log(position)

// substring from a string
var substring = string.slice(1,7)
var substring = string.substring(1,7)
var substring = string.substr(1,3)
console.log(substring)

var replaced = string.replace('string','JS_Code');
console.log("This was the original text: ",string);
// console.log(string)
console.log("and this is the edited text: ", replaced);
console.log(replaced);

console.log(string.toUpperCase());
console.log(string.toLowerCase());
var newstring = string.concat(' and this is a New String')
console.log(newstring)
var spaceString = '   This is a string     with spaces in bw    ' 
console.log(spaceString);
console.log(spaceString.trim());
var char = string.charAt(5);
// var char = string.charCodeAt(5)  not very important in actual web dev 
console.log(char);
console.log(string[0]);