const db = require("../models/db_conf");

module.exports.findByName = (name) => {
  return db
    .prepare("SELECT * FROM solar_system_planets WHERE name = ?")
    .get(name);
};
