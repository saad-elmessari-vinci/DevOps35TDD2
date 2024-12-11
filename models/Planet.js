const db = require("../models/db_conf");

module.exports.findByName = (name) => {
  return db
    .prepare("SELECT * FROM solar_system_planets WHERE name = ?")
    .get(name);
};

module.exports.list = () => {
  return db.prepare("SELECT * FROM solar_system_planets ").all();
};

module.exports.add = (data) => {
  const stmt = db.prepare(
    "INSERT INTO solar_system_planets (name, type, size, mass,density,atmosphere_composition) VALUES (?, ?, ?, ?,?,?)"
  );
  stmt.run(
    data.name,
    data.type,
    data.size,
    data.mass,
    data.density,
    data.atm_composition
  );
};
