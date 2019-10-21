'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        email: 'tmrijalul@dw.id',
        password: '1q2w3e4r5t',
        name: 'Teuku Rijal',
        image: "asdasdadada"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
