# University Course Management System

## Objective & Description
This project builds the core logic for a University Course Management System using JavaScript. It demonstrates the usage of Asynchronous Callbacks, ES6 Classes, Object Property Descriptors, and Array Manipulation. The system fetches student data from a simulated asynchronous "server", strictly models the data using Classes with immutable IDs, and generates complex analytical reports.

## File Organization
Our solution consists of four main files structured as follows:

```text
.
├── 📄 models.js      - Defines the core data structure (Student Class) and enforces immutable IDs.
├── 📄 database.js    - Simulates fetching data from a database using setTimeout and Callbacks.
├── 📄 analytics.js   - Contains advanced calculation logic, array manipulations, and higher-order functions.
└── 📄 main.js        - The orchestration entry point that ties all modules together and prints the results.
```

## Challenges Faced
* **Adapting from Java to JS**: Since we previously took an Object-Oriented Programming (OOP) course, the general logic and class structures felt somewhat similar to Java. However, because the lecture topics progressed very quickly, I had a hard time fully grasping the JavaScript-specific syntaxes and completing the assignment initially.
* **Immutability Syntax**: Specifically, implementing the immutable ID property using `Object.defineProperty()` was quite different from the access modifiers (like `private` or `final`) we used in Java. It required extra research to understand how `writable` and `configurable` attributes work in JavaScript.
* **Strict Mode Errors**: Since ES6 modules use "Strict Mode", testing the immutable ID threw a `TypeError` and crashed the app. I had to use a `try...catch` block to handle the error gracefully.