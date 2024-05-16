// Immediately Invoked Function Expressions (IIFE)
// global scope k pollution se kahi baar problem hoti hai , toh us global
// scope k pollution ko hatane k liye IIFE ko use kiya jata

/*
IIFEs help to create a local scope for variables, 
which prevents them from polluting the global namespace. 
This is crucial in JavaScript, 
where any variable declared outside a function becomes global by default.
*/


(function () {
    var localVariable = 'I am local';
    console.log(localVariable); // Output: I am local
})(); // yha pe ye semicolon lagana jaruri hai kyuki 
// ye IIFE invoke toh ho jata hai lekin ise pta nahi hai ki is funtion ko rokna kaha hai

// console.log(localVariable) // ReferenceError: localVariable is not defined



// how to pass variable in IIFE

(function passmesomething(myname){
    console.log(`i am ${myname}`);
})("developer");
