const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const User = require("./Models/User.model.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req,res) => {
    res.send("this is Node ");
});
//get all
app.get('/api/users', async(req,res)=>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({messsage : error.messsage});
    }
})
//get by id
app.get('/api/users/:id', async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({messsage : error.messsage});
    }
})
//add
app.post('/api/AddUser', async (req,res) =>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({messsage : error.messsage, gayNigga});
    }
});

//update
app.put('/api/users/:id', async (req,res) =>{
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({messsage: "User not found"})
        }
        const updatedUser = await User.findById(id); 
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({messsage : error.messsage});
    }
});

//delete
app.delete('/api/Delete/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({message: "User was deleted successfully"})
    } catch (error) {
        res.status(500).json({messsage : error.messsage});
    }
});



mongoose.connect("mongodb+srv://Admin:jscOUpFQXH8etgfa@database.vgqctdq.mongodb.net/?retryWrites=true&w=majority&appName=Database")
.then(() => {
    console.log("Connected to the database!");
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
    console.log("Error. DB was not connected!")
});