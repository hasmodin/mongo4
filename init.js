const mongoose = require("mongoose");

const employee = require("./models/db");



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

let allemps = ([
    {
        name: "Ehan Ansari",
        email: "ehan123@gmail.com",
        designation: "photgrapher",
        salary: 5000,
        joining_date: new Date(),
    },

    {
        name: "Naimodin Ansari",
        email: "naimodin@gmail.com",
        designation: "Engineer",
        salary: 8000,
        joining_date: new Date(),
    },

    {
        name: "Samir Ansari",
        email: "samir@gmail.com",
        designation: "Banker",
        salary: 7000,
        joining_date: new Date(),
    },

    {
        name: "Sabina Khatun",
        email: "sabina123@gmail.com",
        designation: "Banker",
        salary: 6000,
        joining_date: new Date(),
    }
]);

employee.insertMany(allemps)
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})
