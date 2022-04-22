// Task1
let item_1;
// Task2
item_1 = 5;
// Task3
console.log(item_1);
//Task4
let item_2;
// Task5
item_2 = 3;
// Task6
console.log(item_2);
// Task7
let item_3;
// Task8
item_3 = item_1 + item_2;
// Task9
console.log(item_3);
//Task10
let item_4;
//Task11
item_4 = "Yolochka";
//Task12
console.log(item_4);
//Task13
console.log(item_3 + item_4);
//Task14
console.log(item_3 * item_4);
//Task15
let item_5;
//Task16
item_5 = item_3;
//Task17
let item_6;
//Task18
let item_6_type;
//Task19
item_6  = 15;
//Task20
item_6_type = item_6;
//Task21
console.log("item_6 == " + typeof item_6 + ", item_6_type == " + typeof item_6_type);
//Task22
let item_7;
item_7 = String(item_6);
console.log(typeof item_7);
//Task23
let item_7_type;
//Task24
item_7_type = Number(item_7);
//Task25
console.log("item_7 == " + typeof item_7 + " item_7_type == " + typeof item_7_type);
//Task26-33
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
if(age_1 < age_2) {
    console.log("You don't have access cause your age is " + age_1);
}
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!");
}
else if (age_1 > age_3) {
    console.log("Keep calm and look Culture Channel")
}
else {
    console.log("Technical work")
}

//Task 1*
function checkAge(age) {
    const adult = 18;
    const old = 60;
    if(age < adult) {
        console.log("You don't have access cause your age is " + age);
    }
    else if (age >= adult && age < old) {
        console.log("Welcome!");
    }
    else if (age > old) {
        console.log("Keep calm and look Culture Channel")
    }
    else {
        console.log("Technical work")
    }
}
// checkAge(60);

//Task 2*
function check(age) {
    if(typeof age == 'number') {
        const adult = 18;
        const old = 60;
        if(age < adult) {
            console.log("You don't have access cause your age is " + age);
    }
        else if (age >= adult && age < old) {
            console.log("Welcome!");
    }
        else if (age > old) {
            console.log("Keep calm and look Culture Channel")
    }
        else {
            console.log("Technical work")
    }
}
    else {
        console.log("Please enter a number");}
}
// check(2);

//Task 3**
function knownAge(age) {
    if(typeof age == 'number' && !Number.isNaN||  !isNaN(Number(age)) && typeof age != "boolean") {
        const adult = 18;
        const old = 60;
        if(age < adult) {
            console.log("You don't have access cause your age is " + age);
    }
        else if (age >= adult && age < old) {
            console.log("Welcome!");
    }
        else if (age > old) {
            console.log("Keep calm and look Culture Channel")
    }
        else {
            console.log("Technical work")
    }
}
    else {
        console.log("Please enter a number");}
}
knownAge('22');