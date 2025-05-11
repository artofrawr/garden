---
order: 1
--- 

# Big O

Big O Notation is a way to describe the performance of an algorithm. It expresses how the algorithm's runtime or space requirements grow as the algorithm's input size grows. 

## Common Big O Notations:
 - __O(1)__ Constant Time - The algorithm's runtime is the same, regardless of the input size. 
 - __O(log n)__ Logarithmic Time - The runtime grows proportionally to the logarithm of the input size. 
 - __O(n)__ Linear Time - The runtime grows linearly with the input size. 
 - __O(n^2)__ Quadratic Time - The runtime grows proportionally to the square of the input size. 

## Time Complexity

Time complexity is a measure of the amount of time an algorithm takes to complete in relation to the length of the input.

### Examples:
Accessing an array index has O(1) time complexity, regardless of the size of the array.
```js
const value = array[5]
```
The following for loop will run n times. Its time complexity is O(n).
```js
for (let i = 0; i < n; i++) {
  console.log(i)
}
```

An algorithm that searches for a specific element in a sorted array using binary search would have a time complexity of O(log n) because the search space is halved at each step. 
```ts
function binarySearch(arr: number[], value: number): number {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  if (arr[middle] === value) {
    return middle
  }
  return -1
}

```

### Data Structure Cheatsheet

| Data Structure     | Access | Search | Insertion   | Deletion | 
| ------------------ | :----: | :----: | :---------: | :------: |
| Array              | O(1)   | O(n)   | O(n)        | O(n)     |
| Objects            | O(1)   | O(n)   | O(1)        | O(1)     |
| Sets               | O(1)   | O(1)   | O(1)        | O(1)     |
| Maps               | O(1)   | O(1)   | O(1)        | O(1)     |
| Linked List        | O(n)   | O(n)   | O(1)        | O(1)     |

__Notes__:
 - Array:
   - Insertion/Deletion (at the end): O(1)  
   - Insertion/Deletion (at the beginning/middle): O(n) 
 - Objects: 
   - searching without knowing the key: O(n)
   - if you know the key and can use the `in` operator: O(1)
 - Set:
   - the time complexity of creating a set from an array is O(n), where n is the number of elements in the array 
 - Map:
   - the time complexity of creating a map from an array is O(n), where n is the number of elements in the array  
   
## Space Complexity

Space complexity refers to the amount of memory an algorithm uses relative to the input size. It is an important aspect of algorithm analysis, alongside time complexity. Here are some common space complexities:

### Examples:

O(1) - uses a constant amount of space regardless of the input size.
```ts
function sumArray(arr: number[]): number {
  let sum = 0; // single variable
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

O(n) - this function creates a new array of the same size as the input
```ts
function doubleArray(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
```

O(n^2) - this function creates a 2D array (matrix) of size n x n.
```ts
function createMatrix(n: number): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j < n; j++) {
      row.push(i * j);
    }
    matrix.push(row);
  }
  return matrix;
}
```

