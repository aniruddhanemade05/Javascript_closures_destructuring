let count = 1;
counter=()=> {
   return function() {
        return console.log(count++);
    }
}
let click=counter();
click();
click();
click();
click();
click();