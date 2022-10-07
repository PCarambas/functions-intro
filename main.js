// function that defines the task of filling the car up with gas
//Tell function how much gas to put in the tank 
// Add else if to show what should happen if parameter is > 15

const fillGasTank = (gallons) => {
    if (gallons > 15) {
        console.log(`You cannot add this much gas to the tank`)
    }
    else {

        console.log(`I filled the tank with ${gallons} of gas`)
    }

}

// Define parameter of gallons
// change argument to test new console.log

fillGasTank(25)