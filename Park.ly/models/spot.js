'use strict';
module.exports = function(sequelize, DataTypes) {
  var Spot = sequelize.define('Spot', {
    address: DataTypes.STRING,
    start_date_time: DataTypes.DATE,
    end_date_time: DataTypes.DATE,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Spot.belongsTo(User),
        Spot.hasMany(Reservation);
      }
    }
  });
  return Spot;
};
