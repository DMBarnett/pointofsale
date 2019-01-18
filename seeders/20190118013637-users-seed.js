'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("users", [
      {
        username: "David",
        first_name:"David",
        last_name:"Barnett",
        manager:true,
        hire_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "admin"
      },
      {
        username: "Brian",
        first_name:"Brian",
        last_name:"Smith",
        manager:false,
        hire_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "admin"
      },
      {
        username: "John",
        first_name:"John",
        last_name:"Doe",
        manager:false,
        hire_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "admin"
      },
      {
        username: "Amy",
        first_name:"Amy",
        last_name:"Jones",
        manager:false,
        hire_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "admin"
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
