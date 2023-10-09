const myArray = [2,13,8,16,22];

// Define an iterable object with a custom iterator
const squareNumbersIterable = {
  numbers: myArray,
  index: 0,

  // Define our own iterator method
  [Symbol.iterator]: function () {
    return this;
  },

  // Define the next() method to generate square of number at each iteration
  next: function () {
    if (this.index < this.numbers.length) {
      const value = this.numbers[this.index] ** 2;
      this.index++;
      return { value, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

const iterator = squareNumbersIterable[Symbol.iterator]();

// Iterate and log the square of each number
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 9, done: false }
console.log(iterator.next()); // { value: 16, done: false }
console.log(iterator.next()); // { value: 25, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


function* generatePrimes(limit) {
    // Helper function to check if a number is prime
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    }
  
    let num = 2;
    let count = 0;
  
    while (count < limit) {
      if (isPrime(num)) {
        yield num;
        count++;
      }
      num++;
    }
  }
  
  // Create a generator for prime numbers up to a limit of 10
  const primeGenerator = generatePrimes(20);
  
  // Iterate and log the prime numbers
  for (const prime of primeGenerator) {
    console.log(prime);
  }
