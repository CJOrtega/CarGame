// Variables

let car = {
    make: 'McLaren',
    model: 'P1',
    color: 'Yellow',
    mileage: 0,
    isWorking: true,

    diveToWork() {
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 8;
        alert(`New mileage: ${this.mileage}`);
    }
}


// Function
/*
const rewriteStats() {
    console
}
*/
/* Captures keyboard input. Depending on the letter pressed it 
will "call" (execute) different function. */
document.onkeyup = (event) => {

    // Captures the key press, and converts it to lowercase, and saves it to a variable.
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter ==='d') {
        car.driveToWork();
        //rewriteStats();
    }
}