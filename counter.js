let num = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

num.addEventListener("click", function(){
    integer += 1;
    int.innerHTML = integer;
});

remove.addEventListener("click", function(){
    integer -= 1;
    int.innerHTML = integer;

})