let randomNumbers = [];
for(let i=0;i<5;i++){
 randomNumbers.push(Math.floor(Math.random()*50)+1);
}
let sum = 0;
for(let num of randomNumbers){
 sum += num;
}
let average = sum / randomNumbers.length;
console.log("13. Numbers:",randomNumbers);
console.log("13. Largest:",Math.max(...randomNumbers));
console.log("13. Smallest:",Math.min(...randomNumbers));
console.log("13. Average:",average.toFixed(2));
