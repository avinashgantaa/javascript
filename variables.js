/* variables are used to store data, variables syntax is variable declaration and initialization
varibles have different keywords like var,let,const
var is introduced in ES1
let and const Introduced in Es6
if global variable effected due to local variable it is called global pollution
it is arised in var key word,
we can solve it by let key word
if we call variable with out declaring a varible, it should throw error, but in var key word it throws 
undefined, by using let keyword we can solve this. this is called variable hoisting.
*/
var i=100;
{
    i=200;
}
console.log(i);

