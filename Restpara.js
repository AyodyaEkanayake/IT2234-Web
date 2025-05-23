console.log("------------------------")
console.log("Rest parameters")
const mySum =(...n)=>
{
	console.log(n)
}
mySum(4,5,6,89,2)
console.log("------------------------")

const mySum2 =(...n)=>{
	let t=0
	n.forEach((i) => t=t+i)
	console.log(t)
}

mySum2(4,5,6,89,2)

console.log("------------------------")

const mySum3 = (...n) => {
	return n.reduce((t,i)=>t=t+i)
}
console.log(mySum3(4,5,6,8,2))
