
/*
Instructions 
    Build a recursive function to reverse a string. 

Tasks 
    1. Write a function named reverseString that takes a string as input. 
    2. The function should: 
        ○ Return the string itself if it contains only one character (base case). 
        ○ Use recursion to reverse the string by concatenating the last character 
            of the string with the result of the recursive call on the remaining part 
            of the string (recursive case). 
    3. Test the function with various string inputs to verify its correctness. 

Example Inputs and Outputs: 
    reverseString("hello"); // Outputs: "olleh" 
    reverseString("recursion"); // Outputs: "noisrucer" 
    reverseString("a"); // Outputs: "a" 
    reverseString(""); // Outputs: ""
    // 
    practice-building-recursive-function-Jyl-B.js
*/


function reverseString(string) {
    if (typeof string === "string") {
        string = string.split("");
    }
    if (string.length === 0)  {  //Base Case
        return (string);
    } return string.pop() + reverseString(string);  //Recursive Case
}
console.log (reverseString("hello")); // Outputs: "olleh" 
console.log (reverseString("recursion")); // Outputs: "noisrucer" 
console.log (reverseString("a")); // Outputs: "a" 
console.log (reverseString("")); // Outputs: "" 