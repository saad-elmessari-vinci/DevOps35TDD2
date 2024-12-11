const db = require("../models/db_conf");

module.exports.add = (data) => {
  const stmt = db.prepare(
    "INSERT INTO proposals (name, type, size, mass,density,atmosphere_composition,user) VALUES (?, ?, ?, ?,?,?,?)"
  );
  stmt.run(
    data.name,
    data.type,
    data.size,
    data.mass,
    data.density,
    data.atm_composition,
    data.id
  );
};

module.exports.list = () => {
  return db.prepare("SELECT * FROM proposals WHERE status = 'Pending'").all();
};


module.exports.findById = (id) => {
  return db.prepare("SELECT * FROM proposals WHERE id_proposal = ?").get(id);
};

module.exports.updateStatus = (status,id) => {
  const stmt = db.prepare("UPDATE proposals SET status = ?  WHERE id_proposal=?");
  stmt.run(status,id);
};
