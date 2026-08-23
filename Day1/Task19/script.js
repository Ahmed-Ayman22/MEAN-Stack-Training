let customerName = prompt("Enter customer name:");
let orderPrice = prompt("Enter order price:");
let paymentDone = confirm("Has the payment been completed?");
orderPrice = Number(orderPrice);
let message = `Customer: ${customerName}, Price: ${orderPrice}, Paid: ${paymentDone}`;
console.log(message);
alert(message);
document.getElementById("result").innerText = message;
