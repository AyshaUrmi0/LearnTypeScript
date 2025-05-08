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
    return arrays.reduce((result, current) => result.concat(current), []);
  }

// Problem 4: Vehicle and Car classes
class Vehicle {
   
    constructor( private make: string,private year: number) {}

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
   

    constructor(make: string, year: number,private model: string) {
        super(make, year);

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

