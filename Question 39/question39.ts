function make_album (artistName : string , AlbumTitle : string){
    return {artistName,AlbumTitle}
};

let album1 =make_album("Muskan","Rang-e-Mohabbat");
let album2 =make_album("Fariha","Roshan Andhera");
let album3 =make_album("Khizra","MOsam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);



function make_album2 (artistName : string , AlbumTitle : string , numberofTrack? : number){
    return {artistName,AlbumTitle,numberofTrack}
};

let album4 =make_album2("Noor","Dil h",56);
let album5 =make_album2("bisma","teri kahani", 34);
let album6 =make_album2("Maya","Lela majno", 78);

console.log(album4);
console.log(album5);
console.log(album6);