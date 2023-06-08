-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Jun 08, 2023 at 05:12 PM
-- Server version: 5.7.42
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `CLIENTS`
--

CREATE TABLE `CLIENTS` (
  `ID_CLIENT` int(11) NOT NULL,
  `FULL_NAME` varchar(255) NOT NULL,
  `CONTACT` varchar(12) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `NIF` varchar(9) NOT NULL,
  `BI` varchar(9) NOT NULL,
  `LAST_LOGOUT` datetime NOT NULL,
  `LEVEL` tinyint(4) NOT NULL,
  `ID_SESSON` varchar(16) NOT NULL,
  `PASSWORD` varchar(64) NOT NULL,
  `ROOM` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `CLIENTS`
--

INSERT INTO `CLIENTS` (`ID_CLIENT`, `FULL_NAME`, `CONTACT`, `EMAIL`, `NIF`, `BI`, `LAST_LOGOUT`, `LEVEL`, `ID_SESSON`, `PASSWORD`, `ROOM`) VALUES
(1, 'John Doe', '+1234567890', 'johndoe@example.com', '123456789', '987654321', '2023-06-15 18:03:34', 1, '5HVj3TVTtd5qvYas', 'password', 'A001');

-- --------------------------------------------------------

--
-- Table structure for table `DEVICES`
--

CREATE TABLE `DEVICES` (
  `ID_DEVICE` int(6) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `SERIALNUMBER` varchar(32) NOT NULL,
  `OUTPUT` varchar(255) NOT NULL,
  `STATE` tinyint(1) NOT NULL,
  `ROOM` varchar(4) NOT NULL,
  `LAST_UPDATE` datetime NOT NULL,
  `LEVEL` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CLIENTS`
--
ALTER TABLE `CLIENTS`
  ADD PRIMARY KEY (`ID_CLIENT`);

--
-- Indexes for table `DEVICES`
--
ALTER TABLE `DEVICES`
  ADD PRIMARY KEY (`ID_DEVICE`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `CLIENTS`
--
ALTER TABLE `CLIENTS`
  MODIFY `ID_CLIENT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `DEVICES`
--
ALTER TABLE `DEVICES`
  MODIFY `ID_DEVICE` int(6) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
