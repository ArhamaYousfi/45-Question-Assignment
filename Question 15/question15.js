var guests = ["Fareeha", "Muskan", "khizra"];
//console.log("Great news! I found a bigger dinner table!")
guests.unshift("Maham");
guests.splice(2, 0, "Minal");
guests.push("Fatima");
console.log("Dear ".concat(guests, ", would you like to join me for dinner? "));
