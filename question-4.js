// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 2000 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowestStock = inventory[0];
for(let item of inventory){
  if(item.quantity < lowestStock.quantity){
    lowestStock = item;
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowestStock.name} ซึ่งมี ${lowestStock.quantity} ชิ้น`)