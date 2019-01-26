'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Guilds of Ravnica",
        abbreviation: "GRN",
        groupID:2290,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Core 2019",
        abbreviation:"M19",
        groupID:2250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dominaria",
        abbreviation:"DOM",
        groupID:2199,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rivals of Ixalan",
        abbreviation:"RIX",
        groupID:2098,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ixalan",
        abbreviation:"XLN",
        groupID:2043,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    const foo = await queryInterface.sequelize.query(
      "SELECT abbreviation from CATEGORIES"
    );
    const catas = foo[0]
    console.log(catas)

    return await queryInterface.bulkInsert("items", [
      {
        name:"Teferi, Hero of Dominaria",
        price:52.00,
        category:catas[2].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Carnage Tyrant",
        price:30.00,
        category:catas[4].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Arclight Phoenix",
        price:25.00,
        category:catas[0].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Rekindling Phoenix",
        price:24.00,
        category:catas[3].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Nicol Bolas, the Ravager",
        price:23.00,
        category:catas[1].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Karn, Scion of Urza",
        price:22.00,
        category:catas[2].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Vivien Reid",
        price:22.00,
        category:catas[1].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"The Immortal Sun",
        price:18.00,
        category:catas[3].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"History of Benalia",
        price:16.00,
        category:catas[2].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Resplendent Angel",
        price:15.00,
        category:catas[1].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Search for Azcanta",
        price:15.00,
        category:catas[4].abbreviation,
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

