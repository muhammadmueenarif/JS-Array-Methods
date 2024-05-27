Create files and add script tag in it and connect js file. 

first method is push method. it is used to push or add new element to existing array. it adds element at the end of array.
cannot add at the specific index. if we want so we use splice method. 

second is pop method. it is used to remove an element from array. if we do not give index number it will delete
the element at last index of array. 
it deletes the last element and cannot delete specific index element. 

third is shift method. it is same as pop. but pop removes last element and shift removes first element and then
all other elements are shifted one place behind. it can give us the deleted element. check example in code.
we can delete specific element by splice or filter method. 

next is unshift method. it gives us to option to put item in array. it inserts new element at the start of array. 

5 is splice method. it can remove the item on specific index that we will give and then it can also give back that 
deleted item and it will also insert new item at that index. we can delete multiple items start and end index.

6 is slice method. it gives us copy of the array that we want. we can get specific index values from array also. like start from 
index 0 and total 3 values of array. array.slice(0,3). if we do not specify, it will gives complete array. 

7 is concat method. it will combine two arrays into one. like combine arrays of boys and girls.

Now, the next methods will be for loops.
foreach method. it is like for loop. it performs action for each item of the array.
take example. if we have array of users with their name and age, we can get age of users by users.foreach(user) {console.log(users.age);} 

2 loop method is find method. it will search for each element in array and find the element that we need based on condition. 
it will return only first element. if there are multiple, it will return only first element. 
for example find person from array with age 20. 

Next is filter method. it will filter items from array according to condition. it is mostly used in js. 
it does not gives only first element but gives all the matching elements.  
search bar in website use filter method. we can filter items of specific type like age=22 and then delete these filtered items. 


Map method. it will loop in each item of array just like foreach. we can create exact copy of array with its help. 
we can also pass index with array like array.map(arrayname, index)


sort method. it will sort data by any attribute like name, age etc., 
const students=[{name:'raza', age:'14'}, {name:'ali', age:'17'},{name:'hassan', age:'12'},
    {name:'ahmed', age:'20'},{name:'afaq', age:'13'},{name:'bilal', age:'12'},{name:'mohsin', age:'10'}];

    console.log("students are:", students);
    two parameters passed a and b. it compares age of first with other second item and if age of first is
greater it will return true and put it below in sorting and if it is false then return -1 and put first. 

    students.sort((a,b)=> {
        if (a.age >b.age) {
        return 1;            
        } else {
            return -1;
        }
    });

we can do this without writing if else. 
students.sort((a,b)=> a.age > b.age ? 1 : -1). 
this is ternary operator that can be used at the place of single if else statement. after ? true output is 
written and after : false result is written. we can reverse the sort order it by reversing the condition. 

console.log('sorted students are:', students);


next is reverse method. it reverses the array. it changes the given array and store new reversed array.

join method. it gives an option to use array as string. by default it separates with , but we can use anyother 
symbol like - to separate by providing it in the join().