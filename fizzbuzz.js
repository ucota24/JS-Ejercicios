

function fizzBuzz(n) {
    if (n === "" || Number.isNaN(n) || n <= 0 || n % 1 !== 0) {
        console.error("Tiene que ser numero entero y mayor a 0");
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(`${i}: FizzBuzz`);
            } else if (i % 3 === 0) {
                console.log(`${i}: Fizz`);
            } else if (i % 5 === 0) {
                console.log(`${i}: Buzz`);
            } else {
                console.log(`${i}`);
            }
        }
    }
}

fizzBuzz(30);

fizzBuzz("");
fizzBuzz(NaN);
fizzBuzz(-3);
fizzBuzz(0);
fizzBuzz(3.3);



