CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `surname` varchar(255),
  `nickname` varchar(255),
  `password` varchar(255),
  `user_role_id` int
);

CREATE TABLE `songs` (
  `song_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `genre_id` int,
  `album_id` int,
  `is_cover` boolean
);

CREATE TABLE `album` (
  `album_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `release_date` datetime,
  `artist_id` int
);

CREATE TABLE `artist` (
  `artist_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `genres` (
  `genre_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` int
);

CREATE TABLE `playlist` (
  `playlist_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `user_id` int
);

CREATE TABLE `playlist_song` (
  `playlist_id` int,
  `song_id` int,
  PRIMARY KEY (`playlist_id`, `song_id`)
);

CREATE TABLE `user_role` (
  `user_role_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `user_preferences` (
  `user_id` int,
  `genre_id` int,
  PRIMARY KEY (`user_id`, `genre_id`)
);

CREATE TABLE `song_artist` (
  `song_id` int,
  `artist_id` int,
  PRIMARY KEY (`song_id`, `artist_id`)
);

ALTER TABLE `users` ADD FOREIGN KEY (`user_role_id`) REFERENCES `user_role` (`user_role_id`);

ALTER TABLE `user_preferences` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_preferences` ADD FOREIGN KEY (`genre_id`) REFERENCES `genres` (`genre_id`);

ALTER TABLE `songs` ADD FOREIGN KEY (`genre_id`) REFERENCES `genres` (`genre_id`);

ALTER TABLE `songs` ADD FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`);

ALTER TABLE `song_artist` ADD FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`);

ALTER TABLE `song_artist` ADD FOREIGN KEY (`song_id`) REFERENCES `songs` (`song_id`);

ALTER TABLE `playlist` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `playlist_song` ADD FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`playlist_id`);

ALTER TABLE `playlist_song` ADD FOREIGN KEY (`playlist_id`) REFERENCES `songs` (`song_id`);

ALTER TABLE `album` ADD FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`);

