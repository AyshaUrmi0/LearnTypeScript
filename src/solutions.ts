// Problem 1: String formatting function
function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// Problem 2: Filter by rating function
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

// Problem 3: Generic array concatenation function
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

// Problem 4: Vehicle and Car classes
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

// Problem 5: Process value function
function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }
    return value * 2;
}

// Problem 6: Product interface and function
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, current) => 
        current.price > max.price ? current : max
    );
}

// Problem 7: Day enum and function
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// Problem 8: Async square function
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
            return;
        }
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}

// Example usage
console.log(formatString("Hello")); // HELLO
console.log(formatString("Hello", false)); // hello

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));

console.log(concatenateArrays([1, 2], [3, 4], [5])); // [1, 2, 3, 4, 5]

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Make: Toyota, Year: 2020
console.log(myCar.getModel()); // Model: Corolla

console.log(processValue("hello")); // 5
console.log(processValue(10)); // 20

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));

console.log(getDayType(Day.Monday)); // Weekday
console.log(getDayType(Day.Sunday)); // Weekend

// Async function examples
squareAsync(4).then(console.log); // 16 after 1 second
squareAsync(-3).catch(console.error); // Error: Negative number not allowed 