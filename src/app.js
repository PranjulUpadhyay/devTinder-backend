const express = require('express');

// creating instance of express
const app = express();

//port listen
app.listen(3000, ()=>{
    console.log("Server Started...");
});

// GET request handle
app.get("/user", (req, res) => {
    res.send({firstname: "Pranjul", lastname: "Upadhyay"});
});

// POST reuest handle
app.post("/user", (req, res) => {
    res.send("Data Saved Successfully");
});

// DELETE request handle
app.delete("/user", (req, res) => {
    res.send("User Deleted");
});

// PATCH request handle
app.patch("/user", (req, res) => {
    res.send("Patched!!!");
});

