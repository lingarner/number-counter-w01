// var userInput: HTMLElement | null = document.querySelector("input");
var toOneHundred = [];
function listNumbers() {
    var userInput = parseFloat(document.querySelector("input").value);
    toOneHundred = [];
    while (userInput <= 100) {
        toOneHundred.push(userInput);
        if (userInput == 100) {
            var reverseEnd = toOneHundred[0] - 1;
            var begin = 0;
            while (begin < reverseEnd) {
                begin += 1;
                toOneHundred.push(begin);
            }
        }
        userInput += 1;
    }
    addToDom(toOneHundred);
}
function addToDom(array) {
    var results = document.querySelector("p");
    if (results) {
        var arrayAsString = array.join(', ');
        results.textContent = arrayAsString;
    }
    else {
        console.error("Results element not found.");
    }
}
