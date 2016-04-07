CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  password varchar(62) NOT NULL,
  description varchar(255) NOT NULL DEFAULT '',
  avatar varchar(255) NOT NULL DEFAULT '', --How are we going to handle this?
  PRIMARY KEY (id)
);

CREATE TABLE forums (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE posts (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  forumid int NOT NULL,
  message varchar(255) NOT NULL
  PRIMARY KEY (id)
);

-- In the future, we plan to map encounters -> animals on a 1:1
  -- A single event (like a hike) may have many encounters
-- We may create an events table later which will have a relation
  -- of events to encounters 1:many
CREATE TABLE encounters (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  forumid int NOT NULL,
  title varchar(25) NOT NULL DEFAULT '',
  location varchar(25) NOT NULL DEFAULT '', --Tie into geo-location?  google maps api?
  posttime DATETIME NOT NULL, --Time encounter was posted on site
  encountertime DATETIME NOT NULL, --Time encounter occoured in reality
  PRIMARY KEY (id)
);

CREATE TABLE pictures (
  id int NOT NULL AUTO_INCREMENT,
  encounterid int NOT NULL,
  file varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
