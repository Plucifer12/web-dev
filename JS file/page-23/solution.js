// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffindor")
    }

    else if (student.length < 8) {
        houses.push("Hufflepuff")
    }

    else if (student.length < 12) {
        houses.push("Ravenclaw")
    }

    else {
        houses.push("Slytherin")
    }
}

console.log(houses)

// 3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let a = "Prateek";

let b = "Prateek";

let x = a.split("").reduce((acc, char) => char + acc, "");

console.log(b + x);

// 4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function isValidpassword(password) {
    if (!(password.length >= 8 && password.length <= 15)) ;
        return true;
}

function isInvalidpassword(password) {
    return false;
}

const password1 = "Prateek"
if (isValidpassword(password1)) {
    console.log(`${password1} - Valid Password`)
} else {
    console.log(`${password1} - Invalid Password`)
}

const password2 = "Prateek0"
if (isValidpassword(password1)) {
    console.log(`${password1} - Valid Password`)
} else {
    console.log(`${password1} - Invalid Password`)
}