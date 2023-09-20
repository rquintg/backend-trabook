CREATE DATABASE IF NOT EXISTS `trabook` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `trabook`;


-- -----------------------------------------------------
-- Table `travels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travels`
(
    `idtravels` INT          NOT NULL AUTO_INCREMENT,
    `city`      VARCHAR(45)  NULL,
    `pais`      VARCHAR(45)  NULL,
    `price`     VARCHAR(45)  NULL,
    `img`       VARCHAR(255) NULL,
    `price_off` VARCHAR(45)  NULL,
    `score`     VARCHAR(45)  NULL,
    PRIMARY KEY (`idtravels`)
)
    ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `best_travel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `best_travel`
(
    `idbesttravel` INT      NOT NULL AUTO_INCREMENT,
    `pais`           VARCHAR(45)  NULL,
    `city`         VARCHAR(45)  NULL,
    `price`         VARCHAR(45)  NULL,
    `time`           VARCHAR(45)  NULL,
    `score`          VARCHAR(45)  NULL,
    `img`            VARCHAR(255) NULL,
    PRIMARY KEY (`idbesttravel`)
)
    ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`
(
    `idblog` INT          NOT NULL AUTO_INCREMENT,
    `title`  VARCHAR(45)  NULL,
    `date`   VARCHAR(45)  NULL,
    `img`    VARCHAR(255) NULL,
    PRIMARY KEY (`idblog`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `util`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `util`
(
    `idutil`      INT          NOT NULL AUTO_INCREMENT,
    `logo`        VARCHAR(255) NULL,
    `title`       VARCHAR(45)  NULL,
    `description` VARCHAR(100) NULL,
    PRIMARY KEY (`idutil`)
)
    ENGINE = InnoDB;

-- -----------------------------------------------------
-- Populate all tables
-- -----------------------------------------------------

INSERT INTO `best_travel` (`idbesttravel`, `city`, `pais`, `price`, `time`, `score`, `img`)
VALUES (1, 'Rome', 'Italy', '5,24K', '10 Days Trip', '4.8', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(1).png?raw=true'),
       (2, 'London', 'UK', '2,42K', '07 Days Trip', '4.7', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(3).png?raw=true'),
       (3, 'Osaka', 'Japan', '5,42K', '10 Days Trip', '4.8', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(2).png?raw=true');

INSERT INTO `travels` (`idtravels`, `pais`, `city`, `price`, `img`, `price_off`, `score`)
VALUES (1, 'Spain', 'Madrid', '850', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(1).png?raw=true', '950', '5'),
       (2, 'Italy', 'Firenze', '750', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Hover%20effect.png?raw=true', '950', '4'),
       (3, 'France', 'Paris', '599', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(2).png?raw=true', '699', '3'),
       (4, 'UK', 'London', '950', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(3).png?raw=true', '850', '2');

INSERT INTO `blog` (`idblog`, `title`, `date`, `img`)
VALUES (1, 'The Amazing Difference a year of traveling', 'July 27, 2021', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(6).png?raw=true'),
       (2, 'Travel far enough you meet yourself', 'July 27, 2021', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(4).png?raw=true'),
       (3, 'How to save Money while visiting africa', 'July 27, 2021', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(5).png?raw=true'),
       (4, 'Reflections on 5 months of travel', 'July 27, 2021', 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Image%20(6).png?raw=true');

INSERT INTO `util` (`idutil`, `logo`, `title`, `description`)
VALUES (1, 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Group%20(2).png?raw=true', 'Sign Up', 'Completes all the work associated with planning and processing'),
       (2, 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Group.png?raw=true', 'Worth of Money', 'After successful access then book from exclusive details & pricing'),
       (3, 'https://github.com/rquintg/backend-trabook/blob/main/src/img/Group%20(1).png?raw=true', 'Exciting Travel', 'Start and explores a wide range of exciting travel experience');
