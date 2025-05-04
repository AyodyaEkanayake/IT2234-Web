console.log("JSON") 
//can define arrays
//{key:value}
let student = {regno:'2021/ICT/01' , name: 'James' , age:21 , courses: 'IT' ,skills:['Java' , 'JS' ,'C++']}
console.log(student)
console.log(student.name)

let students = [
{regno:'2021/ICT/01' , name: 'James' , age: 21 , courses: 'IT'},
{regno:'2021/ICT/02' , name: 'Ravi' , age: 22 , courses: 'IT'},
{regno:'2021/ICT/03' , name: 'Gaya' , age: 21 , courses: 'IT'}
]
console.log(student)

console.log("------------------------")


//Define 10 students JSON
//Store it in an Array



let studentsArr = [
{regno: '2021/Ict/01', name:'James', age:21,gender:'Male', courses: 'IT' , gpa:3.8},
{regno: '2021/Ict/02', name:'Ravi', age:23,gender:'Male', courses: 'Medicine' , gpa:3.7},
{regno: '2021/Ict/03', name:'Peter', age:22,gender:'Male', courses: 'Business' , gpa:3.6},
{regno: '2021/Ict/04', name:'Ella', age:24,gender:'Female', courses: 'Business' , gpa:3.9},
{regno: '2021/Ict/05', name:'Henry', age:26,gender:'Male', courses: 'IT' , gpa:3.5},
{regno: '2021/Ict/06', name:'Jenny', age:25,gender:'Female', courses: 'IT' , gpa:3.4},
{regno: '2021/Ict/07', name:'Amali', age:20,gender:'Female', courses: 'Medicine' , gpa:3.7},
{regno: '2021/Ict/08', name:'John', age:24,gender:'Male', courses: 'Engineering' , gpa:3.4},
{regno: '2021/Ict/09', name:'Rubi', age:22,gender:'Male', courses: 'IT' , gpa:3.6},
{regno: '2021/Ict/10', name:'Alice', age:23,gender:'Female', courses: 'Media' , gpa:2.9}
]

//Find the female students
console.log("Female students are:")

let femaleStu = []

for(let i=0; i < studentsArr.length ; i++){ 
    if(studentsArr[i].gender === 'Female')
	{
		femaleStu.push(studentsArr[i])
	}
}
console.log(femaleStu)


console.log("------------------------")

//Find the students who are following IT course
console.log("Students who are following IT course")

let itCourses =[]

for(let j=0; j < studentsArr.length; j++)
{
	if(studentsArr[j].courses === 'IT')
	{
		itCourses.push(studentsArr[j])
	}
}
console.log(itCourses)

console.log("------------------------")

//Find the max and average GPA among the students
console.log("The max and average GPA among the students")

let maxGpa = 0;
let totalGpa = 0;
for (let i = 0; i < studentsArr.length; i++) {
    if (studentsArr[i].gpa > maxGpa) {
        maxGpa = studentsArr[i].gpa;
    }
    totalGpa += studentsArr[i].gpa;
}
let avgGpa = totalGpa / studentsArr.length;

console.log("Max GPA:", maxGpa);
console.log("Average GPA:", avgGpa);
