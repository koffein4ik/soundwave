module.exports = Object.freeze({
    // USERS
    INSERT_INTO_USERS: 'INSERT INTO USERS(name, surname, nickname, password, user_role_id) VALUES (?, ?, ?, ?, ?)',
    FIND_USER_BY_NICKNAME: 'SELECT * FROM USERS WHERE nickname = ?',

    // PLAYLISTS
    FIND_PLAYLISTS_BY_USER_ID: 'SELECT name, playlist_id as `id`, picture_url as `pictureURL` FROM PLAYLIST WHERE user_id = ?',
    INSERT_INTO_PLAYLIST: 'INSERT INTO PLAYLIST(name, user_id, picture_url) VALUES (?, ?, ?)',
    ADD_SONG_TO_PLAYLIST: 'INSERT INTO playlist_song(playlist_id, song_id) VALUES (?, ?)',

    FIND_PLAYLIST_SONGS_BY_ID: 'SELECT playlist.playlist_id, playlist.name AS playlist_name, playlist.user_id,' +
    'playlist.picture_url AS playlist_picture_url, playlist.shared, songs.song_id, songs.name AS song_name, songs.url,' +
    'album.picture_url AS album_picture_url, artist.artist_id, artist.name AS artist_name FROM PLAYLIST ' +
    'LEFT JOIN PLAYLIST_SONG USING(playlist_id) LEFT JOIN SONGS ON playlist_song.song_id = songs.song_id ' +
    'LEFT JOIN ALBUM USING(album_id) LEFT JOIN SONG_ARTIST ON songs.song_id = song_artist.song_id ' +
    'LEFT JOIN ARTIST ON song_artist.artist_id = artist.artist_id WHERE playlist.playlist_id = ?',
    CHANGE_PLAYLIST_STATE:'UPDATE PLAYLIST SET shared = ? where playlist_id = ?',
    FIND_PLAYLIST_INFO: 'SELECT playlist.user_id, playlist.shared FROM PLAYLIST WHERE playlist_id = ?',


    //SEARCH
    FIND_ALBOMS_BY_NAME: 'SELECT * FROM ALBUM WHERE name LIKE ?',
    FIND_ARTISTS_BY_NAME: 'SELECT * FROM ARTIST WHERE name LIKE ?',
    FIND_SONGS_BY_NAME_WITH_ITS_ARTISTS: 'SELECT SONGS.song_id,SONGS.name AS song_name, ' +
        'SONGS.url, ALBUM.picture_url AS album_picture_url, SONG_ARTIST.artist_id, ARTIST.name AS artist_name FROM SONGS ' +
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


    //ALBUM
    FIND_ALBUM_SONGS_BY_ID:'SELECT album.album_id, album.name AS album_name, album.picture_url AS album_picture_url,' +
    'album.release_date, album.artist_id AS album_artist_id,songs.song_id, songs.name AS song_name, songs.url,' +
    'artist.artist_id, artist.name AS artist_name FROM ALBUM LEFT JOIN SONGS ON album.album_id = songs.album_id ' +
    'LEFT JOIN SONG_ARTIST USING(song_id) LEFT JOIN ARTIST ON song_artist.artist_id = artist.artist_id WHERE album.album_id = ?',
});