// Browser Events:
// click 
// context menu
// mouseover / mouseout
// mouseup / mkousedown
// mousemove

// Submit
// focus

// DOMcontentLoaded
// transitionend


// let paragraph = document.getElementById('para')
para.addEventListener('mouseover',function run(){
console.log('mouse on the paragraph');
});
para.addEventListener('mouseout',function run(){
console.log('mouse not on the paragraph');
});

// let btn = document.getElementById('btn');
// let para = document.getElementById('para');

function toggle_hide(){
if(para.style.display != 'none'){
    para.style.display = 'none';
}
else{
    para.style.display = 'block';
}
}