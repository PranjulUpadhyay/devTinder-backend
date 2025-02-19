const express = require('express');

// creating instance of express
const app = express();



// Import Auth from auth.js
const { adminAuth, userAuth } = require("./Middlewares/auth");

//Handle Admin requests

app.use("/admin", adminAuth);

app.get("/admin/deleteData", (req, res) => {
    res.send("User Deleted");
});

app.get("/admin/allData", (req, res) => {
    res.send("all Data");
});

// Handle User Request
app.get("/user/login", (req, res) => {
    res.send("Login");
});

app.get("/user/edit", userAuth, (req, res) => {
    res.send("user edit data");
});

app.get("/user/data", userAuth, (req, res) => {
    res.send("user Data");
});
        
        
        
//port listen
app.listen(3000, ()=>{
    console.log("Server Started...");
});