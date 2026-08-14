const express = require('express');
const Employee = require("../models/Employee");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }aa
});

router.get("/:id", async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, email, department, role, salary } = req.body;

        if (!name) return res.status(400).json({ message: "Name is required" });
        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!department) return res.status(400).json({ message: "Department is required" });
        if (!role) return res.status(400).json({ message: "Role is required" });
        if (!salary) return res.status(400).json({ message: "Salary is required" });

        const employee = new Employee({ name, email, department, role, salary });
        await employee.save();

        res.status(201).json({ message: "Employee created successfully", employee });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({ message: "Employee updated successfully", employee });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Employee deleted successfully", employee });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;