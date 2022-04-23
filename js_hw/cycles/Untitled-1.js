// // Task 1
// for(let i = 1; i <= 10; i++) {
//     let a = 2;
//     let b = Math.pow(a, i);
//     console.log(a + " в степени "+ i + " = " + b); 
// }
// //Task 1*
// function degree(a) {
//     let b = Math.pow(2, a);
//     console.log(
//         "2 в степени " + a + " = " + b
//     );
// }
// degree(10);
// //Task 2
// for (let i = 1; i <=5; i++) {
//     console.log(":)".repeat(i));
// }
// //Task 2*
// function printSomething(text, number) {
//     for(let i = 1; i <= number; i++) {
//         console.log(text.repeat(i));
//     }
// }
// printSomething("HelloWorld ", 5);
// // Task 3**
// function getWordStructure(text1) {
//     let countOfGlasn = 0;
//     let countOfSogl = 0;
//     let glasniy = ["a", "A", "e", "E",  "i", "I", "o", "O", "u", "U"];
//     for (let i = 0; i < text1.length; i++) {
//         for (let b = 0; b < glasniy.length; b++) {
//             if (text1.charAt(i) == glasniy[b] ) {
//                 countOfGlasn++;
//                 break;
//             }
//         }
//     }
//     countOfSogl = text1.length-countOfGlasn;
//     console.log( `Слово ${text1} содержит ${countOfGlasn} гласных в слове и  ${countOfSogl} согласных`);
// }
// getWordStructure("h");
// Task 4**
function isPalindrom(word) {
    let str = '';
    for (let i = word.length - 1; i != -1; i--) {
        str += word[i];
    }
    if (word.toLowerCase === str.toLowerCase) {
        console.log(`${word} является палиндромом`)
    }
    else {
        console.log(`${word} не является палиндромом`);
    }
}
isPalindrom("Bab")