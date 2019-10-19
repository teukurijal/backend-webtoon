'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    toonId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  episode.associate = function(models) {
    // associations can be defined here
    episode.belongsTo(models.webtoon, {
      as: 'toonid',
      foreignKey: 'toonId',
    })

  };
  return episode;
};