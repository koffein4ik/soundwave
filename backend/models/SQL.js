module.exports = Object.freeze({
    // USERS
    INSERT_INTO_USERS: 'INSERT INTO USERS(name, surname, nickname, password, user_role_id) VALUES (?, ?, ?, ?, ?)',
    FIND_USER_BY_NICKNAME: 'SELECT * FROM USERS WHERE nickname = ?',

    // PLAYLISTS
    FIND_PLAYLISTS_BY_USER_ID: 'SELECT name, playlist_id FROM PLAYLIST WHERE user_id = ?',
    INSERT_INTO_PLAYLIST: 'INSERT INTO PLAYLIST(name, user_id, picture_url) VALUES (?, ?, ?)',



    //SEARCH
    FIND_ALBOMS_BY_NAME: 'SELECT * FROM ALBUM WHERE name LIKE ?',
    FIND_ARTISTS_BY_NAME: 'SELECT * FROM ARTIST WHERE name LIKE ?',
    FIND_SONGS_BY_NAME_WITH_ITS_ARTISTS: 'SELECT SONGS.song_id,SONGS.name AS song_name, ' +
        'SONGS.url, ALBUM.picture_url, SONG_ARTIST.artist_id, ARTIST.name AS artist_name FROM SONGS ' +
        'LEFT JOIN ALBUM USING(album_id) LEFT JOIN SONG_ARTIST USING(song_id) ' +
        'LEFT JOIN ARTIST ON SONG_ARTIST.artist_id = ARTIST.artist_id WHERE SONGS.name LIKE ?',

    //Genres
    
	FIND_ALL_GENRES: 'SELECT * FROM genres',
    FIND_SONGS_BY_GENRE_ID: 'SELECT songs.name as song_name, songs.song_id, songs.url, artist.name as artist_name, ' +
        'artist.artist_id, album.picture_url as album_picture_url FROM SONGS join song_artist sa on ' +
        'songs.song_id = sa.song_id join artist on sa.artist_id = artist.artist_id join album on ' +
        'songs.album_id = album.album_id where songs.genre_id= ? ORDER BY songs.song_id',
    //FIND_SONGS_BY_GENRE_ID: 'SELECT * FROM SONGS WHERE genre_id = ?'

	//ARTIST
    FIND_ALBUMS_OF_ARTIST_WITH_SONGS:'SELECT ALBUM.album_id, ALBUM.name AS album_name, ALBUM.picture_url '+
        'AS album_picture_url, SONGS.song_id, SONGS.name AS song_name, SONGS.url, ARTIST.artist_id,'+
        'ARTIST.name AS artist_name, ARTIST.picture_url AS artist_picture_url FROM ALBUM '+
        'LEFT JOIN SONGS USING(album_id) LEFT JOIN SONG_ARTIST USING(song_id)' +
        'LEFT JOIN ARTIST ON SONG_ARTIST.artist_id = ARTIST.artist_id WHERE ALBUM.artist_id = ?',
});