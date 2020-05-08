CREATE DATABASE gamerules_db;
USE gamerules_db;

CREATE TABLE game_rules (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR( 255) NOT NULL,
  description VARCHAR( 255 ) NOT NULL,
  rules VARCHAR(255) NOT NULL

);