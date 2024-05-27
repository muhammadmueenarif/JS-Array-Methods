// Shift method. it is same as pop. but pop removes last element and shift removes 1 element. 
// it can give us the deleted element back as in below example. 
const users =['kashan', 'ali', 'ahsan', 'ahmed', 'hassan', 'anees'];
var firstuser=  users.shift();
console.log('users are:', users);
console.log('the deleted user is:', firstuser);