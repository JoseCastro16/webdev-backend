const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Jose",
    lastname: "Castro",
    department: "Computer Science",
  });
  const dummyEmployee2 = await Employee.create({
    firstname: "Cristiano",
    lastname: "Ronaldo",
  });

  const dummyTask = await Task.create({
    description: "Homework",
    priority: "High",
    status: "In Progress",
  });

  const dummyTask2 = await Task.create({
    description: "Final",
    priority: "High",
    status: "In Progress",
  });

  await dummyTask.setEmployee(dummyEmployee);
};

module.exports = seedDB;
