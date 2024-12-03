-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: infoman
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `biometrics`
--

DROP TABLE IF EXISTS `biometrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biometrics` (
  `bio_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `signature` blob NOT NULL,
  `date_signed` date NOT NULL,
  `photo` blob,
  `thumbmark` blob NOT NULL,
  PRIMARY KEY (`bio_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `biometrics_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biometrics`
--

LOCK TABLES `biometrics` WRITE;
/*!40000 ALTER TABLE `biometrics` DISABLE KEYS */;
/*!40000 ALTER TABLE `biometrics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_info`
--

DROP TABLE IF EXISTS `contact_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_info` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `p_id` int DEFAULT NULL,
  `res_house_no` varchar(50) DEFAULT NULL,
  `res_house_street` varchar(50) DEFAULT NULL,
  `res_village` varchar(50) DEFAULT NULL,
  `res_bgy` varchar(50) DEFAULT NULL,
  `res_citymun` varchar(50) DEFAULT NULL,
  `res_prov` varchar(50) DEFAULT NULL,
  `res_zipcode` varchar(5) DEFAULT NULL,
  `perm_house_no` varchar(50) DEFAULT NULL,
  `perm_house_street` varchar(50) DEFAULT NULL,
  `perm_village` varchar(50) DEFAULT NULL,
  `perm_bgy` varchar(50) DEFAULT NULL,
  `perm_citymun` varchar(50) DEFAULT NULL,
  `perm_prov` varchar(50) DEFAULT NULL,
  `perm_zipcode` varchar(5) DEFAULT NULL,
  `tel_no` varchar(20) DEFAULT NULL,
  `mobile_no` varchar(20) DEFAULT NULL,
  `email_address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`contact_id`),
  UNIQUE KEY `tel_no` (`tel_no`),
  UNIQUE KEY `mobile_no` (`mobile_no`),
  UNIQUE KEY `email_address` (`email_address`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `contact_info_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_info`
--

LOCK TABLES `contact_info` WRITE;
/*!40000 ALTER TABLE `contact_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educ_background`
--

DROP TABLE IF EXISTS `educ_background`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educ_background` (
  `educ_id` int DEFAULT NULL,
  `p_id` int NOT NULL,
  `educ_level_id` int DEFAULT NULL,
  `school` varchar(100) DEFAULT NULL,
  `degree` varchar(50) DEFAULT NULL,
  `edate_from` date DEFAULT NULL,
  `edate_to` date DEFAULT NULL,
  `units_earned` int DEFAULT NULL,
  `year_grad` int DEFAULT NULL,
  `honors` varchar(50) DEFAULT NULL,
  CONSTRAINT `educ_background_chk_1` CHECK ((`year_grad` > 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educ_background`
--

LOCK TABLES `educ_background` WRITE;
/*!40000 ALTER TABLE `educ_background` DISABLE KEYS */;
/*!40000 ALTER TABLE `educ_background` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eligibility`
--

DROP TABLE IF EXISTS `eligibility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eligibility` (
  `elig_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `e_id` int NOT NULL,
  `rating` double(5,2) DEFAULT NULL,
  `date_exam` date DEFAULT NULL,
  `place_exam` varchar(50) DEFAULT NULL,
  `lic_no` varchar(50) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  PRIMARY KEY (`elig_id`),
  UNIQUE KEY `lic_no` (`lic_no`),
  KEY `p_id` (`p_id`),
  KEY `e_id` (`e_id`),
  CONSTRAINT `eligibility_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`),
  CONSTRAINT `eligibility_ibfk_2` FOREIGN KEY (`e_id`) REFERENCES `ref_eligibility` (`e_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eligibility`
--

LOCK TABLES `eligibility` WRITE;
/*!40000 ALTER TABLE `eligibility` DISABLE KEYS */;
/*!40000 ALTER TABLE `eligibility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family_background`
--

DROP TABLE IF EXISTS `family_background`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `family_background` (
  `fam_bg_id` int NOT NULL,
  `p_id` int NOT NULL,
  `spouse_lname` varchar(50) DEFAULT NULL,
  `spouse_fname` varchar(50) DEFAULT NULL,
  `spouse_mname` varchar(50) DEFAULT NULL,
  `spouse_occupation` varchar(50) DEFAULT NULL,
  `spouse_employer` varchar(50) DEFAULT NULL,
  `spouse_emp_address` varchar(50) DEFAULT NULL,
  `father_lname` varchar(50) DEFAULT NULL,
  `father_fname` varchar(50) DEFAULT NULL,
  `father_mname` varchar(50) DEFAULT NULL,
  `father_ext` varchar(50) DEFAULT NULL,
  `mother_mn_lname` varchar(50) DEFAULT NULL,
  `mother_mn_fname` varchar(50) DEFAULT NULL,
  `mother_mn_mname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`fam_bg_id`),
  KEY `fk_p_id_fam` (`p_id`),
  CONSTRAINT `fk_p_id_fam` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_background`
--

LOCK TABLES `family_background` WRITE;
/*!40000 ALTER TABLE `family_background` DISABLE KEYS */;
/*!40000 ALTER TABLE `family_background` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family_children`
--

DROP TABLE IF EXISTS `family_children`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `family_children` (
  `fam_ch_id` int NOT NULL,
  `p_id` int NOT NULL,
  `child_fullname` varchar(255) DEFAULT NULL,
  `child_dob` date DEFAULT NULL,
  PRIMARY KEY (`fam_ch_id`),
  KEY `fk_p_id_ch` (`p_id`),
  CONSTRAINT `fk_p_id_ch` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_children`
--

LOCK TABLES `family_children` WRITE;
/*!40000 ALTER TABLE `family_children` DISABLE KEYS */;
/*!40000 ALTER TABLE `family_children` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `govt_issued_id`
--

DROP TABLE IF EXISTS `govt_issued_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `govt_issued_id` (
  `gi_id` int NOT NULL,
  `p_id` int NOT NULL,
  `issued_id` varchar(50) DEFAULT NULL,
  `id_no` varchar(25) DEFAULT NULL,
  `id_date_issued` date DEFAULT NULL,
  `place_issued` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`gi_id`),
  UNIQUE KEY `issued_id` (`issued_id`),
  UNIQUE KEY `id_no` (`id_no`),
  KEY `fk_p_id_govt_id` (`p_id`),
  CONSTRAINT `fk_p_id_govt_id` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `govt_issued_id`
--

LOCK TABLES `govt_issued_id` WRITE;
/*!40000 ALTER TABLE `govt_issued_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `govt_issued_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lnd`
--

DROP TABLE IF EXISTS `lnd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lnd` (
  `lnd_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `ld_type` int DEFAULT NULL,
  `training_title` varchar(60) DEFAULT NULL,
  `tfrom_date` date DEFAULT NULL,
  `tto_date` date DEFAULT NULL,
  `no_hours` double(5,2) DEFAULT NULL,
  `conducted_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`lnd_id`),
  KEY `p_id` (`p_id`),
  KEY `ld_type` (`ld_type`),
  CONSTRAINT `lnd_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`),
  CONSTRAINT `lnd_ibfk_2` FOREIGN KEY (`ld_type`) REFERENCES `ref_type_ld` (`ld_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lnd`
--

LOCK TABLES `lnd` WRITE;
/*!40000 ALTER TABLE `lnd` DISABLE KEYS */;
/*!40000 ALTER TABLE `lnd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oth_distinction`
--

DROP TABLE IF EXISTS `oth_distinction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oth_distinction` (
  `dist_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `dist_desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`dist_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `oth_distinction_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oth_distinction`
--

LOCK TABLES `oth_distinction` WRITE;
/*!40000 ALTER TABLE `oth_distinction` DISABLE KEYS */;
/*!40000 ALTER TABLE `oth_distinction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oth_organization`
--

DROP TABLE IF EXISTS `oth_organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oth_organization` (
  `org_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `org_desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`org_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `oth_organization_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oth_organization`
--

LOCK TABLES `oth_organization` WRITE;
/*!40000 ALTER TABLE `oth_organization` DISABLE KEYS */;
/*!40000 ALTER TABLE `oth_organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oth_questions`
--

DROP TABLE IF EXISTS `oth_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oth_questions` (
  `g_id` int NOT NULL,
  `p_id` int NOT NULL,
  `q34a` tinyint(1) NOT NULL,
  `q34b` tinyint(1) NOT NULL,
  `q34b_details` varchar(50) NOT NULL,
  `q35a` tinyint(1) NOT NULL,
  `q35a_details` varchar(50) NOT NULL,
  `q35b` tinyint(1) NOT NULL,
  `q35b_datefiled` date NOT NULL,
  `q35b_details` varchar(50) NOT NULL,
  `q36` tinyint(1) NOT NULL,
  `q36_details` varchar(50) NOT NULL,
  `q37` tinyint(1) NOT NULL,
  `q37_details` varchar(50) NOT NULL,
  `q38a` tinyint(1) NOT NULL,
  `q38b` tinyint(1) NOT NULL,
  `q39` tinyint(1) NOT NULL,
  `q39_details` varchar(50) NOT NULL,
  `q40a` tinyint(1) NOT NULL,
  `q40a_details` varchar(50) NOT NULL,
  `q40b` tinyint(1) NOT NULL,
  `q40b_details` varchar(50) NOT NULL,
  `q40c` tinyint(1) NOT NULL,
  `q40c_details` varchar(50) NOT NULL,
  PRIMARY KEY (`g_id`),
  KEY `fk_p_id_oth_ques` (`p_id`),
  CONSTRAINT `fk_p_id_oth_ques` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oth_questions`
--

LOCK TABLES `oth_questions` WRITE;
/*!40000 ALTER TABLE `oth_questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `oth_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oth_skills`
--

DROP TABLE IF EXISTS `oth_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oth_skills` (
  `skill_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `skill_desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`skill_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `oth_skills_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oth_skills`
--

LOCK TABLES `oth_skills` WRITE;
/*!40000 ALTER TABLE `oth_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `oth_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_info`
--

DROP TABLE IF EXISTS `personal_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_info` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `sex_id` int NOT NULL,
  `cstat_id` int NOT NULL,
  `cit_id` int NOT NULL,
  `cit_acq_id` int NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `f_name` varchar(50) NOT NULL,
  `m_name` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `pob` varchar(50) NOT NULL,
  `height` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `blood_type` varchar(50) DEFAULT NULL,
  `gsis_no` varchar(50) DEFAULT NULL,
  `pagibig_id` varchar(50) DEFAULT NULL,
  `philhealth_id` varchar(50) DEFAULT NULL,
  `sss_no` varchar(50) DEFAULT NULL,
  `tin` varchar(50) DEFAULT NULL,
  `agency_empno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`p_id`),
  UNIQUE KEY `gsis_no` (`gsis_no`),
  UNIQUE KEY `pagibig_id` (`pagibig_id`),
  UNIQUE KEY `philhealth_id` (`philhealth_id`),
  UNIQUE KEY `sss_no` (`sss_no`),
  UNIQUE KEY `tin` (`tin`),
  UNIQUE KEY `agency_empno` (`agency_empno`),
  KEY `sex_id` (`sex_id`),
  KEY `cstat_id` (`cstat_id`),
  KEY `cit_id` (`cit_id`),
  KEY `cit_acq_id` (`cit_acq_id`),
  CONSTRAINT `personal_info_ibfk_1` FOREIGN KEY (`sex_id`) REFERENCES `ref_sex` (`sex_id`),
  CONSTRAINT `personal_info_ibfk_2` FOREIGN KEY (`cstat_id`) REFERENCES `ref_civilstatus` (`cstat_id`),
  CONSTRAINT `personal_info_ibfk_3` FOREIGN KEY (`cit_id`) REFERENCES `ref_citizenship` (`cit_id`),
  CONSTRAINT `personal_info_ibfk_4` FOREIGN KEY (`cit_acq_id`) REFERENCES `ref_cit_acq` (`cit_acq_id`),
  CONSTRAINT `personal_info_chk_1` CHECK ((`height` > 0)),
  CONSTRAINT `personal_info_chk_2` CHECK ((`weight` > 0))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_info`
--

LOCK TABLES `personal_info` WRITE;
/*!40000 ALTER TABLE `personal_info` DISABLE KEYS */;
INSERT INTO `personal_info` VALUES (1,1,1,1,1,'Doe','John','Smith','1990-01-01','Manila',170,70,'O+','GSIS123456789','PAG123456789','PHIL123456789','SSS123456789','TIN123456789','AGENCY123456789'),(2,1,1,1,1,'Camacho','Daniel Hardy','Cinco','2004-09-16','Sta. Mesa',172,65,'B+','GSIS777','PAGIBIG777','PHIL777','SSS777','TIN777','AGENCY777');
/*!40000 ALTER TABLE `personal_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_cit_acq`
--

DROP TABLE IF EXISTS `ref_cit_acq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_cit_acq` (
  `cit_acq_id` int NOT NULL,
  `cit_act_desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cit_acq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_cit_acq`
--

LOCK TABLES `ref_cit_acq` WRITE;
/*!40000 ALTER TABLE `ref_cit_acq` DISABLE KEYS */;
INSERT INTO `ref_cit_acq` VALUES (1,'Filipino'),(2,'Dual Citizenship');
/*!40000 ALTER TABLE `ref_cit_acq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_citizenship`
--

DROP TABLE IF EXISTS `ref_citizenship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_citizenship` (
  `cit_id` int NOT NULL,
  `cit_desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_citizenship`
--

LOCK TABLES `ref_citizenship` WRITE;
/*!40000 ALTER TABLE `ref_citizenship` DISABLE KEYS */;
INSERT INTO `ref_citizenship` VALUES (1,'By Birth'),(2,'By Naturalization');
/*!40000 ALTER TABLE `ref_citizenship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_civilstatus`
--

DROP TABLE IF EXISTS `ref_civilstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_civilstatus` (
  `cstat_id` int NOT NULL,
  `cstat_desc` varchar(50) NOT NULL,
  PRIMARY KEY (`cstat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_civilstatus`
--

LOCK TABLES `ref_civilstatus` WRITE;
/*!40000 ALTER TABLE `ref_civilstatus` DISABLE KEYS */;
INSERT INTO `ref_civilstatus` VALUES (1,'Single'),(2,'Married'),(3,'Legally Seperated'),(4,'Widowed');
/*!40000 ALTER TABLE `ref_civilstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_educ_level`
--

DROP TABLE IF EXISTS `ref_educ_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_educ_level` (
  `educ_level_id` int NOT NULL,
  `educ_level_desc` varchar(50) NOT NULL,
  PRIMARY KEY (`educ_level_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_educ_level`
--

LOCK TABLES `ref_educ_level` WRITE;
/*!40000 ALTER TABLE `ref_educ_level` DISABLE KEYS */;
INSERT INTO `ref_educ_level` VALUES (1,'Elementary'),(2,'Secondary'),(3,'Vocational/Trade Course'),(4,'College'),(5,'Graduate Studies');
/*!40000 ALTER TABLE `ref_educ_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_eligibility`
--

DROP TABLE IF EXISTS `ref_eligibility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_eligibility` (
  `e_id` int NOT NULL,
  `e_desc` varchar(50) NOT NULL,
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_eligibility`
--

LOCK TABLES `ref_eligibility` WRITE;
/*!40000 ALTER TABLE `ref_eligibility` DISABLE KEYS */;
INSERT INTO `ref_eligibility` VALUES (1,'CAREER SERVICE'),(2,'RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS'),(3,'CES'),(4,'CSEE'),(5,'BRGY. ELIGIBILITY'),(6,'DRIVER LICENSE');
/*!40000 ALTER TABLE `ref_eligibility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_sex`
--

DROP TABLE IF EXISTS `ref_sex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_sex` (
  `sex_id` int NOT NULL,
  `sex_desc` varchar(6) NOT NULL,
  PRIMARY KEY (`sex_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_sex`
--

LOCK TABLES `ref_sex` WRITE;
/*!40000 ALTER TABLE `ref_sex` DISABLE KEYS */;
INSERT INTO `ref_sex` VALUES (1,'Male'),(2,'Female');
/*!40000 ALTER TABLE `ref_sex` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_type_ld`
--

DROP TABLE IF EXISTS `ref_type_ld`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_type_ld` (
  `ld_type` int NOT NULL,
  `ld_desc` varchar(50) NOT NULL,
  PRIMARY KEY (`ld_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_type_ld`
--

LOCK TABLES `ref_type_ld` WRITE;
/*!40000 ALTER TABLE `ref_type_ld` DISABLE KEYS */;
INSERT INTO `ref_type_ld` VALUES (1,'Managerial'),(2,'Supervisory'),(3,'Technical'),(4,'Foundation');
/*!40000 ALTER TABLE `ref_type_ld` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference_table`
--

DROP TABLE IF EXISTS `reference_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference_table` (
  `ref_id` int NOT NULL,
  `p_id` int NOT NULL,
  `ref_name` varchar(60) DEFAULT NULL,
  `ref_address` varchar(60) DEFAULT NULL,
  `ref_contact_no` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ref_id`),
  KEY `fk_p_id_ref` (`p_id`),
  CONSTRAINT `fk_p_id_ref` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_table`
--

LOCK TABLES `reference_table` WRITE;
/*!40000 ALTER TABLE `reference_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `reference_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voluntary_work`
--

DROP TABLE IF EXISTS `voluntary_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voluntary_work` (
  `vol_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `organization` varchar(50) DEFAULT NULL,
  `vfrom_date` date DEFAULT NULL,
  `vto_date` date DEFAULT NULL,
  `no_hours` double(5,2) DEFAULT NULL,
  `nature_work` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`vol_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `voluntary_work_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voluntary_work`
--

LOCK TABLES `voluntary_work` WRITE;
/*!40000 ALTER TABLE `voluntary_work` DISABLE KEYS */;
/*!40000 ALTER TABLE `voluntary_work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_exp`
--

DROP TABLE IF EXISTS `work_exp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_exp` (
  `work_id` int NOT NULL,
  `p_id` int DEFAULT NULL,
  `wfrom_date` date DEFAULT NULL,
  `wto_date` date DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `salary` double(9,2) DEFAULT NULL,
  `sal_grade` int DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `Gov_service` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`work_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `work_exp_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `personal_info` (`p_id`),
  CONSTRAINT `work_exp_chk_1` CHECK ((`salary` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_exp`
--

LOCK TABLES `work_exp` WRITE;
/*!40000 ALTER TABLE `work_exp` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_exp` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-29 19:51:46
