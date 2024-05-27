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

// const boys=['ali', 'ahmad', 'hassan'];
// const girls= ['asma', 'farwa', 'hadia', 'shaista'];
// const users= boys.concat(girls);
// console.log("users are:", users);



// the next methods are for loops.
// forEach(); it is like for loop. if we have users with names and age, we can use it to get age of users from array. 

// const users = [{name:"john", age:"23"},
//  {name: "jack", age:"22"}, 
//  {name:"william", age:"25"} ];

//  users.forEach((users)=> {
// console.log(users.name, ":", users.age, "years");
//  })


// find method. it will search in array and give first element that fulfills condition.
// const male= [{name:'ali', age:20}, {name:'ahsan', age:'24'}, {name:'furqan', age:'22'}, {name:'mana', age:'25'}, 
// {name:'zulqarnain', age:'29'}];
// var newmale= male.find(male=> male.age==20);
// console.log("the person is:",newmale);



// filter method. it filters elements from array based on condition.
// const people= [{name:'jan', age:'10'}, {name:'micheal', age:'18'}, {name:'jack', age:'20'}, 
// {name:'david', age:'18'},]

// var newpeople= people.filter(people=> people.age!=18);
// console.log("people are:", newpeople);


// map method. it will create exact copy of array. we can pass array, index and get complete array output or conditional output.

// const array= [{name:'ali', class:'1'}, {name:'ahsan', class:'2'},{name:'kashan', class:'3'},
// {name:'abdullah', class:'3'},{name:'hamza', class:'3'},{name:'raza', class:'2'}];
// console.log('array is:', array);
// const newarray= array.map((array, index) => index);
// console.log("new array is:", newarray);


// sort method. we can sort data by any given atrribute. 
// const students=[{name:'raza', age:'14'}, {name:'ali', age:'17'},{name:'hassan', age:'12'},
//     {name:'ahmed', age:'20'},{name:'afaq', age:'13'},{name:'bilal', age:'12'},{name:'mohsin', age:'10'}];

//     console.log("students are:", students);

    //two parameters passed a and b. it compares age of first with other second item and if age of first is
    // greater it will return true and put it below in sorting and if it is false then return -1 and put first. 

    // students.sort((a,b)=> {
    //     if (a.age >b.age) {
    //     return 1;            
    //     } else {
    //         return -1;
    //     }
    // });

    // we can do this without writing if else. 
    //students.sort((a,b)=> a.age > b.age ? 1 : -1). 
    // this is ternary operator that can be used at the place of single if else statement. after ? true output is 
    // written and after : false result is written. we can reverse the sort order it by reversing the condition. 

// console.log('sorted students are:', students);


// reverse method. it reverse the given array. updates the given array and returns and store new reversed array.
const array=[{hen:'bird', color:'black'}, {parrot:'bird', color:'green'}, {cat:'animal', color:'white'},
{peacock:'bird', color:'white'},{dog:'animal', color:'black and white'}];
console.log('array is:', array);
var newarray= array.reverse(array);
console.log('new array is:', newarray);

