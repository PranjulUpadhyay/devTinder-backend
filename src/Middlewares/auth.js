// Admin
const adminAuth = (req, res, next) => {
    console.log("Admin Checking...");
    const token = "xyz";
    const validateAdmin = token === "xyz";

    if(!validateAdmin){
        res.status(401).send("Unauthorized access");
    }
    else{
        next();
    }
};

// User
const userAuth = (req, res, next) => {
    console.log("User Checking...");
    const token = "xayz";
    const validateAdmin = token === "xyz";

    if(!validateAdmin){
        res.status(401).send("Unauthorized access");
    }
    else{
        next();
    }
}; 

module.exports = {
    adminAuth,
    userAuth,
}