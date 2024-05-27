// splice method. delete item at given index, give us back the deleted item, and insert new item at that index. 
// it can remove multiple items on index(start, and end).

const animals =['hen', 'cock', 'parrot', 'lion', 'cat', 'dog'];
const deletedanimal= animals.splice(0,1, 'Dog');
console.log("animals are:", animals);
console.log('deleted animals are:', deletedanimal);