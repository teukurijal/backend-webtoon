'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('banners', [
        {
          title: 'Tsundere Boysfriends',
          url: 'https://swebtoon-phinf.pstatic.net/20190708_212/15625801951630WaKO_JPEG/banner_548x346.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Webtoons Legendaris',
          url: 'https://swebtoon-phinf.pstatic.net/20190905_299/15676636851905DKXg_JPEG/06_banner_548x346.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Take My Money',
          url: 'https://swebtoon-phinf.pstatic.net/20190925_52/1569390894735ivKqA_JPEG/Bigcard_PC.jpg?type=q90',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Sweet Home',
          url: 'https://swebtoon-phinf.pstatic.net/20190124_115/1548319256465NbrkF_JPEG/09_EBB985ECB9B4EB939C_pc.jpg?type=q90',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('banners', null, {});
  }
};
