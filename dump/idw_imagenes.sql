-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: idw
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `idImagen` int NOT NULL AUTO_INCREMENT,
  `idAlojamiento` int DEFAULT NULL,
  `RutaArchivo` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagen`),
  KEY `idAlojamiento` (`idAlojamiento`),
  CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,1,'../../img/tarjetas/apartment-01.jpg'),(2,2,'../../img/tarjetas/apartment-02.jpg'),(3,3,'../../img/tarjetas/apartment-03.jpg'),(4,4,'../../img/tarjetas/apartment-04.jpg'),(5,5,'../../img/tarjetas/apartment-05.jpg'),(6,6,'../../img/tarjetas/apartment-06.jpg'),(7,7,'../../img/tarjetas/apartment-07.jpg'),(8,8,'../../img/tarjetas/apartment-08.jpg'),(9,9,'../../img/tarjetas/apartment-09.jpg'),(10,10,'../../img/tarjetas/apartment-10.jpg'),(11,11,'../../img/tarjetas/apartment-11.jpg'),(12,12,'../../img/tarjetas/apartment-12.jpg'),(13,13,'../../img/tarjetas/apartment-13.jpg'),(14,14,'../../img/tarjetas/apartment-14.jpg'),(15,15,'../../img/tarjetas/apartment-15.jpg'),(16,16,'../../img/tarjetas/apartment-16.jpg'),(17,17,'../../img/tarjetas/apartment-17.jpg'),(18,18,'../../img/tarjetas/apartment-18.jpg'),(19,19,'../../img/tarjetas/apartment-19.jpg'),(20,20,'../../img/tarjetas/apartment-20.jpg');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-19 10:20:00
