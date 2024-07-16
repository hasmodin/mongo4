const express = require("express");
const mongoose = require("mongoose");
const employee = require("./models/db");
const app = express();

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
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})