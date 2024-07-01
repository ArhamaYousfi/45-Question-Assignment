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

let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatmagicians: string[] = [];
    magicians.forEach(magician => {
        greatmagicians.push(`${magician} the Great`);
    });
    return greatmagicians;
}

const greatMagicians = make_great(magicians);
console.log(greatMagicians);  

// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let greatmagicians = make_great(magicians.slice());

console.log("Original magicians:");
show_magicians(magicians);

console.log("Great magicians:");
show_magicians(greatmagicians);