CREATE DATABASE IF NOT EXISTS faunadex;
USE faunadex;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  password varchar(62) NOT NULL,
  description varchar(255) NOT NULL DEFAULT '',
  avatar varchar(255) NOT NULL DEFAULT '', 
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
  forumid int NOT NULL REFERENCES forums,
  title varchar(25) NOT NULL DEFAULT '',
  description varchar(255) NOT NULL DEFAULT '',
  location varchar(25) NOT NULL DEFAULT '', 
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
