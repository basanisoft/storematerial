/*
SQLyog Enterprise - MySQL GUI v6.56
MySQL - 5.0.45-community-nt : Database - storemanage
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`storemanage` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `storemanage`;

/*Table structure for table `material` */

DROP TABLE IF EXISTS `material`;

CREATE TABLE `material` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(100) default NULL,
  `description` text,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `material` */

insert  into `material`(`id`,`name`,`description`) values (6,'soaps','detol'),(7,'paste','Colgate');

/*Table structure for table `store` */

DROP TABLE IF EXISTS `store`;

CREATE TABLE `store` (
  `id` int(11) NOT NULL auto_increment,
  `store_name` varchar(100) default NULL,
  `location` int(11) default NULL,
  `description` text,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `store` */

insert  into `store`(`id`,`store_name`,`location`,`description`) values (1,'store 1',1,'store 1'),(2,'store 2',1,'store 2'),(3,'store 3',2,'store 3'),(7,'store9',2,'test');

/*Table structure for table `storematerial` */

DROP TABLE IF EXISTS `storematerial`;

CREATE TABLE `storematerial` (
  `id` int(11) NOT NULL auto_increment,
  `store_id` int(11) default NULL,
  `material_id` int(11) default NULL,
  `quantity` float default NULL,
  `create_date` datetime default NULL,
  `update_date` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_tstore` (`store_id`),
  KEY `FK_tmaterial` (`material_id`),
  CONSTRAINT `FK_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`),
  CONSTRAINT `FK_storematerial` FOREIGN KEY (`material_id`) REFERENCES `material` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `storematerial` */

insert  into `storematerial`(`id`,`store_id`,`material_id`,`quantity`,`create_date`,`update_date`) values (1,1,6,300,'2017-10-11 00:00:00',NULL),(2,2,7,1000,'2017-10-15 00:00:00',NULL),(4,NULL,NULL,100,'2017-10-09 18:30:00',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
