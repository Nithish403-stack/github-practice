function isPrime(n) {
    if (!Number.isInteger(n)) {
        throw new Error("Input must be an integer");
    }

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17)); // true
console.log(isPrime(12)); // false
console.log(isPrime(20)); 