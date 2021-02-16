var theresold = 5;


for (var i = 0; i < 10; i++) 
{
    if (i < theresold){
        console.log(i + " è minore di " + theresold);
    } else {
        console.log(i + " è maggiore di " + theresold);
    }
}

var array = [10, 20, 30];

for(var number in array){
    console.log("array contains " + array[number] + " at position " + number);
}

i = 5;
do {
    console.log("Io ripeto finché non basta, ma almeno una volta")
    i++;
} while (i < 10)

i = 8;
while(i < 10){
    console.log("Io ripeto finché non basta, eventualmente mai!");
    i++;
}


do { /* codice da ripetere */ } while (i < 10)

for(var number in array){  /* codice da ripetere per ogni elemento dell'array */  }