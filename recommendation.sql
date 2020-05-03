USE `musicstore`;

DELIMITER //
CREATE PROCEDURE recommendations(IN user_id int)
BEGIN
	CREATE TEMPORARY TABLE IF NOT EXISTS top3genres AS(
		SELECT `genre_id`
			FROM `playlist`
		INNER JOIN `playlist_song`
			ON `playlist`.`playlist_id` = `playlist_song`.`playlist_id`  
		INNER JOIN `songs`
			ON `songs`.`song_id` = `playlist_song`.`song_id`
		WHERE `playlist`.`user_id` = user_id
		GROUP BY `genre_id`
		ORDER BY count(*) DESC
		LIMIT 3
	);

	CREATE TEMPORARY TABLE IF NOT EXISTS user_songs AS(
		SELECT `song_id`
			FROM `playlist`
		INNER JOIN `playlist_song`
			ON `playlist`.`playlist_id` = `playlist_song`.`playlist_id`
		WHERE `playlist`.`user_id` = user_id
	);

	SELECT * FROM songs
	WHERE genre_id IN (SELECT * FROM top3genres)
		AND songs.song_id NOT IN (SELECT * FROM user_songs)
	LIMIT 10;

	DROP TABLE top3genres;
	DROP TABLE user_songs;
END //
DELIMITER ;

call recommendations(8)