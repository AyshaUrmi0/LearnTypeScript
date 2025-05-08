# TypeScript Practice and Blog

This repository contains TypeScript practice problems and a blog post about TypeScript features.

## Blog Post: Understanding TypeScript's Type System

### Interfaces vs Types in TypeScript

TypeScript provides two main ways to define custom types: interfaces and type aliases. While they might seem similar at first, there are important differences that can affect how you structure your code.

#### Key Differences

1. **Declaration Merging**
   - Interfaces can be merged with other interfaces of the same name
   - Type aliases cannot be merged

```typescript
// Interface merging works
interface User {
    name: string;
}
interface User {
    age: number;
}
// Result: User has both name and age properties

// Type aliases cannot be merged
type User = {
    name: string;
}
type User = { // Error: Duplicate identifier 'User'
    age: number;
}
```

2. **Extends vs Intersection**
   - Interfaces use the `extends` keyword for inheritance
   - Types use intersection types with `&`

```typescript
// Interface extension
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

// Type intersection
type Animal = {
    name: string;
}
type Dog = Animal & {
    breed: string;
}
```

3. **Computed Properties**
   - Types can use computed properties
   - Interfaces cannot use computed properties

```typescript
type Keys = 'firstname' | 'surname';
type NameType = {
    [key in Keys]: string;
}
```

4. **Union Types**
   - Types can be used to create union types
   - Interfaces cannot be used in union types

```typescript
type StringOrNumber = string | number;
```

#### When to Use Each

- Use **interfaces** when:
  - You need to define object shapes
  - You want to take advantage of declaration merging
  - You're working with object-oriented design patterns

- Use **types** when:
  - You need to create union or intersection types
  - You're working with tuples or arrays
  - You need to use mapped types
  - You want to create aliases for primitive types

### Type Inference in TypeScript

Type inference is one of TypeScript's most powerful features, allowing the compiler to automatically determine types without explicit type annotations.

#### How Type Inference Works

1. **Basic Type Inference**
```typescript
let message = "Hello"; // TypeScript infers type as string
let count = 42;        // TypeScript infers type as number
let isActive = true;   // TypeScript infers type as boolean
```

2. **Object Type Inference**
```typescript
const user = {
    name: "John",
    age: 30
}; // TypeScript infers type as { name: string; age: number }
```

3. **Array Type Inference**
```typescript
const numbers = [1, 2, 3]; // TypeScript infers type as number[]
const mixed = [1, "two"];  // TypeScript infers type as (number | string)[]
```

#### Benefits of Type Inference

1. **Reduced Boilerplate**
   - Less code to write and maintain
   - Cleaner, more readable code
   - Fewer type annotations to update when refactoring

2. **Better Developer Experience**
   - IDE support with accurate type information
   - Immediate feedback on type errors
   - Better code completion and documentation

3. **Type Safety**
   - Catches type-related errors at compile time
   - Maintains type safety without explicit annotations
   - Helps prevent runtime errors

4. **Refactoring Support**
   - Easier to refactor code with confidence
   - TypeScript can track changes across the codebase
   - Automatic type updates when changing implementations

#### Best Practices

1. **Let TypeScript Infer When Possible**
```typescript
// Instead of:
const name: string = "John";

// Write:
const name = "John";
```

2. **Use Explicit Types When Needed**
```typescript
// When the inferred type is too broad
const numbers: number[] = [1, 2, 3];

// When the type is important for documentation
function calculateTotal(items: Product[]): number {
    return items.reduce((sum, item) => sum + item.price, 0);
}
```

3. **Leverage Type Inference with Generics**
```typescript
function first<T>(arr: T[]): T | undefined {
    return arr[0];
}

// TypeScript infers the return type based on the input
const num = first([1, 2, 3]);     // inferred as number | undefined
const str = first(["a", "b"]);    // inferred as string | undefined
```

Type inference is a powerful feature that helps write more maintainable and type-safe code while reducing the amount of type annotations needed. It's one of the key features that makes TypeScript both powerful and developer-friendly.



## Learn More About TypeScript

For a comprehensive beginner's guide to TypeScript concepts, check out this Medium article:
[TypeScript Basics: A Beginner's Guide to Key Concepts](https://medium.com/@ayshaismail021/typescript-basics-a-beginners-guide-to-key-concepts-23d458469cfa)

