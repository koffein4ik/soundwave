module.exports = Object.freeze({
    // USERS
    INSERT_INTO_USERS : 'INSERT INTO USERS(name, surname, nickname, password, user_role_id) VALUES (?, ?, ?, ?, ?)',
    FIND_USER_BY_NICKNAME : 'SELECT * FROM USERS WHERE nickname = ?',

    // PLAYLISTS
    FIND_PLAYLISTS_BY_USER_ID : 'SELECT name, playlist_id FROM PLAYLIST WHERE user_id = ?',


    //SEARCH
    FIND_ALBOMS_BY_NAME: 'SELECT * FROM ALBUM WHERE name LIKE ?',
    FIND_ARTISTS_BY_NAME: 'SELECT * FROM ARTIST WHERE name LIKE ?',
    FIND_SONGS_BY_NAME_WITH_ITS_ARTISTS: 'SELECT SONGS.song_id,SONGS.name AS song_name, SONGS.url, ALBUM.picture_url, SONG_ARTIST.artist_id, ARTIST.name AS artist_name FROM SONGS LEFT JOIN ALBUM USING(album_id) LEFT JOIN SONG_ARTIST USING(song_id) LEFT JOIN ARTIST ON SONG_ARTIST.artist_id = ARTIST.artist_id WHERE SONGS.name LIKE ?',
});