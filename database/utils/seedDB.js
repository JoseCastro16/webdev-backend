const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Jose",
    lastname: "Castro",
    department: "Finance",
  });
  const dummyEmployee2 = await Employee.create({
    firstname: "Cristiano",
    lastname: "Ronaldo",
  });

  const dummyTask = await Task.create({
    description: "Homework",
    priority: "Low",
    status: "Completed",
  });

  const dummyTask2 = await Task.create({
    description: "Final",
    priority: "High",
    status: "Not Completed",
  });

  const dummyTask3 = await Task.create({
    description: "Find a club",
    priority: "Medium",
    status: "Not Completed",
  });

  await dummyTask.setEmployee(dummyEmployee);
  await dummyTask3.setEmployee(dummyEmployee2);
};

module.exports = seedDB;
