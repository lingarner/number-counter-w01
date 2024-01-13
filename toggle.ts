

// var userInput: HTMLElement | null = document.querySelector("input");
var toOneHundred: number[] = [];

function listNumbers(): void {
    let userInput : number = parseFloat((<HTMLInputElement>document.querySelector("input")). value);    
    toOneHundred = [];
    while (userInput <= 100){

        toOneHundred.push(userInput);

        if (userInput == 100){
            let reverseEnd: number = toOneHundred[0] - 1;
            let begin: number = 0;
            while (begin < reverseEnd){
                begin += 1;
                toOneHundred.push(begin);
            }
        }

        userInput += 1;
    }
    
    addToDom(toOneHundred);
}

function addToDom(array: any[]): void {
    let results = document.querySelector("p");

    if (results) {
        const arrayAsString = array.join(', ');
        results.textContent = arrayAsString;
        
    } else {
        console.error("Results element not found.");
    }
}


