module.exports = (sequelize, DataTypes) => {
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
  Games.sync();

  return Games;
};
