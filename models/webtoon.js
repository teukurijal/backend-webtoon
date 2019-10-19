'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoon', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  webtoon.associate = function(models) {
    // associations can be defined here
    webtoon.belongsTo(models.user, {
      as: 'userid',
      foreignKey: 'createdBy',
    })
    // webtoon.hasMany(models.episode,{
    //   as: 'episode',
    //   foreignKey:'toonId'
    // })

  };
  return webtoon;
}