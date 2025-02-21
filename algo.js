let num1 = 132;

let arr = [];

for (let i = 0; i <= num1; i++) {
    if(num1 % i == 0) {
        arr.push(i);
    }
}

console.log(arr);

console.log(arr[Math.floor(Math.random() * arr.length)]);
