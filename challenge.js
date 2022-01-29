// challenge-1

function namta(num) {
    for (var i = 0; i <= 10; i++) {
        console.log(num, 'X', i, '=', i * num);
    }
}

namta(13);


// challenge-2
function UpperToLower(name) {
    var upper = name.toUpperCase();
    var lower = upper.toLowerCase();
    return lower;
}
var Name = UpperToLower('JANNATUL MITHILA');
console.log(Name);


// challenge-3

function fullName(firstName, lastName) {
    var connectName = firstName + ' ' + lastName;
    return connectName;
}

var myName = fullName('jannatul', 'mithila')
console.log(myName);


//challenge-4

function makeSqure(number) {
    var squre = number * number;
    return squre;
}
var num = makeSqure(8);
console.log(num);

//extra challenge

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    sarves: 2,
}

var print = pizza.toppings[2];
console.log(print);

