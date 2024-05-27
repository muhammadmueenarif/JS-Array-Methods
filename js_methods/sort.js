// sort method. we can sort data by any given atrribute. 
const students=[{name:'raza', age:'14'}, {name:'ali', age:'17'},{name:'hassan', age:'12'},
    {name:'ahmed', age:'20'},{name:'afaq', age:'13'},{name:'bilal', age:'12'},{name:'mohsin', age:'10'}];

    console.log("students are:", students);

    //two parameters passed a and b. it compares age of first with other second item and if age of first is
    // greater it will return true and put it below in sorting and if it is false then return -1 and put first. 

    students.sort((a,b)=> {
        if (a.age >b.age) {
        return 1;            
        } else {
            return -1;
        }
    });

    // we can do this without writing if else. 
    //students.sort((a,b)=> a.age > b.age ? 1 : -1). 
    // this is ternary operator that can be used at the place of single if else statement. after ? true output is 
    // written and after : false result is written. we can reverse the sort order it by reversing the condition. 

console.log('sorted students are:', students);