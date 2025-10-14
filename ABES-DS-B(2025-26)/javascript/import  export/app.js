// Import named exports
import { pi, add, subtract } from './math.js';
import { companyName, companyAddress, companyPhone, employee } from './user.js';

// Import default export
import greet from './greet.js';

// console.log('Pi:', pi);
// console.log('Add 5 + 3:', add(5, 3));
// console.log('Subtract 5 - 3:', subtract(5, 3));
// console.log(greet('Saqib'));

// Using imported user data)
const emp1 = employee('Alice', 'Developer', 'Engineering');
const emp2 = employee('Bob', 'Designer', 'Design');

console.log('Company Name:', companyName);
console.log('Company Address:', companyAddress);
console.log('Company Phone:', companyPhone);
console.log('Employee 1:', emp1);
console.log('Employee 2:', emp2);
