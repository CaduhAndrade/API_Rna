const configfile = require("./config-db.json");

exports.getConnectionString = () => {
  const { host, port, database, user, password } = configfile;

  return `postgres://${user}:${password}@${host}:${port}/${database}`;
};
