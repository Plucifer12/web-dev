let a = prompt("Enter your number")

let b = prompt("Enter your number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not allowed")
}

let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1;
    try {
        console.log("The sum is ", sum * x);
        return true;
        // Hello;
    } catch (error) {
        console.log("Error aa gaya bhai");
        return false;
        // alert("err.name");
        // alert("err.message");
        // alert("err.stack");
    }
    
    finally {
        console.log("files are being closed and db connection is being closed")
    }
}