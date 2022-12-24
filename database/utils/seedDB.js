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
    description: "Paperwork",
    priority: "Low",
    status: "Completed",
  });

  const dummyTask2 = await Task.create({
    description: "Do research",
    priority: "High",
    status: "Not Completed",
  });

  const dummyTask3 = await Task.create({
    description: "Answer emails",
    priority: "Medium",
    status: "Not Completed",
  });

  await dummyTask.setEmployee(dummyEmployee);
  await dummyTask3.setEmployee(dummyEmployee2);
};

module.exports = seedDB;
