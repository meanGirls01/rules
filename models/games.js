//game table
//name of game
//description
//country of origin
//game time
//rule ids foreign key?

//make game first, attach id to all the rules for said game

module.exports = function (sequelize, DataTypes) {
  let Games = sequelize.define("Games", {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },

    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },

    country_origin: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },

    play_time: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },

    //asso
  });

  return Games;
};


//instruction table
//each instruction would be its one table with an id
//game_id foreign key to id of game name
// varchar255 not null
// varchar255
// varchar255
// varchar255
//loop through and create 

//two models, 