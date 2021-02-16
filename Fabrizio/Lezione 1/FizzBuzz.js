function runFizzBuzzLogic(){
    var num = document.getElementById("number").value;

    var message = "";
    if (num % 3 === 0 && num % 5 === 0){
        message = "fizbuzz";
    } else {
        if (num % 3 === 0){
            console.log("fiz");
        } else {
            if (num % 5 === 0){
                console.log("buzz");
            } else {
                console.log( i);        
            }
        }
    }

    alert("I'm FizzBuzz! " + num);
}