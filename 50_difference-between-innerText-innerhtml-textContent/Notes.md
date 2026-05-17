# innerText vs innerHTML vs textContent

Understanding the difference between these three DOM properties is extremely important in real-world JavaScript development.

---

# 1. innerHTML

## Definition

`innerHTML` returns the complete HTML markup inside an element, including all HTML tags.

It can also be used to insert or replace HTML content inside the DOM.

---

## Example

```html
<div id="box">
  Hello <b>World</b>
</div>
```

```js
const box = document.getElementById("box");

console.log(box.innerHTML);
```

### Output

```html
Hello <b>World</b>
```

---

## Updating HTML

```js
box.innerHTML = "<h1>Hello</h1>";
```

This will replace the existing content with new HTML.

---

## Important Notes

- Includes HTML tags
- Parses HTML
- Can modify the DOM structure
- Supports dynamic HTML injection

---

## Warning ⚠️

Using `innerHTML` with untrusted user input can cause **XSS (Cross-Site Scripting)** attacks.

❌ Unsafe:

```js
div.innerHTML = userInput;
```

✅ Safer:

```js
div.textContent = userInput;
```

---

# 2. innerText

## Definition

`innerText` returns only the **visible text** rendered on the webpage.

It is affected by CSS styling and ignores hidden elements.

---

## Example

```html
<div id="box">
  Hello
  <span style="display:none">Hidden</span>
  <b>World</b>
</div>
```

```js
console.log(box.innerText);
```

### Output

```txt
Hello World
```

---

## Important Notes

- Returns only visible text
- Ignores hidden elements
- Affected by CSS
- Represents rendered text seen by users

---

## CSS Effects

These elements are usually ignored by `innerText`:

```css
display: none;
visibility: hidden;
```

---

# 3. textContent

## Definition

`textContent` returns all text inside an element exactly as it exists in the DOM.

It ignores CSS styling and does NOT include HTML tags.

---

## Example

```js
console.log(box.textContent);
```

### Output

```txt
Hello Hidden World
```

---

## Important Notes

- Returns all text content
- Includes hidden text
- Not affected by CSS
- Does NOT parse HTML
- Faster than `innerText`

---

# Real Difference Example

## HTML

```html
<div id="box">
  Hello
  <span style="display:none">Hidden</span>
  <b>World</b>
</div>
```

---

## JavaScript

```js
const box = document.getElementById("box");

console.log(box.innerHTML);
console.log(box.innerText);
console.log(box.textContent);
```

---

## Output

### innerHTML

```html
Hello
<span style="display:none">Hidden</span>
<b>World</b>
```

### innerText

```txt
Hello World
```

### textContent

```txt
Hello Hidden World
```

---

# Quick Comparison Table

| Property | Includes HTML Tags | Includes Hidden Text | Affected by CSS | Can Modify HTML |
|---|---|---|---|---|
| innerHTML | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes |
| innerText | ❌ No | ❌ No | ✅ Yes | ❌ No |
| textContent | ❌ No | ✅ Yes | ❌ No | ❌ No |

---

# Performance

| Property | Performance |
|---|---|
| textContent | Fastest |
| innerText | Slower |
| innerHTML | Expensive (parses HTML) |

---

# Real-World Usage

## Use `innerHTML` when:

- You need to insert HTML dynamically
- Building UI components
- Rendering HTML templates

---

## Use `innerText` when:

- You want text exactly as users see it
- Reading visible content from the page

---

## Use `textContent` when:

- Working with plain text
- Avoiding XSS issues
- Better performance is needed

---

# Best Practice

✅ Prefer `textContent` for plain text updates.

✅ Use `innerHTML` only when HTML rendering is required.

✅ Use `innerText` when visible rendered text matters.

---