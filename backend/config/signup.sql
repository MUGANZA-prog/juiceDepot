-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2025 at 08:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Id` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Id`, `categoryName`) VALUES
(1, 'Beverage'),
(2, 'Fruits');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productImage` varchar(255) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productCategory` varchar(255) DEFAULT NULL,
  `productQuantity` int(11) DEFAULT NULL,
  `productPrice` decimal(10,2) DEFAULT NULL,
  `productDate` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productImage`, `productName`, `productCategory`, `productQuantity`, `productPrice`, `productDate`) VALUES
(1, 'https://i.pinimg.com/736x/91/91/c4/9191c4edd944c2c4e1a8593279ec1617.jpg', 'Juice', 'Beverages', 2, 10.00, '2025-04-15'),
(2, 'https://i.pinimg.com/736x/91/91/c4/9191c4edd944c2c4e1a8593279ec1617.jpg', 'Juice', 'Beverages', 2, 15.00, '2025-05-09'),
(3, 'https://i.pinimg.com/736x/91/91/c4/9191c4edd944c2c4e1a8593279ec1617.jpg', 'Game', 'Fruits', 3, 20.00, '2025-05-07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'MUGANZA', 'Jesus', '0muganz@gmail.com', '$2b$10$3d/PExQJip81yHvRDM.cAerhQ0mF0gIwAc0vWUaiOAmDIzK4RhJAi'),
(2, 'MUGANZA', 'Jesu', 'muganzajesus12345@gmail.com', '$2b$10$WLdLOyot1M0wUnShOe.QOO2mnUb8wQgCV5Wzuwa.yRK1qTx/3zdxe'),
(3, 'MUGABO', 'sam', 'mugabo12@gmail.com', '$2b$10$Xd2sdJ10TFAZFemEBcjOBuuiVoSiLqpEC2047RCNQ/7jBFauw1aPi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
