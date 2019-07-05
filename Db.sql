CREATE DATABASE  IF NOT EXISTS `CRM` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `CRM`;
-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: CRM
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) DEFAULT NULL,
  `clientName` varchar(100) DEFAULT NULL,
  `clientSurname` varchar(100) DEFAULT NULL,
  `language` varchar(100) DEFAULT NULL,
  `addr1` varchar(1000) DEFAULT NULL,
  `addr2` varchar(1000) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zipCode` varchar(50) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `phoneNumber` varchar(100) DEFAULT NULL,
  `faxNumber` varchar(100) DEFAULT NULL,
  `mobileNumber` varchar(100) DEFAULT NULL,
  `emailAddress` varchar(100) DEFAULT NULL,
  `webAddress` varchar(100) DEFAULT NULL,
  `crmId` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `vatId` varchar(100) DEFAULT NULL,
  `taxCode` varchar(100) DEFAULT NULL,
  `file` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (4,0,'Alvin abc','Methew','English','addr2','addr1','mumbai','maharashtra','123456','Australia','8976601351','fax123456','9920367546','jinalbvaghasiya@gmail.com','http:google.com','2134567','1','2019-07-12','vatId','234567',NULL),(5,1,'Kelwin','Fernandiz','Spanish','Dadar','Andheri','mumbai','maharashtra','123456','01','8976601351','fax123456','9920367546','jinal@sportzinteractive.net','','01020303','01','2019-06-14','VAT12345','TAX1234567',NULL),(8,1,'Alvin abc','Methew','','addr2','addr1','mumbai','maharashtra','123456','03','8976601351','fax123456','9920367546','jinalbvaghasiya@gmail.com','http:google.com','2134567','02','2019-07-25','vatId','234567',NULL),(9,0,'Febin','Xavier','English','addr2','addr1','mumbai','maharashtra','123456','India','8976601351','fax123456','9920367546','jinal@sportzinteractive.net','addr2','01020303','1','2019-07-31','VAT12345','TAX1234567',NULL),(10,0,'Jason','Dsouza','English','addr2','addr1','mumbai','maharashtra','123456','Australia','8976601351','fax123456','9920367546','jason@gmail.com','http://Jason.com','01020303','1','2019-07-25','VAT123','TaXABC1234',NULL),(11,0,'Alisha','Vaz','Marathi','addr2','addr1','mumbai','maharashtra','123456','','8976601351','fax123456','9920367546','jinal@sportzinteractive.net','http:Alisha.com','4001234','2','2019-07-27','VAT123','TaXABC1234',NULL),(14,0,'','','','','','','','','','','','','','','','2','2019-07-18','','','/images/profile-1562247247789.png'),(15,1,'Alvin abc','Fernandiz','','addr2','addr1','mumbai','maharashtra','123456','','8976601351','fax123456','9920367546','S@gmail.com','addr2','4001234','1','2019-07-26','VAt34455','TaXABC1234','public/images/profile-1562250079578.png');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family`
--

DROP TABLE IF EXISTS `family`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `family` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `familyName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family`
--

LOCK TABLES `family` WRITE;
/*!40000 ALTER TABLE `family` DISABLE KEYS */;
INSERT INTO `family` VALUES (2,'Cars and '),(3,'Repair Supplies'),(4,'Repairs'),(5,'Truck and trucks'),(7,'demo family'),(10,'Demo Family'),(11,'Bicycles demo '),(12,'Bycycle added');
/*!40000 ALTER TABLE `family` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `family` varchar(100) DEFAULT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `productName` varchar(100) DEFAULT NULL,
  `productDesc` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `productUnit` varchar(100) DEFAULT NULL,
  `taxRate` varchar(100) DEFAULT NULL,
  `providerName` varchar(100) DEFAULT NULL,
  `purchasePrice` varchar(100) DEFAULT NULL,
  `tariff` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Bycycles','bycycle sku','bycycle','testing bycycle','5000','Hour/Hours','NY(4.00%)','Jinal','6000','tariff cycle'),(2,'Repairs','truck','trucks','testing trucks','4000','Ton/Tons','CA(5.00%)','Jessica','7000','tariff truck'),(11,'1','rdtfgyhjk','aston martin','qewe','100','2','1','jhjgj','100','100'),(12,'1','rdtfgyhjk','aston martin','qewe','100','2','1','jhjgj','100','100'),(16,'4','kjhvgv','','','','','','','',''),(26,'2','cars sku','Cars','Selling cars','50000','8','4','Olister Rumao','51000 doller','great product'),(27,'5','Sku demo','Trucks','Trucks description','50000','7','4','sdhfvsd','10000','tariff123456'),(28,'2','Car sku','Car','Testing car','10000','8','5','Febin Xavier','110000','TariffFebin');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax`
--

DROP TABLE IF EXISTS `tax`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tax` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `taxRateName` varchar(100) DEFAULT NULL,
  `taxRatePerc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax`
--

LOCK TABLES `tax` WRITE;
/*!40000 ALTER TABLE `tax` DISABLE KEYS */;
INSERT INTO `tax` VALUES (1,'NY','4.44'),(2,'VA','5.00'),(3,'PA','6.00'),(4,'NV','6.85'),(5,'NJ','7.00'),(7,'NA','5.55'),(8,'CA','6.78'),(9,'demo rate','10.55');
/*!40000 ALTER TABLE `tax` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `units`
--

DROP TABLE IF EXISTS `units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `units` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unitName` varchar(100) DEFAULT NULL,
  `pluralUnitName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `units`
--

LOCK TABLES `units` WRITE;
/*!40000 ALTER TABLE `units` DISABLE KEYS */;
INSERT INTO `units` VALUES (2,'Gallon','Gallons'),(3,'Hour12345','Hours'),(7,'Ton','Tons'),(8,'Hour','Hours'),(9,'Pound','Pounds'),(11,'Ton','Tons');
/*!40000 ALTER TABLE `units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'CRM'
--

--
-- Dumping routines for database 'CRM'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-05 18:02:49
