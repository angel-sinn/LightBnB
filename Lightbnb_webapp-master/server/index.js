// Connect to database using node-postgres
const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "lightbnb",
});

module.exports = {
  query: (text, params) => {
      console.log("db text:", text,);
      console.log("db params:", params);
    return pool.query(text, params);
  },
};
