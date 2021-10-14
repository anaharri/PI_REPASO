const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('episode', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    episode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}
