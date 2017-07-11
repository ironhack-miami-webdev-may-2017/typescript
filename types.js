var myNumber = 58;
myNumber = 9999;
var myName = 'Nizar';
myName = 'Ariel';
var isHungry = false;
isHungry = true;
// Probably won't do "Object" because it results in problems later.
var person = {};
// Try to avoid "any" since it defeats the purpose of TypeScript.
var myAnything = {};
myAnything = 'Hello';
myAnything = 999;
var myEmptyThang = null;
myEmptyThang = undefined;
// ARRAYS ----------------------------------------------------------------------
var myList = ['parmigiana', 'cordon bleu', 'chicken sandwich'];
var myOtherList = ['egglplant parmigiana', 'hummus', 'chickpea curry'];
// these two ways of specifying a typed array are THE SAME!
var myNumberList;
var myOtherNumbers;
myOtherNumbers = [99, 88, 77, 11];
