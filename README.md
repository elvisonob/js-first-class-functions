# First Class Functions

Most of the time when we've been working with functions we've been *calling* them:

```javascript
function add(num1, num2) {
  return num1 + num2
}

const result = add(1, 2)
console.log(result)
```

Something that makes functions extremely powerful in JavaScript is that we can also treat them just like any other value in the language - whenever we have an existing value, we can also have a function. 

## Learning Objectives
- Explain what is meant by "first class functions" 
- Demonstrate use of first-class functions through the Array `find`, `findIndex`, `map`, `filter` and `reduce` methods
- Understand how arrow functions relate to standard functions

## Passing Functions
What do you think this code logs out?

```javascript
const myAddFunction = function add(num1, num2) {
  return num1 + num2
}

const result = myAddFunction(1, 2)
console.log(result)
}
```

Use the browser console or REPL to explore these examples:

```javascript
function add(a, b) {
 return a + b
}

const aVariable = add

const anArray = [add, add, add]

const anObject = {
 name: "Nicolas",
 property: add
}
```

So, if we just refer to a function by its name, *without calling* it using the (), we are just passing a reference to that function around, ready to be called whenever we are ready.

You can even pass a function as an argument of another function! What do you think this code is doing? 

```javascript
function add (a, b) {
 return a + b
}

function callAnotherFunction (func) {
 return func(50, 30)
}

console.log(callAnotherFunction(add))
```

The technical word for this feature is **first-class functions**

Although the concept might seem a little weird right now, you will see just how useful it can be and how it’s pretty much everywhere you look in the JavaScript world.

## Arrays and first-class functions
So far, we've mostly used the `push`, `pop` and `splice` methods when working with Arrays, but Array also provides us with several useful utility functions that take another function as an argument and perform some operation on the array. Let's look at the [find method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Imagine we have a loop that goes through an array of numbers and looks for the first number greater than 10:

```javascript
const numbers = [6, 5, 9, 12, 4, 15]

for(let i=0;i<numbers.length;i++) {
  if (numbers[i]>10) {
    console.log("Found it!:" + numbers[i])
    break
  }
}
```

We can achieve the same using the `find` method:

```javascript
const numbers = [6, 5, 9, 12, 4, 15]

function isGreaterThan10(num) {
  return num > 10
}

const firstGreaterThan10 = numbers.find(isGreaterThan10)
console.log("Found it!:" + firstGreaterThan10)

```

In this example, we are providing our `isGreaterThan10` function to the `find` method on the array. The `find` method will then go through the array for us and *call the function we provide* with the value of each element. It's our functions job to return `true` if the element is the element we are looking for or `false` if not. The `find` method then returns the first element for which our function returns `true`.

Commonly with this type of code, the function is "inlined" - rather than declaring the function with a name, we just provide the function directly to the `find` function:

```javascript
const numbers = [6, 5, 9, 12, 4, 15]

const firstGreaterThan10 = numbers.find(function(num) {
  return num > 10
})

console.log("Found it!:" + firstGreaterThan10)
```

The code above works exactly the same as the previous example, but now we are passing the function directly rather than declaring it with a name. There are more methods on Array that work in the same way:

```javascript
const numbers = [6, 5, 9, 12, 4, 15]

const indexOfFive = numbers.findIndex(function(num) {
  return num === 5
})

console.log("Index of 5 is:" + indexOfFive)


const lessThan10 = numbers.filter(function(num) {
  return num < 10
})

console.log("Numbers less than 10 are:", lessThan10)


const numbersTimes10 = numbers.map(function(num) {
  return num * 10
})

console.log("Numbers * 10  are:", numbersTimes10)

const sum = numbers.reduce(function(previous, current) {
  return previous + current
}, 0)

console.log("Sum of numbers is", sum)
```

The documentation for all these methods can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Exercise Part 1
Update the functions inside the `arrays.js` file to use the indicated array method. The tests can be run to check your code is correct.

## Arrow functions
Arrow functions are an alternative, more concise way of declaring functions that works particularly well with this usage pattern. Using an arrow function we can re-write the above code as:

```javascript
const numbers = [6, 5, 9, 12, 4, 15]

const firstGreaterThan10 = numbers.find(num => num > 10)

console.log("Found it!:" + firstGreaterThan10)
```

In the code above, we are passing an arrow function in to `find`. It works exactly the same as the regular function we used previously, but we just type it in a different way, `num` is the name of the argument the function accepts. `=>` signifies the start of the function body. When using an arrow function, if our function is a single line we can omit the curly braces. `num > 10` is  our function body. If our arrow function is on a single line, we can also omit the `return` statement - the return is added automatically for us when the code runs.

MDN has excellent [documentation on arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#comparing_traditional_functions_to_arrow_functions) and a very helpful breakdown on going from a standard function definition to the arrow version equivalent. 


## Exercise Part 2

Inside the `arrays.js` file update your code to use the arrow function syntax.