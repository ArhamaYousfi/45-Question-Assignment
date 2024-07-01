let places : string[] = ["Switzerland" , "China" , "Paris" , "Iran"  ] ;
console.log("original order:" , places ) ;

console.log("alphabetical order:" , [...places].sort() ) ;

console.log("original places: , places") ;

console.log("reverse  alphabetical order:" , [...places].sort().reverse()) ;

console.log("original places:" , places) ;

places.reverse();
console.log("reversed order:" , places) ;

places.sort() ;
console.log("alphabetical order:" , places) ;

places.reverse() ;
console.log("reverse alphabetical order:" , places) ;
