let myNumber: Number = 58;

myNumber = 9999;


let myName: String = 'Nizar';

myName = 'Ariel';


let isHungry: Boolean = false;

isHungry = true;


// Probably won't do "Object" because it results in problems later.
let person: Object = {};

// Try to avoid "any" since it defeats the purpose of TypeScript.
let myAnything: any = {};
myAnything = 'Hello';
myAnything = 999;

let myEmptyThang: void = null;
myEmptyThang = undefined;



// ARRAYS ----------------------------------------------------------------------

let myList: Array<String> = [ 'parmigiana', 'cordon bleu', 'chicken sandwich' ];

let myOtherList: String[] = [ 'egglplant parmigiana', 'hummus', 'chickpea curry' ];

// these two ways of specifying a typed array are THE SAME!


let myNumberList: Array<Number>;
let myOtherNumbers: Number[];

myOtherNumbers = [ 99, 88, 77, 11 ];
