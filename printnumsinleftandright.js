//Reverse the numbers in left and right 4321 - 5- 9876

let num1 = 9

let mid = parseInt(num1/2)

for(let i= mid ; i > 0 ; i--)
{
	console.log(i)
}

console.log("-")
console.log(mid+1)
console.log("-")

for(let j= num1 ; j > mid+1 ; j--)
{
	console.log(j)
}

console.log();


//Reverse the numbers in left and right 76543210 - 8 - 15 14 13 12 11 10 9 

let num2= 15 

mid = parseInt(num2 / 2)

for(let x = mid; x >= 0 ; x--)
{
	console.log(x)
}

console.log("-")
console.log(mid+1)
console.log("-")

for(let y =num2 ; y > mid+1 ; y--)
{
	console.log(y)
}
