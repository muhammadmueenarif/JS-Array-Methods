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
