'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define('Reservation', {
    start_date_time: DataTypes.DATE,
    end_date_time: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Reservation.belongsTo(User),
        Reservation.belongsTo(Spot);
      }
    }
  });
  return Reservation;
};
