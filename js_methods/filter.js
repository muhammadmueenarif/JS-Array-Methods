// filter method. it filters elements from array based on condition.
const people= [{name:'jan', age:'10'}, {name:'micheal', age:'18'}, {name:'jack', age:'20'}, 
{name:'david', age:'18'},]

var newpeople= people.filter(people=> people.age!=18);
console.log("people are:", newpeople);