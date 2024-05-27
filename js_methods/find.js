
// find method. it will search in array and give first element that fulfills condition.
const male= [{name:'ali', age:20}, {name:'ahsan', age:'24'}, {name:'furqan', age:'22'}, {name:'mana', age:'25'}, 
{name:'zulqarnain', age:'29'}];
var newmale= male.find(male=> male.age==20);
console.log("the person is:",newmale);