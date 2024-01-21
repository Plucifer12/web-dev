console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 1")
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done 1")
            resolve("Prateek 1")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Prateek 2")
        }, 1000);
    }
})

let p3 = Promise.any([prom1, prom2])
p3.then ((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((a) => {
//     console.log(a)
// }).finally((a) => {
//     console.log(a)
// })