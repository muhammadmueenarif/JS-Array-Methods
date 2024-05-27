
// map method. it will create exact copy of array. we can pass array, index and get complete array output or conditional output.

const array= [{name:'ali', class:'1'}, {name:'ahsan', class:'2'},{name:'kashan', class:'3'},
{name:'abdullah', class:'3'},{name:'hamza', class:'3'},{name:'raza', class:'2'}];
console.log('array is:', array);
const newarray= array.map((array, index) => index);
console.log("new array is:", newarray);