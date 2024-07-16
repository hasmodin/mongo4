const express = require("express");
const mongoose = require("mongoose");
const employee = require("./models/db");
const path = require("path");
const methodOverride = require("method-override");
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.use(express.urlencoded({extended :true}));

app.use(methodOverride('_method'));


main()
.then((result) => {
    console.log("connection success");
})
.catch((err) => {
    console.log(err);
})


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/katara');


}


// const empl1 = new employee({
//     name: "Hasmodin Ansari",
//     email: "hassa123@gmail.com",
//     designation: "photographer",
//     salary: 5000,
//     joining_date: new Date(),
// });
// empl1.save()
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })


app.get("/", (req, res) => {
    res.send("root is working");
});

app.get("/employees", async (req, res) => {
    const allEmployees =  await employee.find();
   
    res.render("index.ejs", {allEmployees});
});

app.get("/employees/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/employees", (req, res) => {
    let {name, email, designation, salary} = req.body;
    let updatedEmployee = new employee({
        name: name,
        email: email,
        designation: designation,
        salary: salary,
        joining_date: new Date(),
    })
    updatedEmployee.save()
    console.log(updatedEmployee);
    res.redirect("/employees");
});

app.get("/employees/:id/edit", async (req, res) => {
    let {id} = req.params;
    let employee1 = await employee.findById(id);
    res.render("edit.ejs", {employee1});
});

app.put("/employees/:id", async (req, res) => {
    let {id} = req.params;
    let {email: newEmail} = req.body;
    let updatedEmployee = await employee.findByIdAndUpdate(id, {email: newEmail});
   
    res.redirect("/employees");
    
})

app.delete("/employees/:id", async (req, res) => {
    let {id} = req.params;
    let deleteEmployee = await employee.findByIdAndDelete(id);
    res.redirect("/employees");
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})