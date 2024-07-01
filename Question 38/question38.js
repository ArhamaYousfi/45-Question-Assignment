function city_country(city, country) {
    // return `"${city} , ${country}"`
    console.log("\"".concat(city, " , ").concat(country, "\""));
}
;
city_country("Karachi", "Pakistan");
var mycity = city_country("Karachi", "Pakistan");
console.log(mycity);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Riyaz", "Saudi Aarab"));
