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
    return queryInterface.bulkInsert("customers", [
      {
        name:"cash",
        store_credit: 50.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "john cussack",
        store_credit: 50.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "joan riversk",
        store_credit: 300.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "robert redford",
        store_credit: 10.00,
        createdAt: new Date(),
        updatedAt: new Date(),
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
