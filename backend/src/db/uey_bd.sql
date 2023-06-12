-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.24-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para uey_bd
CREATE DATABASE IF NOT EXISTS `uey_bd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */;
USE `uey_bd`;

-- Volcando estructura para tabla uey_bd.espacios
CREATE TABLE IF NOT EXISTS `espacios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `posicion` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `referencia` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `espacios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla uey_bd.espacios: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `espacios` DISABLE KEYS */;
INSERT INTO `espacios` (`id`, `producto_id`, `posicion`, `referencia`) VALUES
	(1, 7, '25.649062, -100.282381', 'referencia 1'),
	(2, 8, '25.673118, -100.315168', 'referencia 2'),
	(3, 9, '25.650836, -100.289439', 'referencia 3');
/*!40000 ALTER TABLE `espacios` ENABLE KEYS */;

-- Volcando estructura para tabla uey_bd.imagenes
CREATE TABLE IF NOT EXISTS `imagenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla uey_bd.imagenes: ~36 rows (aproximadamente)
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` (`id`, `producto_id`, `imagen`) VALUES
	(1, 1, 'https://placeimg.com/640/480/any'),
	(2, 2, 'https://placeimg.com/640/480/any'),
	(3, 2, 'https://placeimg.com/640/480/any'),
	(4, 2, 'https://placeimg.com/640/480/any'),
	(5, 3, 'https://placeimg.com/640/480/any'),
	(6, 3, 'https://placeimg.com/640/480/any'),
	(7, 4, 'https://placeimg.com/640/480/any'),
	(8, 4, 'https://placeimg.com/640/480/any'),
	(9, 5, 'https://placeimg.com/640/480/any'),
	(10, 6, 'https://placeimg.com/640/480/any'),
	(11, 7, 'https://placeimg.com/640/480/any'),
	(12, 7, 'https://placeimg.com/640/480/any'),
	(13, 8, 'https://placeimg.com/640/480/any'),
	(14, 8, 'https://placeimg.com/640/480/any'),
	(15, 8, 'https://placeimg.com/640/480/any'),
	(16, 9, 'https://placeimg.com/640/480/any'),
	(17, 9, 'https://placeimg.com/640/480/any'),
	(18, 9, 'https://placeimg.com/640/480/any'),
	(19, 10, 'https://placeimg.com/640/480/any'),
	(20, 10, 'https://placeimg.com/640/480/any'),
	(21, 10, 'https://placeimg.com/640/480/any'),
	(22, 11, 'https://placeimg.com/640/480/any'),
	(23, 11, 'https://placeimg.com/640/480/any'),
	(24, 11, 'https://placeimg.com/640/480/any'),
	(25, 12, 'https://placeimg.com/640/480/any'),
	(26, 12, 'https://placeimg.com/640/480/any'),
	(27, 12, 'https://placeimg.com/640/480/any'),
	(28, 13, 'https://placeimg.com/640/480/any'),
	(29, 13, 'https://placeimg.com/640/480/any'),
	(30, 13, 'https://placeimg.com/640/480/any'),
	(31, 14, 'https://placeimg.com/640/480/any'),
	(32, 14, 'https://placeimg.com/640/480/any'),
	(33, 14, 'https://placeimg.com/640/480/any'),
	(34, 15, 'https://placeimg.com/640/480/any'),
	(35, 15, 'https://placeimg.com/640/480/any'),
	(36, 15, 'https://placeimg.com/640/480/any');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;

-- Volcando estructura para tabla uey_bd.inventario
CREATE TABLE IF NOT EXISTS `inventario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `cantidad_existente` int(11) NOT NULL,
  `cantidad_rentada` int(11) NOT NULL,
  `cantidad_restante` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla uey_bd.inventario: ~12 rows (aproximadamente)
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
INSERT INTO `inventario` (`id`, `producto_id`, `cantidad_existente`, `cantidad_rentada`, `cantidad_restante`) VALUES
	(1, 1, 30, 0, 10),
	(2, 2, 15, 0, 5),
	(3, 3, 20, 0, 10),
	(4, 10, 60, 0, 30),
	(5, 11, 90, 0, 40),
	(6, 12, 40, 0, 15),
	(7, 4, 50, 10, 40),
	(8, 5, 70, 20, 50),
	(9, 6, 30, 5, 25),
	(10, 13, 10, 1, 9),
	(11, 14, 40, 33, 7),
	(12, 15, 80, 75, 5);
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;

-- Volcando estructura para tabla uey_bd.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `vendedor` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` float NOT NULL,
  `tipo_producto_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tipo_producto_id` (`tipo_producto_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`tipo_producto_id`) REFERENCES `tipos_producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla uey_bd.productos: ~15 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id`, `nombre`, `vendedor`, `precio`, `tipo_producto_id`, `createdAt`, `updatedAt`) VALUES
	(1, 'Bebida 1', 'Vendedor 1', 10.99, 1, '2023-06-11 08:17:53', NULL),
	(2, 'Bebida 2', 'Vendedor 2', 8.99, 1, '2023-06-11 08:17:53', NULL),
	(3, 'Bebida 3', 'Vendedor 3', 12.99, 1, '2023-06-11 08:17:53', NULL),
	(4, 'Mesa Redonda', 'Vendedor 4', 20.99, 2, '2023-06-11 08:17:53', NULL),
	(5, 'Mesa Cuadrada', 'Vendedor 5', 18.99, 2, '2023-06-11 08:17:53', NULL),
	(6, 'Mesa Rectangular', 'Vendedor 6', 22.99, 2, '2023-06-11 08:17:53', NULL),
	(7, 'Salón de Fiestas 1', 'Vendedor 7', 100.99, 3, '2023-06-11 08:17:53', NULL),
	(8, 'Salón de Fiestas 2', 'Vendedor 8', 120.99, 3, '2023-06-11 08:17:53', NULL),
	(9, 'Salón de Fiestas 3', 'Vendedor 9', 150.99, 3, '2023-06-11 08:17:53', NULL),
	(10, 'Bebida 4', 'Vendedor 10', 9.99, 1, '2023-06-11 08:17:53', NULL),
	(11, 'Bebida 5', 'Vendedor 11', 7.99, 1, '2023-06-11 08:17:53', NULL),
	(12, 'Bebida 6', 'Vendedor 12', 11.99, 1, '2023-06-11 08:17:53', NULL),
	(13, 'Mesa Ovalada', 'Vendedor 13', 25.99, 2, '2023-06-11 08:17:53', NULL),
	(14, 'Mesa de Bar', 'Vendedor 14', 28.99, 2, '2023-06-11 08:17:53', NULL),
	(15, 'Mesa de Centro', 'Vendedor 15', 30.99, 2, '2023-06-11 08:17:53', NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla uey_bd.rentas
CREATE TABLE IF NOT EXISTS `rentas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `tipo_renta_id` int(11) DEFAULT NULL,
  `fecha_inicio` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `fecha_fin` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `cantidad_rentada` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `rentas_ibfk_2` (`tipo_renta_id`),
  CONSTRAINT `rentas_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `rentas_ibfk_2` FOREIGN KEY (`tipo_renta_id`) REFERENCES `tipos_renta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla uey_bd.rentas: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `rentas` DISABLE KEYS */;
INSERT INTO `rentas` (`id`, `producto_id`, `tipo_renta_id`, `fecha_inicio`, `fecha_fin`, `cantidad_rentada`) VALUES
	(1, 7, 2, '2023-06-15 18:00:00', '2023-06-16 08:00:00', 1),
	(2, 8, 2, '2023-06-15 18:00:00', '2023-06-16 08:00:00', 1),
	(3, 9, 2, '2023-06-15 18:00:00', '2023-06-16 08:00:00', 1),
	(7, 4, 1, '2023-06-15 12:00:00', '2023-06-15 17:00:00', 10),
	(8, 5, 1, '2023-06-15 12:00:00', '2023-06-15 17:00:00', 20),
	(9, 6, 1, '2023-06-15 12:00:00', '2023-06-15 17:00:00', 5),
	(10, 13, 1, '2023-06-15 12:00:00', '2023-06-15 17:00:00', 1),
	(11, 14, 1, '2023-06-15 12:00:00', '2023-06-15 17:00:00', 33),
	(12, 15, 1, '2023-06-15 12:00:00', '2023-06-15 17:00:00', 75);
/*!40000 ALTER TABLE `rentas` ENABLE KEYS */;

-- Volcando estructura para tabla uey_bd.tipos_producto
CREATE TABLE IF NOT EXISTS `tipos_producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla uey_bd.tipos_producto: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `tipos_producto` DISABLE KEYS */;
INSERT INTO `tipos_producto` (`id`, `nombre`) VALUES
	(1, 'Producto simple'),
	(2, 'Producto rentable'),
	(3, 'Espacios');
/*!40000 ALTER TABLE `tipos_producto` ENABLE KEYS */;

-- Volcando estructura para tabla uey_bd.tipos_renta
CREATE TABLE IF NOT EXISTS `tipos_renta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla uey_bd.tipos_renta: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `tipos_renta` DISABLE KEYS */;
INSERT INTO `tipos_renta` (`id`, `nombre`) VALUES
	(1, 'Por Horas'),
	(2, 'Por Noche');
/*!40000 ALTER TABLE `tipos_renta` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
