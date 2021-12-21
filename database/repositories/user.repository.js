const pgClient = require('../index');

exports.getUserById = async (id) => {
  try {
    const user = await pgClient.query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`);
    return { result: user.rows[0] };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getUsersByName = async (name) => {
  try {
    const user = await pgClient.query(`SELECT * FROM users WHERE firstname = ${name} LIMIT 1`);
    return { result: user.rows[0] };
  } catch (e) {
    return null;
  }
};

exports.createUser = async (email, name) => {
  try {
    await pgClient.query(`INSERT INTO users(email, name) VALUES ('${email}', '${name}')`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};

//какие параметры передаем в body???
exports.updateUser = async (replace, past) => {
  try {
    await pgClient.query(`UPDATE users SET adress = '${replace}' WHERE adress = '${past}'`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};


