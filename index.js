// Get the output element
const output = document.getElementById('output');

// Function to check and display number properties
function nam(x) {
    let result = '';

    // if...else statement
    if (x > 0) {
        result += 'Positive number<br>';
    } else if (x< 0) {
        result += 'Negative number<br>';
    } else {
        result += 'Zero<br>';
    }

    // for loop
    for (let i = 0; i <= x; i++) {
        if (i % 2 === 0) {
            result += i + ' is even<br>';
        } else {
            result += i + ' is odd<br>';
        }
    }

    // Output the result
    output.innerHTML = result;
}

// Call the function with a number
checkNumber(5);
