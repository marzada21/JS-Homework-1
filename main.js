// JS Homework #1

// ----- Exercise 1 ----- //

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findName(str, names) {
    for (i = 0; i < names.length; i++) {
        if (str.toLowerCase().includes(names[i].toLowerCase())) {
            console.log('Matched ' + names[i]);
            return;
        }
    }
    console.log('No Matches')
}

findName(dog_string, dog_names);

// ----- Exercise 2 ----- //

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i+= 2) {
        arr.splice(i, 1, 'even index');
    }
}

replaceEvens(arr)
console.log(arr)