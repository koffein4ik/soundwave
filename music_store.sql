create table artist
(
	artist_id int auto_increment
		primary key,
	name varchar(255) null,
	picture_url varchar(255) null
);

create table album
(
	album_id int auto_increment
		primary key,
	name varchar(255) null,
	release_date datetime null,
	artist_id int null,
	picture_url varchar(255) null,
	constraint album_ibfk_1
		foreign key (artist_id) references artist (artist_id)
);

create index artist_id
	on album (artist_id);

create table genres
(
	genre_id int auto_increment
		primary key,
	name int null
);

create table songs
(
	song_id int auto_increment
		primary key,
	name varchar(255) null,
	genre_id int null,
	album_id int null,
	is_cover tinyint(1) null,
	url varchar(255) null,
	constraint songs_ibfk_1
		foreign key (genre_id) references genres (genre_id),
	constraint songs_ibfk_2
		foreign key (album_id) references album (album_id)
);

create table song_artist
(
	song_id int not null,
	artist_id int not null,
	primary key (song_id, artist_id),
	constraint song_artist_ibfk_1
		foreign key (artist_id) references artist (artist_id),
	constraint song_artist_ibfk_2
		foreign key (song_id) references songs (song_id)
);

create index artist_id
	on song_artist (artist_id);

create index album_id
	on songs (album_id);

create index genre_id
	on songs (genre_id);

create table user_role
(
	user_role_id int auto_increment
		primary key,
	name varchar(255) null
);

create table users
(
	id int auto_increment
		primary key,
	name varchar(255) null,
	surname varchar(255) null,
	nickname varchar(255) null,
	password varchar(255) null,
	user_role_id int null,
	constraint users_ibfk_1
		foreign key (user_role_id) references user_role (user_role_id)
);

create table playlist
(
	playlist_id int auto_increment
		primary key,
	name varchar(255) null,
	user_id int null,
	picture_url varchar(255) null,
	constraint playlist_ibfk_1
		foreign key (user_id) references users (id)
);

create index user_id
	on playlist (user_id);

create table playlist_song
(
	playlist_id int not null,
	song_id int not null,
	primary key (playlist_id, song_id),
	constraint playlist_song_ibfk_1
		foreign key (playlist_id) references playlist (playlist_id),
	constraint playlist_song_ibfk_2
		foreign key (playlist_id) references songs (song_id)
);

create table user_preferences
(
	user_id int not null,
	genre_id int not null,
	primary key (user_id, genre_id),
	constraint user_preferences_ibfk_1
		foreign key (user_id) references users (id),
	constraint user_preferences_ibfk_2
		foreign key (genre_id) references genres (genre_id)
);

create index genre_id
	on user_preferences (genre_id);

create index user_role_id
	on users (user_role_id);
