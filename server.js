const express = require('express');
const db = require('./config/db');
const employeeRouter = require('./router/employeeRouter');
const cors = require("cors");

const app = express();

app.use(cors('*'));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Employee API is running"
    });
});

app.use("/employees", employeeRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});