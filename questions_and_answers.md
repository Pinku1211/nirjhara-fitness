<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>JavaScript will not provide a syntax error because it's a valid assignment of the variable 'greetign'. JavaScript will treat 'greatign' as a new variable. So we will get an empty object without any error. However, the variable 'greeting' remains unused.</i>
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In this code, we have a function called sum that takes two parameters, a and b, and returns the sum of these two parameters.Then calling the sum function with the arguments. Where JavaScript is a dynamically typed language, which means it will attempt to perform type coercion and convert the operands to a common data type when you use the + operator. Here, JavaScript will convert the number 1 to a string and concatenate it with the string "2" and output will be a string of '12'.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In this code, we have an array food containing four food emoji strings, and an object info with a property favoriteFood set to the first element of the food array, which is "🍕". Then, the value of favoriteFood is changed to "🍝". The food array has not been changed by changing the info.favoriteFood property. The object info simply holds a reference and when the value of info.favoriteFood is changed, it doesn't modify the original array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> The sayHi function does not have a default value for name, and if you call it without providing an argument, it will result in name being undefined. In such a case, it will give a string with undefined in the output. So, in this code if the function gets no argument it will simply return what it has to and a string of 'undefined' for the dynamic 'name' argument.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The forEach loop will iterate through all the elements of the nums array and increment the count variable for each element that is truthy. In this case, the elements 1, 2, and 3 are truthy, and 0 is not. So, in total the loop will iterate for trhee times and increase the value of count each which makes it 3.</i>

</p>
</details>