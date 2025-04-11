function validateRegistration(user) {
    if (!user.username || !user.email || !user.password) {
        console.log("All fields are requried.");
        return false;
    }
    if (!user.email.includes("@")) {
        console.log("Invalid email.");
        return false;
    }
    if (user.password.length < 6) {
        console.log("Password must be at least 6 characters long.");
        return false;
    }
    console.log("Validation successful.");
    return true;
}
var newUser = {
    username: "johndoe",
    email: "john@gmail.com",
    password: "password123"
};
validateRegistration(newUser);
