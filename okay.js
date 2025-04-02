let count = 0 ;
let x = document.getElementById("count-el") ;
function increment() 
{
    count += 1 ;
    console.log(count) ;
    x.textContent = count ;
}


let saveEl = document.getElementById("save-el") ;
function save()
{
    let previousEntry = count + ' - '  ;   //variable that contains both count and "-" variable
    let nullValue = document.getElementById("count-el") ;



    saveEl.textContent +=previousEntry  ;
    nullValue.textContent = 0 ;

    count = 0 ;
}


