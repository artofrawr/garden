---
order: 1
--- 
# LeetCode Basics

## Big O Notation
Big O Notation is used to describe the performance or complexity of an algorithm. It provides an upper bound on the time or space required by an algorithm as a function of the input size. It helps in comparing the efficiency of different algorithms by focusing on their worst-case scenarios. Common Big O Notations include O(1) for constant time, O(n) for linear time, O(log n) for logarithmic time, and O(n^2) for quadratic time, among others. Understanding Big O Notation is crucial for analyzing and optimizing algorithms.


## Arrays

### Array Filtering

```typescript
// filter out untruthy values
const truthy = [0, 1, 2, 3, null].filter(Boolean)

// get only unique values
const unique = [0, 1, 2, 3, 0, 1].filter(
  (value, index, array) => array.indexOf(value) === index
)
```

### Array Sorting

```typescript
const numbers = [0, 1, 2, 3, 10, 11, 12, 13]

// sorts as string by default
list.sort() // [0, 1, 10, 11, 13, 2, 3]

// sort as numbers
list.sort((a, b) => a - b) //  [0, 1, 2, 3, 10, 11, 12, 13]

const strings = ['aaa', 'bbb', 'AAA', 'BBB']

// default sort order by capitalization
strings.sort()
// ['AAA', 'BBB', 'aaa', 'bbb']

// case insensitive
strings.sort((a, b) => a.localeCompare(b))
// ['aaa', 'AAA', 'bbb', 'BBB']
```
