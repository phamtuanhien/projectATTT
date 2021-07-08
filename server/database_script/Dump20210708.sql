-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: bophieu
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `accountID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`accountID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'bandieuhanh1','123456789','DH'),(2,'phucvuhoang','phuc123','Ad');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chuky`
--

DROP TABLE IF EXISTS `chuky`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuky` (
  `cmnd` int NOT NULL,
  `bidanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `chuky` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tinhtrang` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dinhdanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `r` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`cmnd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuky`
--

LOCK TABLES `chuky` WRITE;
/*!40000 ALTER TABLE `chuky` DISABLE KEYS */;
/*!40000 ALTER TABLE `chuky` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cutri`
--

DROP TABLE IF EXISTS `cutri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cutri` (
  `cutriID` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cmnd` int NOT NULL,
  `ngaysinh` date NOT NULL,
  `sdt` int NOT NULL,
  `chucvu` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noilamviec` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioitinh` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diachi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`cutriID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cutri`
--

LOCK TABLES `cutri` WRITE;
/*!40000 ALTER TABLE `cutri` DISABLE KEYS */;
INSERT INTO `cutri` VALUES (1,'Vu Hoang Phuc',125923632,'2000-10-15',382431592,'Sinh vien','HUST','nam','Bac Ninh'),(2,'Phạm Tuấn Hiên',125923631,'2000-10-12',382431593,'Sinh viên','HUST','nam','Ninh Bình');
/*!40000 ALTER TABLE `cutri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieubau_decoded`
--

DROP TABLE IF EXISTS `phieubau_decoded`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieubau_decoded` (
  `cutriID` int NOT NULL,
  `chuky` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dinhdanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ungvienID` int NOT NULL,
  PRIMARY KEY (`cutriID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieubau_decoded`
--

LOCK TABLES `phieubau_decoded` WRITE;
/*!40000 ALTER TABLE `phieubau_decoded` DISABLE KEYS */;
/*!40000 ALTER TABLE `phieubau_decoded` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieubau_encoded`
--

DROP TABLE IF EXISTS `phieubau_encoded`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieubau_encoded` (
  `cutriID` int NOT NULL,
  `chuky` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dinhdanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`cutriID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieubau_encoded`
--

LOCK TABLES `phieubau_encoded` WRITE;
/*!40000 ALTER TABLE `phieubau_encoded` DISABLE KEYS */;
/*!40000 ALTER TABLE `phieubau_encoded` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ungvien`
--

DROP TABLE IF EXISTS `ungvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ungvien` (
  `ungvienID` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cmnd` int NOT NULL,
  `ngaysinh` datetime NOT NULL,
  `sdt` int NOT NULL,
  `chucvu` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noilamviec` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `anh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioitinh` varchar(5) NOT NULL,
  `diachi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ungvienID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ungvien`
--

LOCK TABLES `ungvien` WRITE;
/*!40000 ALTER TABLE `ungvien` DISABLE KEYS */;
INSERT INTO `ungvien` VALUES (1,'Phạm Tuấn Hiên',125923631,'2000-10-12 00:00:00',382431593,'Sinh viên','HUST','https://localhost:3000/image/1625741480262.png','Nữ','Ninh Bình');
/*!40000 ALTER TABLE `ungvien` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-08 17:55:36
