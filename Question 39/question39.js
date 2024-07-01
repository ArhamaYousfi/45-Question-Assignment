function make_album(artistName, AlbumTitle) {
    return { artistName: artistName, AlbumTitle: AlbumTitle };
}
;
var album1 = make_album("Ali", "Rang-e-Mohabbat");
var album2 = make_album("Meesum", "Roshan Andhera");
var album3 = make_album("Ayaz", "MOsam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistName, AlbumTitle, numberofTrack) {
    return { artistName: artistName, AlbumTitle: AlbumTitle, numberofTrack: numberofTrack };
}
;
var album4 = make_album2("Ahtishan", "Dil hai", 30);
var album5 = make_album2("Ahad", "teri kahani", 55);
var album6 = make_album2("Arsalan", "Lela majno", 37);
console.log(album4);
console.log(album5);
console.log(album6);
