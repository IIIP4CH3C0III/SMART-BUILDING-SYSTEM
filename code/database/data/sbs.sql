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
    (DEFAULT, 'John Doe', '123456789', 'johndoe@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOp', 'password', 'F100'),
    (DEFAULT, 'Jane Smith', '987654321', 'janesmith@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Michael Johnson', '345678912', 'michaeljohnson@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Emily Davis', '234567891', 'emilydavis@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'David Brown', '765432198', 'davidbrown@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Emma Wilson', '789123456', 'emmawilson@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Christopher Lee', '567891234', 'christopherlee@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Olivia Taylor', '456789123', 'oliviataylor@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Daniel Anderson', '345678912', 'danielanderson@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Sophia Martinez', '123456789', 'sophiamartinez@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Ethan Clark', '987654321', 'ethanclark@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Isabella Turner', '345678912', 'isabellaturner@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'James White', '234567891', 'jameswhite@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Mia Harris', '567891234', 'miaharris@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Alexander Garcia', '456789123', 'alexandergarcia@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Ava Rodriguez', '345678912', 'avarodriguez@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Liam Martinez', '123456789', 'liammartinez@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Charlotte Clark', '987654321', 'charlotteclark@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Noah Turner', '345678912', 'noahturner@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Sofia White', '234567891', 'sofiawhite@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Logan Harris', '567891234', 'loganharris@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Avery Garcia', '456789123', 'averygarcia@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Benjamin Johnson', '345678912', 'benjaminjohnson@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Amelia Wilson', '123456789', 'ameliawilson@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'William Turner', '987654321', 'williamturner@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 2, '1a2b3c4d5e6f7g8h', 'password123', 'F100'),
    (DEFAULT, 'Harper Moore', '345678912', 'harpermoore@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 3, 'AbCdEfGhIjKlMnOp', 'password456', 'H232'),
    (DEFAULT, 'Henry Allen', '234567891', 'henryallen@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Evelyn Parker', '567891234', 'evelynparker@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Daniel Brown', '456789123', 'danielbrown@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Sophia Rodriguez', '345678912', 'sophiarodriguez@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Oliver Martinez', '123456789', 'olivermartinez@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Amelia Harris', '567891234', 'ameliaharris@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Lucas White', '456789123', 'lucaswhite@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Ava Turner', '345678912', 'avaturner@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Logan Johnson', '234567891', 'loganjohnson@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Mia Wilson', '123456789', 'miawilson@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Alexander Garcia', '987654321', 'alexandergarcia@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Isabella Clark', '345678912', 'isabellaclark@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'James Taylor', '234567891', 'jamestaylor@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Charlotte Anderson', '567891234', 'charlotteanderson@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Noah Martinez', '456789123', 'noahmartinez@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Sofia Davis', '345678912', 'sofiadavis@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232'),
    (DEFAULT, 'Logan White', '123456789', 'loganwhite@example.com', '321234567', '252345678', '2023-06-15 18:03:34', 1, 'A1B2C3D4E5F6G7H8', 'password789', 'B405'),
    (DEFAULT, 'Avery Turner', '567891234', 'averyturner@example.com', '329876543', '252345678', '2023-06-15 18:03:34', 1, '1H2G3F4E5D6C7B8A', 'passwordabc', 'D203'),
    (DEFAULT, 'Benjamin Johnson', '456789123', 'benjaminjohnson@example.com', '323456789', '252345678', '2023-06-15 18:03:34', 2, 'AbCdEfGhIjKlMnOpQ', 'password123', 'F100'),
    (DEFAULT, 'Amelia Wilson', '345678912', 'ameliawilson@example.com', '324567891', '252345678', '2023-06-15 18:03:34', 3, '1a2b3c4d5e6f7g8h', 'password456', 'H232');

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
