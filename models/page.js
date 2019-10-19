'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    page: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    toonId: DataTypes.INTEGER,
    episodeId: DataTypes.INTEGER
  }, {});
  page.associate = function(models) {
    // associations can be defined here
  };
  return page;
};