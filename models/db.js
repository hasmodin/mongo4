const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    salary: {
        type: Number
    },
    joining_date: {
        type: Date,

    }
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;