CREATE DATABASE IF NOT EXISTS `trabook` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `trabook`;


-- -----------------------------------------------------
-- Table `travels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travels`
(
    `idtravels` INT          NOT NULL AUTO_INCREMENT,
    `pais`      VARCHAR(45)  NULL,
    `price`     VARCHAR(45)  NULL,
    `img`       VARCHAR(255) NULL,
    `price_off` VARCHAR(45)  NULL,
    `score`     VARCHAR(45)  NULL,
    `time`      VARCHAR(45)  NULL,
    PRIMARY KEY (`idtravels`)
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


INSERT INTO `travels` (`idtravels`, `pais`, `price`, `img`, `price_off`, `score`, `time`)
VALUES (1, 'Colombia', '1000000', 'imagen.com', '1200000', '5', '10 Days trip'),
       (2, 'Peru', '2000000', 'imagen.com', '2200000', '4', '07 Days trip'),
       (3, 'Mexico', '3000000', 'imageen.com', '3200000', '3', '05 Days trip'),
       (4, 'Argentina', '4000000', 'imagen.com', '4200000', '2', '03 Days trip');

INSERT INTO `blog` (`idblog`, `title`, `date`, `img`)
VALUES (1, 'The Amazing Difference a year of traveling', 'July 27, 2021', 'imagen.com'),
       (2, 'Travel far enough you meet yourself', 'July 27, 2021', 'imagen.com'),
       (3, 'How to save Money while visiting africa', 'July 27, 2021', 'imagen.com'),
       (4, 'Reflections on 5 months of travel', 'July 27, 2021', 'imagen.com');

INSERT INTO `util` (`idutil`, `logo`, `title`, `description`)
VALUES (1, 'logo.com', 'Sign Up', 'Completes all the work associated with planning and processing'),
       (2, 'logo.com', 'Worth of Money', 'After successful access then book from exclusive details & pricing'),
       (3, 'logo.com', 'Exciting Travel', 'Start and explores a wide range of exciting travel experience');



DROP DATABASE IF EXISTS `trabook`;