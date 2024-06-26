-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: idw
-- ------------------------------------------------------
-- Server version	8.4.0

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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alojamientos`
--

LOCK TABLES `alojamientos` WRITE;
/*!40000 ALTER TABLE `alojamientos` DISABLE KEYS */;
INSERT INTO `alojamientos` VALUES (1,'Departamento Bella vista','Disfruta de unas vistas impresionantes desde este acogedor apartamento. Con una ubicación privilegiada, es el lugar perfecto para relajarse y disfrutar de la belleza natural que te rodea.',40.71280000,-74.00600000,150.00,1,1,'Disponible',2),(2,'Casa Cocotero a metros de la playa Murcia','Este encantador alojamiento te ofrece la oportunidad de estar a solo unos pasos de la arena y el mar. Perfecto para los amantes del sol y el mar que buscan comodidad y conveniencia.',34.05220000,-118.24370000,200.00,2,2,'Reservado',1),(3,'Cabaña Gran capacidad','Con amplios espacios y todas las comodidades que necesitas, este alojamiento es ideal para grupos grandes o familias que buscan una estancia cómoda y memorable.',51.50740000,-0.12780000,300.00,1,3,'Disponible',3),(4,'City Hotel Cénter','Sumérgete en el ritmo vibrante de la ciudad desde este moderno petit hotel. Con una ubicación céntrica, estarás rodeado de restaurantes, tiendas y atracciones emocionantes.',48.85660000,2.35220000,120.00,1,1,'Reservado',4),(5,'Casa Campo Los Halcones','Escápate del ajetreo y el bullicio de la vida urbana y encuentra paz y tranquilidad en este encantador alojamiento rural. Rodeado de naturaleza, es el lugar perfecto para desconectar y recargar energías.',45.42150000,-75.69190000,180.00,2,2,'Disponible',1),(6,'Departamento moderno','Un apartamento moderno con todas las comodidades para una estancia relajante.',34.05220000,-118.24370000,160.00,1,1,'Disponible',2),(7,'Departamento Vistas al mar','Disfruta de unas impresionantes vistas al mar desde este acogedor alojamiento.',41.38510000,2.17340000,220.00,1,2,'Reservado',2),(8,'Departamento vistas únicas','Un loft moderno y elegante en el corazón de la naturaleza',40.71280000,-74.00600000,180.00,1,1,'Disponible',2),(9,'Casa rural','Escápate a esta encantadora casa rural y disfruta de la tranquilidad del campo.',37.77490000,-122.41940000,250.00,2,2,'Reservado',1),(10,'Casa de de lujo','Experimenta el lujo y la comodidad en este impresionante apartamento.',51.50740000,-0.12780000,300.00,2,2,'Disponible',1),(11,'Casa junto al río con piscina','Relájate en esta encantadora casa con vistas al río y al bosque circundante.',40.71280000,-74.00600000,220.00,2,2,'Reservado',1),(12,'Hotel de montaña','Un acogedor hotel de montaña con impresionantes vistas panorámicas.',47.60620000,-122.33210000,280.00,2,3,'Disponible',4),(13,'Casita junto al lago','Disfruta de la serenidad del lago en esta pintoresca casita.',45.42150000,-75.69190000,200.00,2,1,'Reservado',1),(14,'Ático con terraza','Un elegante ático con una espaciosa terraza para disfrutar del sol y las vistas.',34.05220000,-118.24370000,180.00,1,1,'Disponible',1),(15,'Apartamento histórico','Sumérgete en la historia en este encantador apartamento situado en un edificio histórico.',51.50740000,-0.12780000,250.00,1,1,'Reservado',2),(16,'Casa de lujo','Una impresionante villa con piscina privada y todas las comodidades de lujo.',40.71280000,-74.00600000,500.00,1,4,'Disponible',1),(17,'Refugio en la montaña','Escápate del bullicio de la ciudad y encuentra paz y tranquilidad en este refugio de montaña.',47.60620000,-122.33210000,180.00,2,2,'Reservado',3),(18,'Cabaña acogedora','Una cabaña encantadora para una escapada romántica o un retiro tranquilo.',34.05220000,-118.24370000,150.00,1,1,'Disponible',3),(19,'Cabaña familiar','Espacioso y cómodo, este apartamento es perfecto para familias que buscan un hogar lejos de casa.',40.71280000,-74.00600000,200.00,2,2,'Reservado',3),(20,'Suite de lujo Hotel Marcos','Disfruta de la máxima comodidad y elegancia en esta lujosa suite.',51.50740000,-0.12780000,400.00,2,2,'Disponible',4),(25,'Departamento Moca','departamento en el corazón de la ciudad',12.12313213,1.55555500,500.00,2,1,'Reservado',2),(26,'Depto La Sirena','Departamento en la playa sirena',5.55555000,2.55555550,200.00,2,1,'Disponible',2),(27,'Estonia Departamentos','Departamento equiipado para las vacaciones relajadas',1.22222220,3.11111111,80.00,2,1,'Disponible',2),(28,'Solaris 4 Departamento espacioso','Solaris complejo de departamentos para ejecutivos ocupados',1.23456000,1.23456000,100.00,2,2,'Disponible',2),(29,'Casa Petit','Pequeña casa bonita',2.33333300,1.55558000,205.00,1,1,'Disponible',1),(30,'Casa de playa','Casa de playa con sombra',55.66666660,6.66666666,90.00,1,1,'Reservado',1),(31,'Casa de nono','La casa de mis abuelitos',1.58585800,25.65987400,100.00,1,1,'Disponible',1),(32,'Cabaña soñada','La cabaña de tus sueños',1.21111100,25.22222200,205.00,1,1,'Disponible',3),(33,'Cabañita de la costa','Cabaña de la costa del lago Ness',25.66666600,65.22222000,80.00,1,1,'Disponible',3),(34,'Cabaña de Yani','Cabaña con sol todo el día',8.55565965,89.51465465,58.00,1,1,'Reservado',3),(35,'Cabañita serana','Cabaña para ver las estrellas, alejada de la ciudad',87.99999000,5.66666600,508.00,2,2,'Disponible',3),(36,'Cabaña en la playa','Cabaña al lado del mar sin tele',5.22222000,2.56564654,0.00,2,1,'Reservado',3),(37,'Cabaña Griselda','La cabaña de mi tía Griselda tal como la dejó al morir',13.00000000,13.00000000,1000.00,2,4,'Disponible',3),(38,'Hotel Sur','Hotel 5 estrellas a 5 minutos aeropuerto Guarulhos',55.55555500,65.55646400,250.00,1,1,'Disponible',4),(39,'Hotel Party Row','Hotel para vacaciones alocadas',12.55555500,47.22222220,508.00,1,1,'Reservado',4),(40,'Hotel Belha ','Hotel en la paradisíaca playa Morada',21.56565656,11.56546565,500.00,1,1,'Disponible',4),(41,'Hotel Pantalín','Primer Hotel de la Isla Pantalín',50.04540000,65.65656500,100.00,1,1,'Reservado',4),(42,'Gran Hotel Malecón','Gran Hotel Malecón céntro conTV y bar',8.66666000,50.64654000,20000.00,2,2,'Reservado',1),(43,'Petit Flame Hotel','Petit Flame Hotel con parrilla',3.33333000,3.55555550,50.00,2,2,'Reservado',4),(44,'WIFi Hotel','Tiene internet con cibercafé',0.88888800,6.66000000,9000.00,2,1,'Disponible',4),(45,'Hotel Madame Rouge','Hotel con show nocturno',87.99999000,5.99990000,54.00,2,2,'Disponible',4);
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

-- Dump completed on 2024-06-24 21:05:29
