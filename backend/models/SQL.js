module.exports = Object.freeze({
    INSERT_INTO_USERS : 'INSERT INTO USERS(name, surname, nickname, password, user_role_id) VALUES (?, ?, ?, ?, ?)',
    FIND_USER_BY_NICKNAME : 'SELECT * FROM USERS WHERE nickname = ?'
});