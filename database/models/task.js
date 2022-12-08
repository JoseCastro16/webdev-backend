const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  priority: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Task;
