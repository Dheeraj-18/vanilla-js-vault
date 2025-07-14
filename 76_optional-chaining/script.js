//                       Optional chaining ES6 feature

/*
✅ Optional Chaining (?.) 

1. What it does:
   - Safely access deeply nested properties or methods without throwing errors if a property is `undefined` or `null`.

2. Syntax examples:

   a) Access object properties:
      user.address?.city
      // Equivalent to: user.address ? user.address.city : undefined

   b) Access with dynamic key:
      const key = 'city'
      user.address?.[key]
      // Equivalent to: user.address ? user.address[key] : undefined

   c) Call methods safely:
      user.getFullName?.()
      // Only calls if getFullName exists; avoids "is not a function" error

3. It short-circuits:
   - If anything before `?.` is nullish (null or undefined), it returns undefined.

4. Not valid on assignment:
   ❌ user?.name = 'Shrikant' // SyntaxError
   ✅ Use only for safe reading/access, not writing.

5. Common patterns:
   - obj?.prop
   - obj?.[expr]
   - obj.method?.()
   - array?.[index]

6. Fallback values:
   const city = user.address?.city ?? 'Not Available'
   // Uses Nullish Coalescing (??) to provide default
*/

const user = {
  firstName: 'Shrikant',
  lastName: 'Tiwari',
  age: 28,
  address: {
    city: 'Delhi',
  },
  getFullName: function () {
    return user.firstName + ' ' + user.lastName
  },
}

const a = 'city'
console.log(user.getFullName?.())

// console.log(user.address && user.address.city);   // output -> undefined

// console.log(user.address?.city)
// console.log(user.address?.[a])
