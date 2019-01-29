'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Guilds of Ravnica",
        abbreviation: "GRN",
        createdAt: new Date(),
        updatedAt: new Date(),
        groupID:2290
      },
      {
        name: "Core 2019",
        abbreviation:"M19",
        createdAt: new Date(),
        updatedAt: new Date(),
        groupID:2250
      },
      {
        name: "Dominaria",
        abbreviation:"DOM",
        createdAt: new Date(),
        updatedAt: new Date(),
        groupID:2199
      },
      {
        name: "Rivals of Ixalan",
        abbreviation:"RIX",
        createdAt: new Date(),
        updatedAt: new Date(),
        groupID:2098
      },
      {
        name: "Ixalan",
        abbreviation:"XLN",
        createdAt: new Date(),
        updatedAt: new Date(),
        groupID:2043
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
        tcgID:162150
      },
      {
        name:"Carnage Tyrant",
        price:30.00,
        category:catas[4].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:142022,
      },
      {
        name:"Arclight Phoenix",
        price:25.00,
        category:catas[0].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:176685
      },
      {
        name:"Rekindling Phoenix",
        price:24.00,
        category:catas[3].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:155691,
      },
      {
        name:"Nicol Bolas, the Ravager",
        price:23.00,
        category:catas[1].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:168740
      },
      {
        name:"Karn, Scion of Urza",
        price:22.02,
        category:catas[2].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:162259
      },
      {
        name:"Vivien Reid",
        price:22.00,
        category:catas[1].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:168614
      },
      {
        name:"The Immortal Sun",
        price:18.00,
        category:catas[3].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:155586
      },
      {
        name:"History of Benalia",
        price:16.00,
        category:catas[2].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:162200
      },
      {
        name:"Resplendent Angel",
        price:15.00,
        category:catas[1].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:168773
      },
      {
        name:"Search for Azcanta",
        price:15.00,
        category:catas[4].abbreviation,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tcgID:145370
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

