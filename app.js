// Push method to add new things in array.it adds at the end of array.
// const colors = ['Red', 'Orange', 'Black', 'Blue'];
// console.log("Old colors are:",colors);
// colors.push('White');
// console.log("Updated colors are:", colors);


// // Pop method used to delete element. deletes the last element and cannot delete specific index element. 
// const names= ['ali', 'ahmed', 'hassan', 'raza', 'usman'];
// names.pop();
// console.log('names are:', names);


// Shift method. it is same as pop. but pop removes last element and shift removes 1 element. 
// // it can give us the deleted element back as in below example. 
// const users =['kashan', 'ali', 'ahsan', 'ahmed', 'hassan', 'anees'];
// var firstuser=  users.shift();
// console.log('users are:', users);
// console.log('the deleted user is:', firstuser);


// unshift method. it gives us to option to put item in array. it inserts new element at the start of array. 
// const vehicles =['cars', 'buses', 'bikes', 'cycles', 'truck'];
// vehicles.unshift('Shehzore');
// console.log("The vehicles are:", vehicles);


// splice method. delete item at given index, give us back the deleted item, and insert new item at that index. 
// it can remove multiple items on index(start, and end).

// const animals =['hen', 'cock', 'parrot', 'lion', 'cat', 'dog'];
// const deletedanimal= animals.splice(0,1, 'Dog');
// console.log("animals are:", animals);
// console.log('deleted animals are:', deletedanimal);


// slice method. it gives us copy of array that we want. we can get specific index values from array also.
// // if we do not specify, it will gives complete array. 
// const fruits =['apple','banana', 'mango', 'orange', 'peach'];
// console.log("fruits are:", fruits);
// const newfruits= fruits.slice(0,2);
// console.log('new fruits are:', newfruits);


// concat method. if we want to combine two arrays, it will combine them in single array.

const boys=['ali', 'ahmad', 'hassan'];
const girls= ['asma', 'farwa', 'hadia', 'shaista'];
const users= boys.concat(girls);
console.log("users are:", users);


