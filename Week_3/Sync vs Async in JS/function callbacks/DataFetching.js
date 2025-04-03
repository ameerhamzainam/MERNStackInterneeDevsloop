//You are given an array of user IDs, and you need to fetch user details from a simulated API using a callback.

// 🔹 Task:
// Write a function fetchUserData(id, callback) that simulates fetching user data asynchronously using setTimeout.
// Write a function getAllUsers(userIds, callback) that takes an array of user IDs and uses fetchUserData to get all user details.
// Once all user details are fetched, the final callback should be executed with the array of user data.
function fetchUserData(id, callback) {
    setTimeout(() => {
        let user = {
            id: id,
            user: `User ${id}`
        }
        callback(user)
    }, 2000);


}
function getAllUsers(userIds, callback) {
    let users = [];
    let completedRequest = 0;
    for (const id of userIds) {
        fetchUserData(id, (user) => {
            users.push(user);
            completedRequest++;
            if (userIds.length === completedRequest) {
                callback(users)
            }
        })

       
    }

}

const userIds = [100, 101, 102, 103, 104, 105];

getAllUsers(userIds, (users) => {
    console.log("data fetched successfull:", users)
})