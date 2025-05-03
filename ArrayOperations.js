//Array operations
//push and pop

console.log("Array operations")
console.log("push - Add element to the array")
console.log("-------------------")
arr3 = ['a', 'b' , 'c']
arr3.push('d')  
console.log(arr3)
console.log("-------------------")
console.log("pop - Remove element to the array")
arr3.pop()
console.log(arr3)

console.log("-------------------")
//reverse the array using pop and push
//a b c d -> d c b a

console.log("Reverse the array using pop and push")
let arr4 = ['a','b', 'c','d']
console.log("Original Array: "+ arr4)
let reverseArr = []

while(arr4.length > 0)
{
	reverseArr.push(arr4.pop())
}

console.log("Reversed array: "+ reverseArr)
