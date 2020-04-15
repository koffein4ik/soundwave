module.exports = Object.freeze({
    // USERS
    INSERT_INTO_USERS : 'INSERT INTO USERS(name, surname, nickname, password, user_role_id) VALUES (?, ?, ?, ?, ?)',
    FIND_USER_BY_NICKNAME : 'SELECT * FROM USERS WHERE nickname = ?',

    // PLAYLISTS
    FIND_PLAYLISTS_BY_USER_ID : 'SELECT name, playlist_id FROM PLAYLIST WHERE user_id = ?',


    //SEARCH
    FIND_ALBOMS_BY_NAME: 'SELECT * FROM ALBUM WHERE name LIKE ?',
    FIND_ARTISTS_BY_NAME: 'SELECT * FROM ARTIST WHERE name LIKE ?',
    FIND_SONGS_BY_NAME: 'SELECT * FROM SONGS WHERE name LIKE ?',
    FIND_ARTISTS_OF_SONG: 'SELECT artist_id FROM SONG_ARTIST WHERE song_id = ?',
    FIND_ARTIST_BY_ID: 'SELECT * FROM ARTIST WHERE artist_id = ?'
});