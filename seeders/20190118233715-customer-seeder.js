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
        name: "John Cussack",
        store_credit: 50.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joan Riversk",
        store_credit: 300.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Robert Redford",
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
