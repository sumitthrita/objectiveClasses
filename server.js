require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT|| 5000; 

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once("open", () => console.log("mongodb connection started"))
const registerationSchema = mongoose.Schema({
    name: String,
    contact: Number,
    email: String,
    address: String,
    course: String
});

const Registration = mongoose.model("Registration", registerationSchema);

const contactSchema = mongoose.Schema({
    name: String,
    contact: Number,
    email: String,
    message: String
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/api/registration", (req,res) => {
    const registration = new Registration({
        name: req.body.name,
        contact: Number(req.body.contact),
        email: req.body.email,
        address: req.body.address,
        course: req.body.course
    });
    registration.save()
    .then(() => res.json("We have got your details. Your Registration is in process. We will call you soon."))
    .catch(err => res.status(400).json("Error: "+ err));
});

app.post("/api/contact", (req,res) => {
    const contact = new Contact ({
        name: req.body.name,
        contact: Number(req.body.contact),
        email: req.body.email,
        message: req.body.message
    });
    contact.save()
    .then(() => res.json("We have got your message. We will call you soon to solve your problem."))
    .catch(err => res.status(400).json("Error: "+ err));
})



app.listen(port, () => console.log(`Server has started on port: ${port}`));