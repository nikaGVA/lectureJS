

let x = "*";
let arr = '';
for(let i = 0; i < 5; i++){
  arr+=x;
  console.log(arr)
}

console.log('\n')

// davaleba 2

let cars = ['ford', 'opel', 'mitsubishi','BMW','mercedes'];
let price = [2000, 10000, 15000, 1700, 12340];

let myArr = [];
for(let i = 0; i<5; i++){
  myArr[i] = {
    "car":cars[i],
    "price":price[i]
  }
}
console.log(myArr)

console.log("\n")

const filter = myArr.filter( filtr => filtr.price < 10000 );
console.log(filter)

console.log('\n')



myArr.map((data) => {
  let saleprice = data.price + 90/100;
  return [...data,...saleprice]
})
console.log(myArr)
