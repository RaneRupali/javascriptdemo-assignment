async function displayProducts() {
    try{
       const fs = require('node:fs');
       //const fs = require('fs');
       const result = fs.readFileSync("D:/Automation/JavaScript assignment/Js-demo-repo/javascriptdemo-assignment/Day2/products.json", "utf8");
       const products = JSON.parse(result);
       console.log("Product list:", products);
    } catch(error){
        console.error("Error:", error.message);
    }
    
}
displayProducts();

const fs = require('node:fs');
fs.readFile('D:/Automation/JavaScript assignment/Js-demo-repo/javascriptdemo-assignment/Day2/products.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
console.log(data);
});