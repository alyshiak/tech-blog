const { User } = require('../models');
const sequelize = require('../config/connection');

const userdata =
[
  {
    "username": "Alyshia",
    "password": "password123"
  },
  {
    "username": "Jack",
    "password": "password456"
  },
  {
    "username": "Tom",
    "password": "password789"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;