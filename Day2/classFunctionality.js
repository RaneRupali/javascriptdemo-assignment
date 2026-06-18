class Cart {
    constructor(){
        this.items =[];
    }
addItem(productId){
    this.items.push(productId);
}
removeItem(productPrice){
    this.items = this.items.filter(item => item.price !==productPrice);
}
getItem(){
    console.log("Current Cart:", this.items);
}   
}
const cart = new Cart();
cart.addItem({ name: "Banana", price: 50 });
cart.addItem({ name: "Apple", price: 70 });
cart.addItem({ name: "Litchi", price: 100 });

cart.getItem(); 
cart.removeItem(50);
console.log("After remove an item");
cart.getItem();