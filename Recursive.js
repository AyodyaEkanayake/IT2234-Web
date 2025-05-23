//write a recursive function to print numbers from 1 to n
console.log("Recursive function")
function recursive(n)
{
    if(n < 1)return;
    recursive(n-1);
    console.log(n);	
}

recursive(10);
