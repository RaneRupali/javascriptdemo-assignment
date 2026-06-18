const productList =[
    {name:"Banana", price: 70 },
    {name: "Apple", price: 55 },
    {name: "Pineapple", price: 120 },
    {name: "Litchi", price: 25 },
    {name: "Cherry", price: 50 },
];

const finalProducts = products.filter(product => product.price < 50);