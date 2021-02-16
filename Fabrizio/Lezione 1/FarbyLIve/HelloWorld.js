for (var i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizbuzz");
    } else {
        if (i % 3 === 0){
            console.log("fiz");
        } else {
            if (i % 5 === 0){
                console.log("buzz");
            } else {
                console.log( i);        
            }
        }
    }
}