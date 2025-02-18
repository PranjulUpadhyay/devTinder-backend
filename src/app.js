const express = require('express');

// creating instance of express
const app = express();

//port listen
app.listen(3000, ()=>{
    console.log("Server Started...");
});

// GET request handle
app.get("/user", (req, res) => {
    // console.log(req.query);
    res.send({firstname: "Pranjul", lastname: "Upadhyay"});
});

app.get("/user/:userID/:name/:password", (req, res) => {
    console.log(req.param);
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



// Adavanced Routing Concepts
app.get("/a(bd)?c", (req, res) => {
    res.send("abc ? wala");
});

app.get("/AB+C", (req, res) => {
    res.send("ABC + wala");
});

app.get("/EF*G", (req, res) => {
    res.send("EFG * wala");
});

app.get(/p/, (req, res) => {
    res.send("P regex wala");
});

app.get(/.*fly$/, (req, res) => {
    res.send("Fly wala");
});