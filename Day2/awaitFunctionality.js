async function productList(){
    return new Promise((resolve) => {
        const products =["Tv", "Watch", "Mobile", "Washing Machine"];
        resolve(products);
    });       
}
productList().then(products => console.log(products));