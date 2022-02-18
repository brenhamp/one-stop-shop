-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: grocery_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `cart_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  KEY `cart_id` (`cart_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`cart_id`) REFERENCES `user` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,'Bananas',3,1,1,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL),(2,'Bananas',3,1,1,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL),(3,'Whole Milk',1,5,1,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL),(4,'Ground Beef',2,9,2,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL),(5,'Chicken Breasts',3,10,2,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL),(6,'Canned Tuna',4,13,2,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL),(7,'Toilet Paper',1,17,3,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL),(8,'Aluminum Foil',4,19,3,'2022-02-17 12:34:37','2022-02-17 12:34:37',NULL);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'produce','2022-02-17 12:34:37','2022-02-17 12:34:37'),(2,'dairy','2022-02-17 12:34:37','2022-02-17 12:34:37'),(3,'meat','2022-02-17 12:34:37','2022-02-17 12:34:37'),(4,'pantry','2022-02-17 12:34:37','2022-02-17 12:34:37'),(5,'essentials','2022-02-17 12:34:37','2022-02-17 12:34:37');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `department_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Bananas','Bunch of 6 ripe bananas','3.99','./images/banana-bunch.jpg',1,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(2,'Avocados','Bag of 6 large avocados','4.99','./images/avocado.jpg',1,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(3,'Potatoes','Bulk large Russet potatoes','2.59','./images/russet-potatoes.jpg',1,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(4,'Cabbage','Head of green cabbage','1.99','./images/cabbage.jpg',1,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(5,'Whole Milk','Gallon of whole milk','1.99','./images/milk.jpg',2,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(6,'Butter','Stick of salted butter','0.99','./images/butter.jpg',2,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(7,'Eggs','1 dozen Grade-A large eggs','2.59','./images/egg-carton.jpeg',2,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(8,'Cheddar Cheese','Block of sharp Cheddar cheese','3.59','./images/cheddar-cheese.jpg',2,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(9,'Ground Beef','1 lb. lean ground beef','7.99','./images/ground-beef.jpg',3,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(10,'Chicken Breasts','Boneless skinless chicken breasts','6.99','./images/chicken.jpg',3,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(11,'Sockeye Salmon','Sockeye salmon fillets, fresh-caught','12.99','./images/sockeye-salmon.jpg',3,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(12,'Pork Chops','Bone-in thick pork chops','5.59','./images/pork-chop.jpg',3,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(13,'Canned Tuna','Albacore tuna in water, 5 oz.','0.99','./images/tuna.jpg',4,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(14,'Potato Chips','Salted kettle-cooked potato chips','1.59','./images/kettle-chips.jpg',4,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(15,'Corn Flakes','Frosted corn flake cereal','2.99','./images/frosted-flakes.jpg',4,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(16,'Peanut Butter','Jar of smooth peanut butter','3.29','./images/peanut-butter.jpg',4,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(17,'Toilet Paper','2-ply toilet paper rolls, pack of 6','3.99','./images/toilet-paper.jpg',5,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(18,'Laundry Detergent','Gallon of lavender-scented detergent','6.99','./images/laundry-detergent.jpg',5,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(19,'Aluminum Foil','Roll of aluminum foil, 25 ft','3.59','./images/foil.jpg',5,'2022-02-17 12:34:37','2022-02-17 12:34:37'),(20,'Trash Bags','Heavy-duty gallon trash bags, 30 ct','2.59','./images/trash-bags.jpg',5,'2022-02-17 12:34:37','2022-02-17 12:34:37');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('NGOYWQnfmepTKhKj9p0D9qk2DBNrbhZ2','2022-02-19 01:11:00','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}','2022-02-17 03:38:13','2022-02-18 01:11:00');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bpozzi@example.com','test123','2022-02-17 12:34:37','2022-02-17 12:34:37'),(2,'mbashford@example.com','test123','2022-02-17 12:34:37','2022-02-17 12:34:37'),(3,'fmills@example.com','test123','2022-02-17 12:34:37','2022-02-17 12:34:37');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-17 20:37:26
