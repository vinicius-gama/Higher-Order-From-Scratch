 //map
const numbers = [1, 2, 3, 4, 5];

const double = (num) => num * 2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers); 

const orders = [
    { item: 'Pizza', amount: 2, price: 10 },
    { item: 'Burger', amount: 3, price: 5 },
    { item: 'Fries', amount: 1, price: 3 },
  ];
  
// reduce
  const calculateOrderTotal = (order) => order.amount * order.price;
  

  const total = orders.reduce((acc, order) => acc + calculateOrderTotal(order), 0);
  
  console.log(total); 
  
  
//filter
const animals = ['cat', 'dog', 'elephant', 'giraffe', 'lion'];

const hasMoreThan3Letters = (animal) => animal.length > 3;


const longNamedAnimals = animals.filter(hasMoreThan3Letters);

console.log(longNamedAnimals); 
  
  