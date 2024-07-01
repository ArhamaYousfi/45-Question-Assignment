// let magicians: string[] =["Aayan","Saif","Abdul Ahad"];
// const greatMagicians = make_great(magicians);
// console.log(greatMagicians);  
// // Function to show magicians
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// let greatmagicians = make_great(magicians.slice());
// console.log("Original magicians:");
// show_magicians(magicians);
// console.log("Great magicians:");
// show_magicians(greatmagicians);
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatmagicians = [];
    magicians.forEach(function (magician) {
        greatmagicians.push("".concat(magician, " the Great"));
    });
    return greatmagicians;
}
var greatMagicians = make_great(magicians);
console.log(greatMagicians);
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatmagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatmagicians);
