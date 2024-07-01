let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
let new_users: string[] = ["user1", "user6", "user8", "admin", "user9"];


new_users.forEach((newUser) => {
    if(
        current_users.some(
            (current_Users) => current_Users.toLowerCase() ===newUser.toLowerCase()
        )
    
    )
    {
        console.log(`${newUser} will need to enter a new username `)
    } else{
        console.log(`${newUser} is available `);
    }
});