const productList =[
    {name:"Banana", price: 70 },
    {name: "Apple", price: 55 },
    {name: "Pineapple", price: 120 },
    {name: "Litchi", price: 25 },
    {name: "Cherry", price: 45 },
];

//Using Filter
const finalProducts = productList.filter(product => product.price < 50);
console.log("Product with less than 50:", finalProducts);

//Using Map
const productName = finalProducts.map(product => product.name);
console.log("Products names are:", productName);

//Using Reduce
const totalPrice = finalProducts.reduce((sum, product)=> 
    { return sum+product.price },0)
console.log("Total price of final products:", totalPrice);