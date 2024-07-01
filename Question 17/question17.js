var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Switzerland", "China", "Paris", "Iran"];
console.log("original order:", places);
console.log("alphabetical order:", __spreadArray([], places, true).sort());
console.log("original places: , places");
console.log("reverse  alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("original places:", places);
places.reverse();
console.log("reversed order:", places);
places.sort();
console.log("alphabetical order:", places);
places.reverse();
console.log("reverse alphabetical order:", places);
