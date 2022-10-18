/* variables are used to store data, variables syntax is variable declaration and initialization
varibles have different keywords like var,let,const
var is introduced in ES1
let and const Introduced in Es6
if global variable effected due to local variable it is called global pollution
it is arised in var key word,
we can solve it by let key word
if we call variable with out declaring a varible, it should throw error, but in var key word it throws 
undefined, by using let keyword we can solve this. this is called variable hoisting.
functions: it is a particular business logic by using functions we can reuse
function syntax:
function fun(){
    business logic
}this is function definition
fun()  function calling
there two types of functions
1>named function
2>unnamed/nameless/anonymous function
function definition has a particular name is called named function
function definition has no name is called named function. nameless function is also called as arrow function
if combination of function definition and function calling is called as IIFE(immediate invokable functional expression)
*/
(()=>{
    console.log('hello')
})()


