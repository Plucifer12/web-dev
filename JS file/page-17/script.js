console.log("I am good")
console.log("I am also good")

setTimeout(() => {
    console.log("You are hacker")
}, 0);

setTimeout(() => {
    console.log("I am hacker")
}, 0);

console.log("The end")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("prateek", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)