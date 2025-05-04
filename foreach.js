//For each
let nums = [2,4,6,8,10]
nums.forEach((n) => {
	console.log(n)
})


console.log("------------------")

//Find the max number in the array using forEach
let max = 0
nums.forEach((p) => {
    if(max < p)
	{
		max=p
	}
    //(max < n) && (max = n)	
})
console.log("The max value is:"+ max)


console.log("------------------")

//print the nested Array
let nestedArr = [[1,3,5,7] , [2,4,6,8,10], [1,2,3,4]]
nestedArr.forEach((s) =>
{
	console.log(s)
})

console.log("------------------")

//Another way
nestedArr.forEach((r) => {
	r.forEach((t) =>{
	    console.log(t)	
	})
})

console.log("------------------")

//a =[4,5,6,3,7]
//b =[8,3,2,1,5]
//find the common elements between a and b

a =[4,5,6,3,7]
b =[8,3,2,1,5]
console.log("Common Elements are: ")	
a.forEach((c) => {
	b.forEach((d) => {
	    if(c == d)
		{
		   console.log(c)	
		}
	})
})

console.log("------------------")

//arr = [1,2,3,4,5,6]
//target = 7
//write a code to find the all pairs that sum up to the target

arr = [1,2,3,4,5,6]
target = 7
console.log("all the pairs sum up to 7")
arr.forEach((g) => {
	arr.forEach((h) => {
		if((g+h) == 7)
		{
			console.log("("+g + "+"+ h+")")
		}
	})
})


console.log("------------------")

//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array

let arr2 = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequency = {};
let maxCount = 0;
let mostFrequentElement;

arr2.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequentElement = num;
    }
});

console.log("Most frequent element:", mostFrequentElement);
