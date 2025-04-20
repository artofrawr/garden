# LeetCode Basics

## O Notation

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
