'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('pages',  [
        {
          page: 1,
          image:
            'https://swebtoon-phinf.pstatic.net/20141216_300/14186577318388F1Hj_JPEG/14186577317869515.jpg',
          episodeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          page: 2,
          image:
            'https://swebtoon-phinf.pstatic.net/20141216_297/1418657731844vhrIu_JPEG/14186577317939513.jpg',
          episodeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          page: 3,
          image:
            'https://swebtoon-phinf.pstatic.net/20141216_199/1418657731838lN86V_JPEG/14186577317859517.jpg',
          episodeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('pages', null, {});

  }
};
