
module.exports = function (sequelize, DataTypes) {
  let Games = sequelize.define('Games', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      }
    },

    country_origin: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    category: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    instructions: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      }
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  });

  //association to the rules
  Games.associate = function (models) {
    models.Games.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
  };


  Games.sync();

  return Games;

};

