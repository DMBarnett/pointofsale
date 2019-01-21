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
    return queryInterface.bulkInsert("items", [
      {
        name:"Adamant Will",
        price:0.05,
        category:"DOM",
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Aven Sentry",
        price:0.05,
        category:"DOM",
        quantity: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Baird, Steward of Argive",
        price:0.05,
        category:"DOM",
        quantity: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Benalish Honor Guard",
        price:0.05,
        category:"DOM",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Benalish Marshal",
        price:0.05,
        category:"DOM",
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Blessed Light",
        price:0.05,
        category:"DOM",
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Board the Weatherlight",
        price:0.05,
        category:"DOM",
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Call the Cavalry",
        price:0.05,
        category:"DOM",
        quantity: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Charge",
        price:0.05,
        category:"DOM",
        quantity: 88,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"D’Avenant Trapper",
        price:0.05,
        category:"DOM",
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
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
