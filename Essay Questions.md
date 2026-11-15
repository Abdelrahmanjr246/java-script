*** Part 2: Essay Questions (2.5 Grade): ***

1. What is the difference between forEach and for...of? When would you use each? 

    both loop over the items in the array but the difference is 
    (forEach) is array method best for simple, run on every item tasks,
    we use it in {simple loop over an array, want a short readable one line with a callback }
    while
    (for...of) is flexible loop that supports break, continue, and await and works on any iterable.
    we use it in {need to stop early or skip items, looping over a string}

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

    - hoisting:
        hoisting is a js behavior where variable and function declarations are moved to the top of the scope allowing them to be recognized before their actual declaration in the code.

            Example:
                console.log(x); // undefined
                var x = 10;

            **NO ERROR HERE**

    - temporal dead zone:
        temporal dead zone is the period between entering a scope and the point where a 'let' or 'const' variable is declared and initialized during this period accessing the variable causes a #ReferenceError#.

            Example:
                console.log(y);
                let y = 20; 

                **REFERENCEERROR**



3. What are the main differences between == and ===? 

    both are comparison operators the difference is in how they do to 
        
        ==   --> compares two values after performing type conversion if their data types are different
        ===  --> compares both the value and the data type without performing type conversion


4. Explain how try-catch works and why it is important in async operations. 

    try-catch is used to handle errors in js without stopping the entire program
        - try: contains the code that might cause an error
        - catch: executes if an error occurs in the try block
    
    they are important because :
        prevents unhandled errors from disrupting the app.
        handles failed API requests and other asynchronous errors.
        allows developers to display meaningful error messages.
        makes asyn code easier to read and maintain.


5. What’s the difference between type conversion and coercion? Provide examples of each.

    both type conversion and type coercion change a value from one data type to another the difference is 

        - Type Conversion:
            happens when the programmer manually converts a value from type to another using functions such as Number(), String(), or Boolean()


            example:
                const value = "123";
                const number = Number(value);
        
        -Type Coercion:
            happens when js auto converts a value from type to another during an operation.


            example:    
                const result = "5" + 2;
