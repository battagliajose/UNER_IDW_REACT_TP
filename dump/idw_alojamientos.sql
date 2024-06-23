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
-- Table structure for table `alojamientos`
--

DROP TABLE IF EXISTS `alojamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alojamientos` (
  `idAlojamiento` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` text,
  `Latitud` decimal(10,8) NOT NULL,
  `Longitud` decimal(11,8) NOT NULL,
  `PrecioPorDia` decimal(10,2) NOT NULL,
  `CantidadDormitorios` int NOT NULL,
  `CantidadBanios` int NOT NULL,
  `Estado` enum('Disponible','Reservado') NOT NULL,
  `idTipoAlojamiento` int DEFAULT NULL,
  PRIMARY KEY (`idAlojamiento`),
  KEY `idTipoAlojamiento` (`idTipoAlojamiento`),
  CONSTRAINT `alojamientos_ibfk_1` FOREIGN KEY (`idTipoAlojamiento`) REFERENCES `tiposalojamiento` (`idTipoAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alojamientos`
--

LOCK TABLES `alojamientos` WRITE;
/*!40000 ALTER TABLE `alojamientos` DISABLE KEYS */;
INSERT INTO `alojamientos` VALUES (1,'Bella vista','Disfruta de unas vistas impresionantes desde este acogedor apartamento. Con una ubicación privilegiada, es el lugar perfecto para relajarse y disfrutar de la belleza natural que te rodea.',40.71280000,-74.00600000,150.00,2,1,'Disponible',2),(2,'Cerca de la playa','Este encantador alojamiento te ofrece la oportunidad de estar a solo unos pasos de la arena y el mar. Perfecto para los amantes del sol y el mar que buscan comodidad y conveniencia.',34.05220000,-118.24370000,200.00,3,2,'Reservado',1),(3,'Gran capacidad','Con amplios espacios y todas las comodidades que necesitas, este alojamiento es ideal para grupos grandes o familias que buscan una estancia cómoda y memorable.',51.50740000,-0.12780000,300.00,5,3,'Disponible',3),(4,'Ciudad','Sumérgete en el ritmo vibrante de la ciudad desde este moderno apartamento. Con una ubicación céntrica, estarás rodeado de restaurantes, tiendas y atracciones emocionantes.',48.85660000,2.35220000,120.00,1,1,'Reservado',4),(5,'Campo','Escápate del ajetreo y el bullicio de la vida urbana y encuentra paz y tranquilidad en este encantador alojamiento rural. Rodeado de naturaleza, es el lugar perfecto para desconectar y recargar energías.',45.42150000,-75.69190000,180.00,4,2,'Disponible',2),(6,'Apartamento moderno','Un apartamento moderno con todas las comodidades para una estancia relajante.',34.05220000,-118.24370000,160.00,2,1,'Disponible',1),(7,'Vistas al mar','Disfruta de unas impresionantes vistas al mar desde este acogedor alojamiento.',41.38510000,2.17340000,220.00,3,2,'Reservado',3),(8,'Loft céntrico','Un loft moderno y elegante en el corazón de la ciudad.',40.71280000,-74.00600000,180.00,1,1,'Disponible',4),(9,'Casa rural','Escápate a esta encantadora casa rural y disfruta de la tranquilidad del campo.',37.77490000,-122.41940000,250.00,3,2,'Reservado',2),(10,'Apartamento de lujo','Experimenta el lujo y la comodidad en este impresionante apartamento.',51.50740000,-0.12780000,300.00,2,2,'Disponible',1),(11,'Casa junto al río','Relájate en esta encantadora casa con vistas al río y al bosque circundante.',40.71280000,-74.00600000,220.00,3,2,'Reservado',3),(12,'Chalet de montaña','Un acogedor chalet de montaña con impresionantes vistas panorámicas.',47.60620000,-122.33210000,280.00,4,3,'Disponible',4),(13,'Casita junto al lago','Disfruta de la serenidad del lago en esta pintoresca casita.',45.42150000,-75.69190000,200.00,2,1,'Reservado',2),(14,'Ático con terraza','Un elegante ático con una espaciosa terraza para disfrutar del sol y las vistas.',34.05220000,-118.24370000,180.00,1,1,'Disponible',1),(15,'Apartamento histórico','Sumérgete en la historia en este encantador apartamento situado en un edificio histórico.',51.50740000,-0.12780000,250.00,2,1,'Reservado',3),(16,'Villa de lujo','Una impresionante villa con piscina privada y todas las comodidades de lujo.',40.71280000,-74.00600000,500.00,6,4,'Disponible',4),(17,'Refugio en la montaña','Escápate del bullicio de la ciudad y encuentra paz y tranquilidad en este refugio de montaña.',47.60620000,-122.33210000,180.00,3,2,'Reservado',2),(18,'Cabaña acogedora','Una cabaña encantadora para una escapada romántica o un retiro tranquilo.',34.05220000,-118.24370000,150.00,1,1,'Disponible',1),(19,'Apartamento familiar','Espacioso y cómodo, este apartamento es perfecto para familias que buscan un hogar lejos de casa.',40.71280000,-74.00600000,200.00,3,2,'Reservado',3),(20,'Suite de lujo','Disfruta de la máxima comodidad y elegancia en esta lujosa suite.',51.50740000,-0.12780000,400.00,2,2,'Disponible',4);
/*!40000 ALTER TABLE `alojamientos` ENABLE KEYS */;
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
