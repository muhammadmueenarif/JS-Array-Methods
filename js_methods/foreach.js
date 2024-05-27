// forEach(); it is like for loop. if we have users with names and age, we can use it to get age of users from array. 

const users = [{name:"john", age:"23"},
 {name: "jack", age:"22"}, 
 {name:"william", age:"25"} ];

 users.forEach((users)=> {
console.log(users.name, ":", users.age, "years");
 })