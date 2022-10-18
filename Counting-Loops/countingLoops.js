//For loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//while loop
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}

let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
}

//Do-While
do {
  console.log(a);
  a++;
} while (a <= 10);

do {
  console.log(b);
  b--;
} while (b >= 1);

//Array Of Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
  console.log(number);
}
