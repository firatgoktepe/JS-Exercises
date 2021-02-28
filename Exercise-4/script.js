/*

Approach for the solution 

Let's say num = 123.
- We convert the num to string  num becomes '123'
- We split '123' → it becomes ['1', '2', '3']
- We reverse the array → it becomes ['3', '2', '1']
- We join the array to form a string → it becomes '321'
- Lastly we parse the string into a Int and returns it → 321.  

*/

const reverseNum = (num) => 

   parseInt( String(num).split("").reverse().join(""), 10);

console.log(reverseNum(123));

