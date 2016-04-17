CREATE DATABASE IF NOT EXISTS faunadex;
USE faunadex;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  password varchar(62) NOT NULL,
  description varchar(255) NOT NULL DEFAULT '',
  avatar varchar(255) NOT NULL DEFAULT 'http://vignette3.wikia.nocookie.net/yugioh/images/0/05/Male_silhouette.png', 
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS users_friends;
CREATE TABLE users_friends (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL REFERENCES users,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS forums;
CREATE TABLE forums (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL REFERENCES users,
  forumid int NOT NULL REFERENCES forums,
  message varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- In the future, we plan to map encounters -> animals on a 1:1
  -- A single event (like a hike) may have many encounters
-- We may create an events table later which will have a relation
  -- of events to encounters 1:many
DROP TABLE IF EXISTS encounters;
CREATE TABLE encounters (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL REFERENCES users,
  title varchar(50) NOT NULL DEFAULT '',
  animal varchar(80) NOT NULL DEFAULT '',
  scientificname varchar(140) NOT NULL DEFAULT '',
  description varchar(255) NOT NULL DEFAULT '',
  location varchar(50) NOT NULL DEFAULT '', 
  photo varchar(255) NOT NULL DEFAULT 'https://umexpert.um.edu.my/Avatar/no-image-found.jpg',
  posttime DATETIME NOT NULL, 
  encountertime DATETIME NOT NULL, 
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
  id int NOT NULL AUTO_INCREMENT,
  encounterid int NOT NULL REFERENCES encounters,
  file varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
