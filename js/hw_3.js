// Задача 3.


function Furniture(name, price) {
    this.name = name;
    this.price = price;
}
Furniture.prototype.getInfo = function() {
    return `name: ${this.name}, price: ${this.price}`;
};


