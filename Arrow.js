//Arrow function
const msg = () => {console.log("Hello JS")}
console.log(msg)
msg()

console.log("------------------------")

//Write an arrow function to sum 2 numbers

const sum = (a,b) => {return a+b}
console.log(sum(4,3))

console.log("------------------------")
console.log("Default parameters")

const mult = (a,b=2) => {return a*b}
console.log(mult(4,5))
console.log(mult(4))



