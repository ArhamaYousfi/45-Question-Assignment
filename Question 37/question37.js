function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, " is in ").concat(country);
}
;
// 3 Cities 
var a1 = describe_city("Karachi");
var a2 = describe_city("Lahore");
var a3 = describe_city("Tokyo", "Japan");
console.log(a1);
console.log(a2);
console.log(a3);
