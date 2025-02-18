const express = require('express');

// creating instance of express
const app = express();

//port listen
app.listen(3000, ()=>{
    console.log("Server Started...");
});


// Multiple Request Handlers
app.use("/user",
    (req, res, next) => {
        next();
        console.log("Handled Handler 1");
        res.send("Request 1");
    },

    (req, res, next) => {
        console.log("Handles Handler 2");
        // res.send("Request 2");
        next();
    },

    (req, res, next) => {
        console.log("Handles Handler 3");
        // res.send("Request 3");
        next();
    },

    (req, res, next) => {
        console.log("Handles Handler 4");
        // res.send("Request 4");
        next();
    },

    (req, res, next) => {
        console.log("Handles Handler 5");
        res.send("Request 5");
        // next();
    }
);










// // GET request handle
// app.get("/user", (req, res) => {
//     // console.log(req.query);
//     res.send({firstname: "Pranjul", lastname: "Upadhyay"});
// });

// app.get("/user/:userID/:name/:password", (req, res) => {
//     console.log(req.param);
//     res.send({firstname: "Pranjul", lastname: "Upadhyay"});
// });

// // POST reuest handle
// app.post("/user", (req, res) => {
//     res.send("Data Saved Successfully");
// });

// // DELETE request handle
// app.delete("/user", (req, res) => {
//     res.send("User Deleted");
// });

// // PATCH request handle
// app.patch("/user", (req, res) => {
//     res.send("Patched!!!");
// });



// // Adavanced Routing Concepts
// app.get("/a(bd)?c", (req, res) => {
//     res.send("abc ? wala");
// });

// app.get("/AB+C", (req, res) => {
//     res.send("ABC + wala");
// });

// app.get("/EF*G", (req, res) => {
//     res.send("EFG * wala");
// });

// app.get(/p/, (req, res) => {
//     res.send("P regex wala");
// });

// app.get(/.*fly$/, (req, res) => {
//     res.send("Fly wala");
// });