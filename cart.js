const cart = [
  { name: "Laptop", price: 10 },
  { name: "Phone", price: 10 },
  { name: "Headphones", price: 10 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  //Added validation for discountRate not being a number or being incorrect.
  if (typeof discountRate !== 'number' || discountRate < 0 || discountRate > 1) {
    console.log('Invalid Discount Rate.');
    discountRate = 0;
  }
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  //Added validation in case the total is not a number.
  if (typeof total !== 'number') {
    console.log('Invalid total.');
    total = 0;
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
