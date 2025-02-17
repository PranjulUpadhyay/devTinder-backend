const express = require('express');

// creating instance of express
const app = express();

//port listen
app.listen(3000, ()=>{
    console.log("Server Started...");
});

//request handle

app.use("/profile",(req, res) => {
    res.send("Welcome to Profile");
});

app.use("/test", (req, res)=>{
    res.send("Testing Zone");
});

app.use("/payment", (req, res)=>{
    res.send("Payment Page");
});

app.use("/abc", (req, res)=>{
    res.send("ABCDEF");
});

app.use("/", (req, res)=>{
    res.send("DashBoard hai");
})
