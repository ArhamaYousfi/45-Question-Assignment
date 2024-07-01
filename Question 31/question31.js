var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["user1", "user6", "user6", "admin", "user9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (current_Users) { return current_Users.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username "));
    }
    else {
        console.log("".concat(newUser, " is available "));
    }
});
