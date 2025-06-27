let fruits = [];
function addFruits(fruitName){
    let found = fruits.find(fruit => fruit.name === fruitName);
    if (found) {
        found.count += 1;
    } else {fruits.push({ name:fruitName, count:1});
}
}
addFruits('apple');
    addFruits('apple');
    addFruits('apple');
    console.log(fruits);
