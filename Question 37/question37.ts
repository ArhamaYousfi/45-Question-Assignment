function describe_city (city : string, country : string ="Pakistan"){
    return `${city} is in ${country}`;
};

// 3 Cities 

let a1 =describe_city("Karachi")
let a2 =describe_city("Lahore")
let a3 =describe_city("Tokyo","Japan")


console.log(a1);
console.log(a2);
console.log(a3);
