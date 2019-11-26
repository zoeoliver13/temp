const readlineSync = require("readline-sync");

const origin = String(readlineSync.question("Enter an origin scale: "));
origin=origin.toLowerCase();
while(origin != "f" || origin != "c" || origin != "k"){
  console.log("Enter an origin scale: ")
}
const destination = String(readlineSync.question("Enter a destination scale: "));
destination=destination.toLowerCase();
while(destination != "F" || destination != "C" || destination != "K"){
  console.log("Enter an origin scale: ")
}
let temperature = Number(readlineSync.question("\nEnter a temperature: "));

if(origin = "f"){
  if(destination = "c"){
temperature = (temperature-32)*5/9;
console.log(temperature+"\u00b0")
}
  if(destination = "k"){
  temperature = (temperature-32)*5/9+273.15;
  console.log(temperature+"\u00b0");
  }
}
if(origin = "c"){
  if(destination="f"){
    temperature = (temperature*9/5)+32;
  console.log(temperature+"\u00b0");
}
  if(destination = "k"){
    temperature = temperature+273.15;
  console.log(temperature+"\u00b0");
  }
}
if(origin = "k"){
  if (destination = "f"){
    temperature = (temperature-273.15)*9/5+32
      console.log(temperature+"\u00b0");
  }
if(destination = "c"){
  temperature=(temperature-273.15)
        console.log(temperature+"\u00b0");
}
}
