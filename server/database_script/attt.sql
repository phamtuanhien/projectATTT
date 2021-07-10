CREATE DATABASE  IF NOT EXISTS `bophieu` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bophieu`;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'bandieuhanh','123456789','DH'),(2,'admin','admin','Ad'),(5,'bankiemtra','123456789','KT'),(6,'bandangky','123456789','DK'),(8,'125923634','0382431592','CT'),(9,'125923635','0376911574','CT'),(10,'125923636','0973790810','CT');
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
INSERT INTO `chuky` VALUES (125923634,'6513868790741819388950327848654461262229951099204072663155518814035679296227956268392679574177327822878486041532947771207387008424860803543765247218633653','5256381307521813373962794749018323549285770551146834420409596857799132282416483489339343204305707988172731472998919300273826113202971226042694294749256986','done','Hoàng Phúc','4555972159532084513460312191479904588923442283268010300527078074652406638585337042417271543714230297683275869105802562439934562963535181949762923102591459'),(125923635,'4863240477889124893100494159004046762106868220687364665428335323290349916376115974199488373308538524719208041234028432019557174275967162471488819980471456',NULL,'waiting','Đăng Hùng','5363497222994534825968715512565980555370736750897831790999077215074978571189284490264436280502195373621654950019656225301646346821299697700793909294819250'),(125923636,'4565141587308661463239089864743624000462606720024613220899995186575152405521529120151794902166920444143929322454799645436573510462197809824372163353973496','6165033605168698815193866156244688830955344804852719276731938951099916902498411440850693208799226072665645933722711989114749708708935711484620069418230643','done','Thanh Phương','5656013974096198923333866721333470690982181640614977569232174459492580092598805872903188410128831234833572426410659096100195136422266641764509023445798983');
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
  `sdt` varchar(11) NOT NULL,
  `chucvu` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noilamviec` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioitinh` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diachi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`cutriID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cutri`
--

LOCK TABLES `cutri` WRITE;
/*!40000 ALTER TABLE `cutri` DISABLE KEYS */;
INSERT INTO `cutri` VALUES (4,'Vũ Hoàng Phúc',125923634,'2000-10-15','0382431592','Sinh viên','HUST','Nam','Bắc Ninh'),(5,'Nguyễn Đăng Hùng',125923635,'2000-02-29','0376911574','Sinh viên','HUST','Nam','Bắc Ninh'),(6,'Nguyễn Thị Thanh Phương',125923636,'2000-06-20','0973790810','Giáo viên','THCS Từ Sơn','Nữ','Bắc Giang');
/*!40000 ALTER TABLE `cutri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieubau_decoded`
--

DROP TABLE IF EXISTS `phieubau_decoded`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieubau_decoded` (
  `cmnd` int NOT NULL,
  `chuky` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dinhdanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ungvienID` int NOT NULL,
  `tinhtrang` varchar(45) NOT NULL,
  PRIMARY KEY (`cmnd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieubau_decoded`
--

LOCK TABLES `phieubau_decoded` WRITE;
/*!40000 ALTER TABLE `phieubau_decoded` DISABLE KEYS */;
INSERT INTO `phieubau_decoded` VALUES (125923636,'6165033605168698815193866156244688830955344804852719276731938951099916902498411440850693208799226072665645933722711989114749708708935711484620069418230643','Thanh Phương',5,'done');
/*!40000 ALTER TABLE `phieubau_decoded` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieubau_encoded`
--

DROP TABLE IF EXISTS `phieubau_encoded`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieubau_encoded` (
  `cmnd` int NOT NULL,
  `chuky` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dinhdanh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tinhtrang` varchar(45) NOT NULL,
  PRIMARY KEY (`cmnd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieubau_encoded`
--

LOCK TABLES `phieubau_encoded` WRITE;
/*!40000 ALTER TABLE `phieubau_encoded` DISABLE KEYS */;
INSERT INTO `phieubau_encoded` VALUES (125923634,'125923634','Hoàng Phúc','wlMY/zzAMHGtbdakNvXAZj7alh3nTMKkGNNSph5dh/gvQ+Vy95BaV84XhJ3an2TVQPz0i8mAfwyr5bKppgjrPg==','waiting'),(125923636,'125923636','Thanh Phương','O2btBtIPIh7cMj/rH6WPwPtogcNVO6cSsv/rEyjDZ+qwB18zjkFDbCW0rf2U4IfsBvr9DzfDnHvS2Qz6z12zjg==','waiting');
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
  `sdt` varchar(11) NOT NULL,
  `chucvu` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noilamviec` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `anh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioitinh` varchar(5) NOT NULL,
  `diachi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ungvienID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ungvien`
--

LOCK TABLES `ungvien` WRITE;
/*!40000 ALTER TABLE `ungvien` DISABLE KEYS */;
INSERT INTO `ungvien` VALUES (1,'Phạm Tuấn Hiên',125923631,'2000-10-12 00:00:00','382431593','Sinh viên','HUST','https://localhost:4000/image/1625741480262.png','Nữ','Ninh Bình'),(5,'Nguyễn Hoàng Anh',125923632,'2000-07-13 17:00:00','346694819','Nhân viên','HUST','https://localhost:4000/image/1625890966735.jpg','Nam','FLC Lào Cai'),(6,'Lê Văn Đại',125923633,'2000-04-30 17:00:00','986970728','Nhân viên','HUST','https://localhost:4000/image/1625891367432.png','Nam','Hà Nam');
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

-- Dump completed on 2021-07-10 14:25:35
