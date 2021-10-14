const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('character', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    episode: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    createdLocally: {
      type: DataTypes.BOOLEAN,
    },
  })
}
