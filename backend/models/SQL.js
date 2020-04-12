module.exports = Object.freeze({
    // USERS
    INSERT_INTO_USERS : 'INSERT INTO USERS(name, surname, nickname, password, user_role_id) VALUES (?, ?, ?, ?, ?)',
    FIND_USER_BY_NICKNAME : 'SELECT * FROM USERS WHERE nickname = ?',

    // PLAYLISTS
    FIND_PLAYLISTS_BY_USER_ID : 'SELECT name, playlist_id FROM PLAYLIST WHERE user_id = ?',
});