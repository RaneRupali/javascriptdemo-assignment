//Using for loop
const products = ["Mango", "Apple", "Banana", "Cherry", "Guava", "Litchi"];

for (let i = 0; i < products.length; i++) {
    console.log('Product Name: ${products[i]}');
}

//Using do-while loop
let i = 0;
do {
    console.log(`Product Name: ${products[i]}`);
    i++;
} 
while (i < products.length); 