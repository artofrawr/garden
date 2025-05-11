---
order: 2
--- 
# Data Structures

A cheatsheet of useful TypeScript tips & tricks. The daily bread and butter.

## Arrays

### Filtering

```typescript
// filter out untruthy values
const truthy = [0, 1, 2, 3, null].filter(Boolean)

// get only unique values
const arr = [0, 1, 2, 3, 0, 1]
const uniqueSet = [...new Set(arr)] // faster
const uniqueFilter = arr.filter(
  (value, index, array) => array.indexOf(value) === index
) // slower but more versatile
```

### Sorting

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

## Objects

Dynamic property names
```ts
const index = 1;
const key = `item${index}`
const item = {
  [key]: 'value'
}
console.log(item.item1) // Output: value
```

Keys vs entries vs values
```ts
const obj = { x: 10, y: 20 }
console.log(Object.keys(obj)) // Output: ['x', 'y']
console.log(Object.values(obj)) // Output: [10, 20]
console.log(Object.entries(obj)) // Output: [['x', 10], ['y', 20]]
```

Both Object.assign and spread operator only produce shallow copies:
```ts
const original = { a: 1, b: { c: 2 } }
const copy = Object.assign({}, original)
copy.a = 3 // Affects only 'copy'
copy.b.c = 4 // Affects both 'copy' and 'original'

const copyUsingSpread = { ...original }
copyUsingSpread.a = 5  // Affects only 'copyUsingSpread'
copyUsingSpread.b.c = 6  // Affects both 'copyUsingSpread' and 'original'
```

For simple deepclone use JSON.stringify / JSON.parse. This won't work with anything that can't be serialized (e.g. functions)
```ts
const original = { a: 1, b: { c: 2 } }
const copy = JSON.parse(JSON.stringify(original))
copy.a = 3 // Affects only 'copy'
copy.b.c = 4 // Affects only 'copy'
```

Merging objects via spread overrides keys top to bottom
```ts
const source1 = { a: 1, b: 2 }
const source2 = { b: 3, c: 4 }
const merge = { 
  ...source1,
  ...source2
}
console.log(merge) // Output: { a: 1, b: 3, c: 4}
```

Vanilla JS `pick` implementation:
```ts
const pick = (obj, keys) => { 
  return keys.reduce((result, key) => {
    result[key] = obj[key] 
    return result
  }, {})
}
const vehicle = { brand: 'Volvo', year: 2020, type: 'suv' }
const picked = pick(vehicle, ['brand', 'type'])
console.log(picked) // { brand: 'Volvo', type: 'suv' }
```

Vanilla JS `omit` implementation:
```ts
const omit = (obj, keys) => { 
  return  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  )
}
const vehicle = { brand: 'Volvo', year: 2020, type: 'suv' }
const omitted = omit(vehicle, ['year', 'type'])
console.log(omitted) // { brand: 'Volvo' }
```


