-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 14, 2024 at 10:10 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nest_jwt`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `unId` varchar(255) NOT NULL,
  `sitecoreKey` varchar(255) NOT NULL,
  `sitecoreTemplateId` varchar(255) NOT NULL,
  `imageUri` varchar(255) NOT NULL,
  `componentOptionType` varchar(255) NOT NULL,
  `componentName` varchar(255) NOT NULL,
  `catId` int NOT NULL,
  `catTitle` varchar(255) NOT NULL,
  `createAT` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `status` enum('PREVIEW','PUBLISH','DRAFT') NOT NULL DEFAULT 'PUBLISH'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `unId`, `sitecoreKey`, `sitecoreTemplateId`, `imageUri`, `componentOptionType`, `componentName`, `catId`, `catTitle`, `createAT`, `updateAt`, `status`) VALUES
(1, 'qwerty123', '', '', '', 'Header Banner', '', 1, 'Header Banner', '2024-05-14 13:42:46.000000', '2024-05-14 13:42:46.000000', 'PUBLISH'),
(2, 'asdf123', '', '', '', 'Product Range', '', 2, 'Product Range', '2024-05-14 13:42:46.000000', '2024-05-14 13:42:46.000000', 'PUBLISH');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `id` int NOT NULL,
  `catId` int NOT NULL,
  `subCatId` int NOT NULL,
  `subCatTitle` varchar(255) NOT NULL,
  `componentRender` varchar(255) NOT NULL,
  `srcUri` varchar(255) NOT NULL,
  `createAT` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `categoryId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sub_category`
--

INSERT INTO `sub_category` (`id`, `catId`, `subCatId`, `subCatTitle`, `componentRender`, `srcUri`, `createAT`, `updateAt`, `categoryId`) VALUES
(1, 1, 1, 'Header Banner Option 1', 'HeaderOption1', 'header-banner-option1.png', '2024-05-14 13:46:07.000000', '2024-05-14 13:46:07.000000', 1),
(2, 1, 2, 'Header Banner Option 2', 'HeaderOption2', 'header-banner-option2.png', '2024-05-14 13:46:07.000000', '2024-05-14 13:46:07.000000', 1),
(3, 1, 3, 'Header Banner Option 3', 'HeaderOption3', 'header-banner-option3.png', '2024-05-14 13:46:07.000000', '2024-05-14 13:46:07.000000', 1),
(4, 1, 4, 'Header Banner Option 4', 'HeaderOption4', 'header-banner-option4.png', '2024-05-14 13:46:07.000000', '2024-05-14 13:46:07.000000', 1),
(5, 2, 1, 'Product Range Option 1', 'ProductRangeOption1', 'product-range-option1.png', '2024-05-14 13:52:10.000000', '2024-05-14 13:52:10.000000', 2),
(6, 2, 2, 'Product Range Option 2', 'ProductRangeOption2', 'product-range-option2.png', '2024-05-14 13:52:10.000000', '2024-05-14 13:52:10.000000', 2),
(7, 2, 3, 'Product Range Option 3', 'ProductRangeOption3', 'product-range-option3.png', '2024-05-14 13:52:10.000000', '2024-05-14 13:52:10.000000', 2),
(8, 2, 4, 'Product Range Option 4', 'ProductRangeOption4', 'product-range-option4.png', '2024-05-14 13:52:10.000000', '2024-05-14 13:52:10.000000', 2);

-- --------------------------------------------------------

--
-- Table structure for table `template`
--

CREATE TABLE `template` (
  `id` int NOT NULL,
  `unId` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `preiviewUri` varchar(255) NOT NULL,
  `component` varchar(255) NOT NULL,
  `status` enum('PREVIEW','PUBLISH','DRAFT') NOT NULL DEFAULT 'PUBLISH',
  `createAT` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'abc', 'abc@xyz.com', '$2a$08$6wn3BK98/wAQFC5DmnKakexpSDoHFbSKz7FgCLAwNA6MemFhTMGN2', '2024-01-02 19:52:15.022408', '2024-01-03 12:27:41.233521'),
(3, 'abcd', 'abcd@xyz.com', '$2a$08$pERsJsZfbO//PSBD7qSry.PvQwkuW6zNMJk0gM6hj8J0oqdZsvNtq', '2024-01-02 19:58:03.511470', '2024-01-03 12:27:47.985457'),
(5, 'abcde', 'abcde@xyz.com', '$2a$08$Oq21BfOB/rRuACf/Qt/gTuIDYxU9ueV.kjrieME8z.b64s0z5eJ.S', '2024-01-02 19:58:47.690866', '2024-01-03 12:27:54.971745'),
(8, 'abcdef', 'abcdef@xyz.com', '$2a$08$dtoA3bVLNCdnhDoH1QwdK.SftufmPqonm2yXSOaC3eZm8q5trDOGC', '2024-01-03 12:12:21.190015', '2024-01-03 12:28:02.783220'),
(9, 'abcdefgh', 'abcdefgh@xyz.com', '$2a$08$KqjRKWIN9Hohdw1g9.wLDOx8Y/xPcO3xCoC5tS467N65ieCzKEpTS', '2024-01-03 12:34:01.473279', '2024-01-03 12:34:01.473279'),
(11, 'abcdefghi', 'abcdefghi@xyz.com', '$2a$08$sy/pDv.7itcVbn.YaocFguFPZSy3qCIuCFrCkOFAyg8eQfk3lgz8K', '2024-01-03 12:43:04.347504', '2024-01-03 12:43:04.347504'),
(12, 'xyz', 'xyz@xyz.com', '$2a$08$7esk/MTz7p9sVh0nAEG7O.wqMGwDSDfHpRH/gpLHknt1PXyqRaS1W', '2024-01-03 12:46:39.641200', '2024-01-03 12:46:39.641200');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_cfdd4ef8fedb78f912893ac87e` (`unId`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_51b8c0b349725210c4bd8b9b7a7` (`categoryId`);

--
-- Indexes for table `template`
--
ALTER TABLE `template`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `template`
--
ALTER TABLE `template`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD CONSTRAINT `FK_51b8c0b349725210c4bd8b9b7a7` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
