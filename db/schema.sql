CREATE DATABASE IF NOT EXISTS stay;

USE stay;

CREATE TABLE IF NOT EXISTS review (
  id INT AUTO_INCREMENT,
  review_date DATE NOT NULL,
  comments VARCHAR(1000) DEFAULT NULL,
  rating_accuracy INT(5) DEFAULT NULL,
  rating_communication INT(5) DEFAULT NULL,
  rating_cleanliness INT(5) DEFAULT NULL,
  rating_location INT(5) DEFAULT NULL,
  rating_checkin INT(5) DEFAULT NULL,
  rating_value INT(5) DEFAULT NULL,
  stay INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS stay (
  id INT AUTO_INCREMENT,
  host INT NOT NULL,
  customer INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS host (
  id INT AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS customer (
  id INT AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  profile VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

ALTER TABLE review ADD FOREIGN KEY (stay) REFERENCES stay (id);
ALTER TABLE stay ADD FOREIGN KEY (host) REFERENCES host (id);
ALTER TABLE stay ADD FOREIGN KEY (customer) REFERENCES customer (id);
