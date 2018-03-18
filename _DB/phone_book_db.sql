-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 18, 2018 at 11:24 PM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.27-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phone_book_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `info`) VALUES
(1, '{"name":"Homer","lastname":"Simpson","photo":"homer_simpson.jpeg","city":"Springfield","email":"homer@mail.us","phone1":" 380559507323","phone2":" 380570502329","street":"742 Evergreen Terrace","zcode":"22035","group":"friends"}'),
(2, '{"name":"Agent","lastname":"Smith","photo":"agent_smith.jpg","city":"Los Angeles","email":"smith@gmail.us","phone1":" 380937508567","phone2":" 380893262888","street":"259 West Olympic","zcode":"90064","group":"evil"}'),
(3, '{"name":"Gandalf","lastname":"The White","photo":"gandalf_the_white.jpg","city":"Mordor","email":"gandalf_the_white@mordor.mo","phone1":" 000000000000","phone2":"111111111111","street":"Mordor 1-A","zcode":"00001","group":"wizard"}'),
(4, '{"name":"Agent-888  ","lastname":"Smith","photo":"agent_smith.jpg","city":"Los Angeles","email":"smith@gmail.us","phone1":" 380937508567","phone2":" 380893262888","street":"259 West Olympic","zcode":"90064","group":"evilina-huuna"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
