let todo_list = '<%-todo_list%>'
var arr=[];
//Function to get selected checkbox in case of multiple delete
function checkbox(value){
    arr.push(value);
    window.location.href = "/getbycategory/?Category="+value;
    console.log('arr',arr)
}
//Function to filter for getting Todo tasks by its category
function filter(value){
    console.log('value is------',value);
        window.location.href = "/getbycategory/?Category="+value;
}

console.log('my script is loaded');