let a = prompt("Enter your number")

let b = prompt("Enter your number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError ("This is not allowed")
}

let sum = parseInt(a) + parseInt(b)

console.log("The sum is", sum)