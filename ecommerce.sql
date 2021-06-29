-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2021 a las 05:18:34
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `rut` varchar(10) NOT NULL,
  `idProducto` int(1) NOT NULL,
  `cantidad` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`rut`, `idProducto`, `cantidad`) VALUES
('11234234-1', 25, 2),
('20501974-k', 7, 1),
('20501974-k', 1, 2),
('11402075-k', 15, 2),
('11402075-k', 37, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(1) NOT NULL,
  `nombreCategoria` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nombreCategoria`) VALUES
(1, 'Alimento'),
(2, 'Medicina'),
(3, 'Accesorios'),
(4, 'Higiene');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaproducto`
--

CREATE TABLE `categoriaproducto` (
  `idCategoria` int(1) NOT NULL,
  `idProducto` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `idComentario` int(1) NOT NULL,
  `tituloComentario` varchar(256) NOT NULL,
  `cuerpoComentario` varchar(256) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `idProducto` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comuna`
--

CREATE TABLE `comuna` (
  `idComuna` int(1) NOT NULL,
  `nombreComuna` varchar(256) NOT NULL,
  `idRegion` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comuna`
--

INSERT INTO `comuna` (`idComuna`, `nombreComuna`, `idRegion`) VALUES
(1, 'Arica', 1),
(2, 'Camarones', 1),
(3, 'General Lagos', 1),
(4, 'Putre', 1),
(5, 'Iquique', 2),
(6, 'Alto Hospicio', 2),
(7, 'Camina', 2),
(8, 'Colchane', 2),
(9, 'Huara', 2),
(10, 'Pica', 2),
(11, 'Pozo Almonte', 2),
(12, 'Antofagasta', 3),
(13, 'Mejillones', 3),
(14, 'Sierra Gorda', 3),
(15, 'Taltal', 3),
(16, 'Calama', 3),
(17, 'Ollague', 3),
(18, 'San Pedro de Atacama', 3),
(19, 'Maria Elena', 3),
(20, 'Tocopilla', 3),
(21, 'Chanaral', 4),
(22, 'Chanaral', 4),
(23, 'Copiapo', 4),
(24, 'Tierra Amarilla', 4),
(25, 'Alto del Carmen', 4),
(26, 'Freirina', 4),
(27, 'Huasco', 4),
(28, 'Vallenar', 4),
(29, 'Canela', 5),
(30, 'Illapel', 5),
(31, 'Los Vilos', 5),
(32, 'Salamanca', 5),
(33, 'Andacollo', 5),
(34, 'Coquimbo', 5),
(35, 'La Higuera', 5),
(36, 'La Serena', 5),
(37, 'Paihuno', 5),
(38, 'Vicuna', 5),
(39, 'Combarbala', 5),
(40, 'Monte Patria', 5),
(41, 'Ovalle', 5),
(42, 'Punitaqui', 5),
(43, 'Rio Hurtado', 5),
(44, 'Isla de Pascua', 6),
(45, 'Calle Larga', 6),
(46, 'Los Andes', 6),
(47, 'Rinconada de Los Andes', 6),
(48, 'San Esteban', 6),
(49, 'Limache', 6),
(50, 'Olmue', 6),
(51, 'Quilpue', 6),
(52, 'Villa Alemana', 6),
(53, 'Cabildo', 6),
(54, 'La Ligua', 6),
(55, 'Papudo', 6),
(56, 'Petorca', 6),
(57, 'Zapallar', 6),
(58, 'Hijuelas', 6),
(59, 'La Calera', 6),
(60, 'La Cruz', 6),
(61, 'Nogales', 6),
(62, 'Quillota', 6),
(63, 'Algarrobo', 6),
(64, 'Cartagena', 6),
(65, 'El Quisco', 6),
(66, 'El Tabo', 6),
(67, 'San Antonio', 6),
(68, 'Santo Domingo', 6),
(69, 'Catemu', 6),
(70, 'Llaillay', 6),
(71, 'Panquehue', 6),
(72, 'Putaendo', 6),
(73, 'San Felipe', 6),
(74, 'Santa Maria', 6),
(75, 'CasaBlanca', 6),
(76, 'Concon', 6),
(77, 'Juan Fernandez', 6),
(78, 'Punchuncavi', 6),
(79, 'Quintero', 6),
(80, 'Valparaiso', 6),
(81, 'Vina del Mar', 6),
(82, 'Codegua', 8),
(83, 'Coinco', 8),
(84, 'Coltauco', 8),
(85, 'Donihue', 8),
(86, 'Graneros', 8),
(87, 'Las Cabras', 8),
(88, 'Machali', 8),
(89, 'Malloa', 8),
(90, 'Olivar', 8),
(91, 'Peumo', 8),
(92, 'Pichidegua', 8),
(93, 'Quinta de Tilcoco', 8),
(94, 'Rancagua', 8),
(95, 'Requinoa', 8),
(96, 'Rengo', 8),
(97, 'San Francisco de Mostazal', 8),
(98, 'San Vicente de Tagua Tagua', 8),
(99, 'La Estrella', 8),
(100, 'Litueche', 8),
(101, 'Marchigue', 8),
(102, 'Navidad', 8),
(103, 'Paredones', 8),
(104, 'Pichilemu', 8),
(105, 'Chepica', 8),
(106, 'Chimbarongo', 8),
(107, 'Lolol', 8),
(108, 'Nancagua', 8),
(109, 'Palmilla', 8),
(110, 'Peralillo', 8),
(111, 'Placilla', 8),
(112, 'Pumanque', 8),
(113, 'San Fernando', 8),
(114, 'Santa Cruz', 8),
(115, 'Colbun', 9),
(116, 'Linares', 9),
(117, 'Longavi', 9),
(118, 'Parral', 9),
(119, 'Retiro', 9),
(120, 'San Javier de Loncomilla', 9),
(121, 'Villa Alegre', 9),
(122, 'Yerbas Buenas', 9),
(123, 'Constitucion', 9),
(124, 'Curepto', 9),
(125, 'Empedrado', 9),
(126, 'Maule', 9),
(127, 'Pelarco', 9),
(128, 'Pencahue', 9),
(129, 'Rio Claro', 9),
(130, 'San Clemente', 9),
(131, 'San Rafael', 9),
(132, 'Talca', 9),
(133, 'Bulnes', 10),
(134, 'Chillan', 10),
(135, 'Chillan Viejo', 10),
(136, 'El Carmen', 10),
(137, 'Pemuco', 10),
(138, 'Pinto', 10),
(139, 'Quillon', 10),
(140, 'San Ignacio', 10),
(141, 'Yungay', 10),
(142, 'Cobquecura', 10),
(143, 'Coelemu', 10),
(144, 'Ninhue', 10),
(145, 'Portezuelo', 10),
(146, 'Quirihue', 10),
(147, 'Ranquil', 10),
(148, 'Treguaco', 10),
(149, 'Coihueco', 10),
(150, 'Niquen', 10),
(151, 'San Carlos', 10),
(152, 'San Fabian', 10),
(153, 'San Nicolas', 10),
(154, 'Arauco', 11),
(155, 'Canete', 11),
(156, 'Contulmo', 11),
(157, 'Lebu', 11),
(158, 'Los Alamos', 11),
(159, 'Tirua', 11),
(160, 'Alto Biobio', 11),
(161, 'Antuco', 11),
(162, 'Cabrero', 11),
(163, 'Laja', 11),
(164, 'Los Angeles', 11),
(165, 'Mulchen', 11),
(166, 'Nacimiento', 11),
(167, 'Negrete', 11),
(168, 'Quilaco', 11),
(169, 'Quilleco', 11),
(170, 'San Rosendo', 11),
(171, 'Santa Barbara', 11),
(172, 'Tucapel', 11),
(173, 'Yumbel', 11),
(174, 'Chiguayante', 11),
(175, 'Concepcion', 11),
(176, 'Coronel', 11),
(177, 'Florida', 11),
(178, 'Hualpen', 11),
(179, 'Hualqui', 11),
(180, 'Lota', 11),
(181, 'Penco', 11),
(182, 'San Pedro de la Paz', 11),
(183, 'Santa Juana', 11),
(184, 'Talcahuano', 11),
(185, 'Tome', 11),
(186, 'Carahue', 12),
(187, 'Cholchol', 12),
(188, 'Cunco', 12),
(189, 'Curarrehue', 12),
(190, 'Freire', 12),
(191, 'Galvarino', 12),
(192, 'Gorbea', 12),
(193, 'Lautaro', 12),
(194, 'Loncoche', 12),
(195, 'Melipeuco', 12),
(196, 'Nueva Imperial', 12),
(197, 'Padre Las Casas', 12),
(198, 'Perquenco', 12),
(199, 'Pitrufquen', 12),
(200, 'Pucon', 12),
(201, 'Saavedra', 12),
(202, 'Temuco', 12),
(203, 'Teodoro Schmidt', 12),
(204, 'Tolten', 12),
(205, 'Vilcun', 12),
(206, 'Villarrica', 12),
(207, 'Angol', 12),
(208, 'Collipulli', 12),
(209, 'Curacutin', 12),
(210, 'Ercilla', 12),
(211, 'Lonquimay', 12),
(212, 'Los Sauces', 12),
(213, 'Lumaco', 12),
(214, 'Puren', 12),
(215, 'Renaico', 12),
(216, 'Traiguen', 12),
(217, 'Victoria', 12),
(218, 'Futrono', 13),
(219, 'La Union', 13),
(220, 'Lago Ranco', 13),
(221, 'Rio Bueno', 13),
(222, 'Corral', 13),
(223, 'Lanco', 13),
(224, 'Los Lagos', 13),
(225, 'Mafil', 13),
(226, 'Mariquina', 13),
(227, 'Paillaco', 13),
(228, 'Panguilli', 13),
(229, 'Valdivia', 13),
(230, 'Ancud', 14),
(231, 'Castro', 14),
(232, 'Chonchi', 14),
(233, 'Curaco de Velez', 14),
(234, 'Dalcahue', 14),
(235, 'Puqueldon', 14),
(236, 'Queilen', 14),
(237, 'Quellon', 14),
(238, 'Quemchi', 14),
(239, 'Quinchao', 14),
(240, 'Calbuco', 14),
(241, 'Cochamo', 14),
(242, 'Fresia', 14),
(243, 'Frutillar', 14),
(244, 'Llanquihue', 14),
(245, 'Los Muermos', 14),
(246, 'Maullin', 14),
(247, 'Puerto Montt', 14),
(248, 'Puerto Varas', 14),
(249, 'Osorno', 14),
(250, 'Puerto Octay', 14),
(251, 'Purranque', 14),
(252, 'Puyehue', 14),
(253, 'Rio Negro', 14),
(254, 'San Pablo', 14),
(255, 'San Juan de la Costa', 14),
(256, 'Chaiten', 14),
(257, 'Futaleufu', 14),
(258, 'Hualaihue', 14),
(259, 'Palena', 14),
(260, 'Aysen', 15),
(261, 'Cisnes', 15),
(262, 'Guaitecas', 15),
(263, 'Cochrane', 15),
(265, 'Tortel', 15),
(266, 'Coyhaique', 15),
(267, 'Lago Verde', 15),
(268, 'Chile Chico', 15),
(269, 'Rio Ibanez', 15),
(270, 'Antartica', 16),
(271, 'Cabo de Hornos', 16),
(272, 'Laguna Blanca', 16),
(273, 'Punta Arenas', 16),
(274, 'Rio Verde', 16),
(275, 'San Gregorio', 16),
(276, 'Porvenir', 16),
(277, 'Primavera', 16),
(278, 'Timaukel', 16),
(279, 'Natales', 16),
(280, 'Torres del Paine', 16),
(281, 'Colina', 7),
(282, 'Lampa', 7),
(283, 'Tiltil', 7),
(284, 'Pirque', 7),
(285, 'Puente Alto', 7),
(286, 'San Jose de Maipo', 7),
(287, 'Buin', 7),
(288, 'Calera de Tango', 7),
(289, 'Paine', 7),
(290, 'San Bernardo', 7),
(291, 'Alhue', 7),
(292, 'Curacavi', 7),
(293, 'Maria Pinto', 7),
(294, 'Melipilla', 7),
(295, 'San Pedro', 7),
(296, 'Cerrillos', 7),
(297, 'Cerro Navia', 7),
(298, 'Conchali', 7),
(299, 'El Bosque', 7),
(300, 'Estacion Central', 7),
(301, 'Huechuraba', 7),
(302, 'Independencia', 7),
(303, 'La Cisterna', 7),
(304, 'La Granja', 7),
(305, 'La Florida', 7),
(306, 'La Pintana', 7),
(307, 'La Reina', 7),
(308, 'Las Condes', 7),
(309, 'Lo Barnechea', 7),
(310, 'Lo Espejo', 7),
(311, 'Lo Prado', 7),
(312, 'Macul', 7),
(313, 'Maipu', 7),
(314, 'Nunoa', 7),
(315, 'Pedro Aguirre Cerda', 7),
(316, 'Penalolen', 7),
(317, 'Providencia', 7),
(318, 'Pudahuel', 7),
(319, 'Quilicura', 7),
(320, 'Quinta Normal', 7),
(321, 'Recoleta', 7),
(322, 'Renca', 7),
(323, 'San Miguel', 7),
(324, 'San Joaquin', 7),
(325, 'San Ramon', 7),
(326, 'Santiago', 7),
(327, 'Vitacura', 7),
(328, 'El Monte', 7),
(329, 'Isla de Maipo', 7),
(330, 'Padre Hurtado', 7),
(331, 'Penaflor', 7),
(332, 'Talagante', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `idMarca` int(1) NOT NULL,
  `nombreMarca` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`idMarca`, `nombreMarca`) VALUES
(1, 'Acana'),
(2, 'Biofresh'),
(3, 'Brit'),
(4, 'Brit premium'),
(5, 'Royal canin '),
(6, 'Josera'),
(7, 'afp'),
(8, 'Beco'),
(9, 'BarkBone'),
(10, 'GiGwi'),
(11, 'HAGEN'),
(12, 'PetSafe'),
(13, 'Kong'),
(14, 'Petmate'),
(15, 'Centrovet'),
(16, 'Elanco'),
(17, 'Holiday'),
(18, 'VETOQUINOL'),
(19, 'medvetarom'),
(20, 'DRAG PHARMA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `idMascota` int(11) NOT NULL,
  `nombreMascota` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`idMascota`, `nombreMascota`) VALUES
(1, 'Perro'),
(2, 'Gato'),
(3, 'Mascotas exotico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotacategoria`
--

CREATE TABLE `mascotacategoria` (
  `idMascota` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascotacategoria`
--

INSERT INTO `mascotacategoria` (`idMascota`, `idCategoria`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 3),
(3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `idOrden` int(11) NOT NULL,
  `rutUsuario` varchar(10) NOT NULL,
  `totalApagar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`idOrden`, `rutUsuario`, `totalApagar`) VALUES
(1, '20501974-k', 6500),
(3, '20501974-k', 277000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordendetalle`
--

CREATE TABLE `ordendetalle` (
  `idOrdenDetalle` int(1) NOT NULL,
  `idProducto` int(1) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `idOrden` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ordendetalle`
--

INSERT INTO `ordendetalle` (`idOrdenDetalle`, `idProducto`, `cantidad`, `precio`, `idOrden`) VALUES
(1, 7, 1, 6500, 1),
(2, 20, 2, 9700, 3),
(3, 22, 1, 14600, 3),
(4, 15, 3, 81000, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(1) NOT NULL,
  `precioProducto` int(1) NOT NULL,
  `stockProducto` int(1) NOT NULL,
  `nombreProducto` varchar(256) NOT NULL,
  `descripcionProducto` varchar(5000) NOT NULL,
  `calificacionProducto` int(1) NOT NULL,
  `idMarca` int(11) NOT NULL,
  `idMascota` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `idSubcategoria` int(11) NOT NULL,
  `imagenProducto` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `precioProducto`, `stockProducto`, `nombreProducto`, `descripcionProducto`, `calificacionProducto`, `idMarca`, `idMascota`, `idCategoria`, `idSubcategoria`, `imagenProducto`) VALUES
(1, 57900, 10, 'Acana Puppy', 'Alimento elaborado especialmente para cachorros con pollo de corral, pavo, pescado salvaje y huevos enteros para una nutrición completa. Único y biológicamente apropiado, una deliciosa y natural forma de mantener a tu perro saludable, feliz y fuerte.', 4, 1, 1, 1, 23, 'https://243440-749267-raikfcquaxqncofqfm.stackpathdns.com/tienda/9013-large_default/puppy-junior.jpg'),
(2, 21000, 2, 'Biofresh Puppy Raza Grande', 'Biofresh Super Premium es innovador y diferente, porque tiene alta inclusión de ingredientes realmente frescos. El resultado es un alimento completo y equilibrado que se destaca para elevar la nutrición de los cachorros de razas grandes y gigantes a su más', 4, 2, 1, 1, 23, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_biofresh-filhotes-racas-grandes-e-gigantes-3kg_rev-004-angulo12702.png?72'),
(3, 21000, 0, 'Biofresh Puppy Raza Pequeña', 'Biofresh Super Premium es innovador y diferente, porque tiene alta inclusión de ingredientes realmente frescos. El resultado es un alimento completo y equilibrado que se destaca para elevar la nutrición de los cachorros de razas grandes y gigantes a su más', 4, 2, 1, 1, 23, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_biofresh-filhotes-racas-pequenas-e-mini-3kg_rev_004-angulo12885.png?72'),
(4, 20700, 6, 'Biofresh Puppy Raza Mediana', 'Biofresh Super Premium es innovador y diferente, porque tiene alta inclusión de ingredientes realmente frescos. El resultado es un alimento completo y equilibrado que se destaca para elevar la nutrición de los cachorros de razas grandes y gigantes a su más', 5, 2, 1, 1, 23, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_biofresh-filhotes-racas-medias-3kg_rev_003-angulo12583.png?72'),
(5, 55500, 3, 'Brit care grain free junior large breed', 'Alimento super premium hipoalergénico para cachorros y perros jóvenes de 3 meses y hasta los 2 años, de razas grandes y gigantes de más de 25 kg. Formulado a base de salmón y papas, libre de granos. ', 3, 3, 1, 1, 23, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_brit-care-junior-large-breed-salmon-12kg8332.jpg?72'),
(6, 56800, 1, 'Brit care grain free puppy', 'Alimento libre de granos para perros de todas las razas de 4 a 12 meses. Ideal también para perras gestantes. Formulado con salmón y papas.', 5, 3, 1, 1, 23, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_x_brit-care-puppy-all-breed-salmo-n01159835.jpg?72'),
(7, 6500, 12, 'Royal canin mini adulto', 'Alimento especialmente formulado para cumplir con las necesidades nutricionales de perros adultos desde los 10 meses hasta los 8 años, en razas pequeñas (1 a 10kg).', 5, 5, 1, 1, 1, 'https://centralvet01.akamaized.net/8755/royal-canin-mini-adulto-75-kg.jpg '),
(8, 6900, 1, 'Royal canin xsmall adulto', 'Alimento completo y balanceado para perros adultos de hasta los 8 años de edad, de raza miniatura (<4 Kg).', 4, 5, 1, 1, 1, 'https://dojiw2m9tvv09.cloudfront.net/11787/product/royalcaninxsmalladult7784.jpg'),
(13, 8990, 10, 'Royal canin poodle adulto', 'Alimento especialmente formulado para las necesidades de perros de raza Poodle adultos desde los 10 meses de edad. ', 3, 5, 1, 1, 1, 'https://dojiw2m9tvv09.cloudfront.net/11787/product/royalcaninpoodleadulto2114.jpg'),
(14, 13700, 6, 'Brit premiun pollo adulto large', 'Alimento indicado para perros adultos de razas grandes y gigantes (25-45 kg). Formulado con alto porcentaje de carne deshuesada y deshidratada de pollo, Omega-3 y ácidos grasos los cuales aportan a una buena salud cardiaca, además de mantener una piel fuer', 1, 4, 1, 1, 1, 'https://dojiw2m9tvv09.cloudfront.net/10212/product/brit-premium-by-nature-adult-large35539727.jpg'),
(15, 81000, 2, 'afp lanza pelotas automatico', 'Juguete interactivo para perros\r\nLanza pelotas a 3, 6 y 9 metros de distancia\r\nIncluye tres pelotas para jugar', 4, 7, 1, 3, 9, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_afpinteractiveshyperfetchmini-lanzapelotas06593855.jpg?72'),
(16, 11900, 1, 'afp moster hat', 'Gorros Monstruosos con divertidos diseños monstruosos y su textura suave pero resistentes. Convertirás a tu perro en el monstruo más divertido y estará a la monstruo moda.\r\n\r\nMedidas: 24 x 20 x 7,5 cm', 4, 7, 1, 3, 9, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_azul4187.jpg?72'),
(17, 15800, 15, 'Barkbone breath stick mint', 'Juguete masticable con sabor a menta para perros masticadores, a los que ayuda a promover un aliento fresco.', 2, 9, 1, 3, 9, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_barkbonebreathstickmint2828.jpg?72'),
(18, 7200, 4, 'Ball azul', 'Pelota Fabricada con goma natural y fibra de cáscara de arroz, 100% natural, ecológica y biodegradable, no contiene ningún añadido químico artificial o tóxico.\r\n\r\nSu Agradable textura, suave mordida, no hacen daño en encías ni dientes.\r\n\r\nS: 5 cm diámetro\r', 4, 8, 1, 3, 9, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_becoballazul21860.jpg?72'),
(19, 14990, 7, 'Rope ball verde', 'Juguete interactivo, natural y biodegradable, fabricado con goma 100% natural, tintes naturales y cuerda de algodón natural. ', 5, 8, 1, 3, 9, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_becoropeballverde6551.jpg?72'),
(20, 9700, 12, 'Soft toys s', 'Juguete masticable, durable y flotable con una textura suave, relleno de botellas de plástico recicladas, no tóxico y libre de ftalatos.\r\nTalla S\r\n', 3, 8, 1, 3, 9, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_cocodrilobecotoy7360.jpg?72'),
(21, 9400, 3, 'I\'m hero conejo', 'Divertido juguete Conejo, con innovador diseño que combina partes duras y blandas. Perfecto para perros que gustan morder peluches con más resistencia.', 5, 10, 1, 3, 9, 'https://dojiw2m9tvv09.cloudfront.net/27645/product/X_db49b35a-a9d8-451c-a535-39f727a741c82133.jpeg?36'),
(22, 14600, 2, 'Plato enfriamiento', 'Pon el plato de enfriamiento en la nevera para luego sacarlo y usarlo con agua o comida. El gel fresco que está dentro del plato, lo mantiene helado por horas en esos días más calurosos.', 5, 7, 1, 3, 10, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_h2195.jpg?72'),
(23, 9500, 5, 'Bowl azul L', 'Plato de fibra de planta de bambú natura resistentes y duraderos, son completamente sustentables en su producción y biodegradables una vez terminada su vida útil.', 4, 8, 1, 3, 10, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_beco-bowl-mediano-para-mascotas5917.jpg?72'),
(24, 7700, 11, 'Bowl azul oceano', 'Los perros siempre los amarán por la cena que sirven. Ahora un tazón que también puedes amar. Un tazón discreto para la vida contemporánea. Con su diseño clásico y simple, este recipiente de agua y comida de bambú hecho de manera sostenible se sienta cómodamente en cualquier hogar. Una gama de estampados y patrones para complementar su estilo.', 5, 8, 1, 3, 10, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_azulmedianoche8861.jpg?72'),
(25, 9800, 5, 'Dog it filtro fuente fresh&clear', 'Filtros de recambio para el nuevo bebedero automático DogIt Fresh & Clear.\r\n\r\nEl pack incluye 3 filtros de espuma y carbón activo, donde la espuma recoge los desechos, pelos y sedimentos y el carbón activo ayuda a reducir el mal sabor y los olores.', 5, 11, 1, 3, 10, 'https://www.tusmascotas.cl/wp-content/uploads/2020/10/dogit-filtro-fuente-bebera.png'),
(26, 2600, 7, 'dog it plato platico rojo', 'El plato Dog It está fabricado de plástico rojo translúcido, duro, firme y durable.\r\n\r\nFácil de lavar, apto para alimento seco, húmedo y agua.\r\n', 3, 11, 1, 3, 10, 'https://europet.cl/wp-content/uploads/2020/01/plato-dogit-gourmet-rojo.jpg'),
(27, 15700, 9, 'afp Travel dog', '', 5, 7, 1, 3, 13, 'https://dojiw2m9tvv09.cloudfront.net/9927/product/X_afp_arnes_seg6782.png?213'),
(28, 36500, 3, 'pet mate arnes auto', 'Arnés acolchado con adaptador para el cinturón de auto. Viaja seguro. Evita multas.\r\n\r\nXS: hasta 4.5 kilos\r\nS: hasta 11 kilos / se ajusta de 38 a 56 cm\r\nM: hasta 22.5 kilos / se ajusta de 46 a 66 cm\r\n\r\nL: hasta 32 kilos / se ajusta de 50 a 76 cm', 4, 14, 1, 3, 13, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_s5341.jpg?72'),
(29, 15600, 7, 'Kong bottle', 'Práctica botella que se convierte en el bebedero para servir agua a tu perro mientras estás fuera de casa, en una caminata, explorando, etc.\r\n\r\nDe acero inoxidable con capacidad de 740cc.', 4, 13, 1, 3, 13, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_g4742.jpg?72'),
(30, 6990, 20, 'Alfatrim', 'Alfatrim es para el tratamiento de infecciones producidas por gérmenes sensibles a la sulfadiazina y trimetoprima. \r\n\r\n*NO AUTOMEDIQUES*\r\n\r\nVENTA BAJO RECOMENDACIÓN MÉDICO VETERINARIA.', 5, 15, 1, 2, 5, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_alfatrim-100-ml-centrovet-ehlinger2975.jpg?72'),
(31, 20000, 7, 'Baytril 150mg', 'Antibacteriano sintético de amplio espectro y rápida absorción para perros grandes.\r\n\r\nPresentación: tabletas masticables de 10 unidades saborizadas.\r\n\r\n\r\n\r\n*NO AUTOMEDIQUES*\r\n\r\nCONDICIÓN DE VENTA: Venta bajo receta Médico Veterinaria.\r\n\r\n(VIGENCIA MAXIMA 30 DIAS)\r\nENVIA TU RECETA AL MAIL:', 4, 16, 1, 2, 5, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_1501478.jpg?72'),
(32, 9700, 9, 'Baytril 50mg', 'Antibiótico bactericida de amplio espectro y rápida absorción para perros y gatos.\r\n\r\nPresentación: tabletas masticables de 10 unidades saborizadas.\r\n\r\n\r\n\r\n*NO AUTOMEDIQUES*\r\n\r\nCONDICIÓN DE VENTA: Venta bajo receta Médico Veterinaria.\r\n\r\n(VIGENCIA MAXIMA 30 DIAS)\r\nENVIA TU RECETA AL MAIL:', 4, 16, 1, 2, 5, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_501510.jpg?72'),
(33, 14000, 18, 'Cefakexina 500mg', 'Antibiótico Cefalosporina de primera generación, bactericida de amplio espectro.\r\n\r\nSirve para : Infecciones de piel, tejidos blandos, osteoarticulares, otitis (con perforación timpánica), vías respiratorias y genitourinarias. \r\n\r\n*NO AUTOMEDIQUES*\r\n\r\nCONDICIÓN DE VENTA: Venta bajo receta Médico Veterinaria.\r\n\r\n(VIGENCIA MAXIMA 30 DIAS)\r\nENVIA TU RECETA AL MAIL:', 5, 17, 1, 2, 5, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_77980423600626310.jpg?72'),
(34, 6900, 17, 'paz pet ', 'paz pet es una gran ayuda para su mascota al momento de enfrentar situaciones que le causan estrés, como: cambios de ambientes o traslados, excesos de ladridos o vocalización, alojamientos en hoteles para mascotas, estados de ansiedad por separación, socialización con otros animales, ambientes ruidosos o que sobre estimulen a la mascota (aeropuertos, fiestas, etc), problemas diversos de comportamientos (intentos de monta, auto injurias comunes en perros confinados en espacios pequeños, etc) \r\n\r\n*NO AUTOMEDIQUES*\r\n\r\nVENTA BAJO RECOMENDACIÓN MÉDICO VETERINARIA.', 5, 20, 1, 2, 6, 'https://www.amigales.cl/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/a/pazpet1_1.jpg'),
(35, 5800, 8, 'pacifor', 'Tranquilizante indicado como agente sedante para perros y gatos; con duración del efecto de 6 a 12 horas.\r\n\r\nPresentaciones:\r\n\r\nSolución oral con gotario de 10 ml\r\n\r\nEstuche con 10 comprimidos orales\r\n\r\nCONDICIÓN DE VENTA: Venta bajo receta Médico Veterinaria.\r\n\r\n(VIGENCIA MAXIMA 30 DIAS)', 4, 20, 1, 2, 6, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_pacifor-gotas9995.jpg?72'),
(36, 19990, 9, 'Calmer', 'Calmer es una mezcla natural con base en aromaterapia y sustento científico, que ayuda a calmar, tranquilizar y a bajar la ansiedad de perros y gatos. Este producto no es un sedante, mantiene al animal tranquilo, es de fácil administración, con un suave masaje en pecho, parte interior de las orejas, ingle, puente nasal, según la sensibilidad de cada animal. Es 100% activo y libre de parabenos y derivados del petróleo, alcoholes y fragancias. Es ideal para calmar a nuestros amigos en situaciones estresantes como viajes, cambios de casa y fuegos artificiales.', 5, 19, 1, 2, 6, 'https://www.clubdeperrosygatos.cl/wp-content/uploads/2018/10/calmer.jpg'),
(37, 9200, 6, 'Apetipet', 'Suplemento vitamínico para perros a base de Carnitina, complementada con aminoácidos, vitaminas y Calcio. Su fórmula aumenta las ganas de comer de su mascota.\r\n\r\nPresentación: jarabe de 100 ml', 5, 20, 1, 2, 7, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_apetipet9801.jpg?72'),
(38, 16000, 10, 'biofresh gatito', 'Alimento con alta inclusión de carnes frescas con un toque de vegetales y frutas nobles. El resultado es un alimento GRAIN FREE, completo y balanceado, que se destaca por elevar la nutrición de los carnívoros a su más alto nivel. La biotecnología de Biofresh garantiza la conservación de este alimento de forma 100% natural y segura, sin conservantes artificiales añadidos.\r\n\r\npresentación: 1.5kg.', 5, 2, 2, 1, 12, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_biofreshgatosfilhote5401.png?72'),
(39, 25990, 7, 'orijen cat & kitten', 'Alimento apropiado para gatos y gatitos, formulado con pollo y pavo de corral, pescado de captura silvestre y huevos del nido. Provee una dieta rica y variada en proteína animal.', 4, 1, 2, 1, 12, 'https://dojiw2m9tvv09.cloudfront.net/36585/product/X_ds-orijen-cat-and-kitten-fr-xl0903.jpg?72');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE `region` (
  `idRegion` int(1) NOT NULL,
  `nombreRegion` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `region`
--

INSERT INTO `region` (`idRegion`, `nombreRegion`) VALUES
(1, 'Arica y Parinacota'),
(2, 'Tarapaca'),
(3, 'Antofagasta'),
(4, 'Atacama'),
(5, 'Coquimbo'),
(6, 'Valparaiso'),
(7, 'Metropolitana de Santiago'),
(8, 'Libertador General Bernardo O\'Higgins'),
(9, 'Maule'),
(10, 'Nuble'),
(11, 'BioBio'),
(12, 'La Araucania'),
(13, 'Los Rios'),
(14, 'Los Lagos'),
(15, 'Aysen del General Carlo Ibanez del Campo'),
(16, 'Magallanes y la Antartica Chilena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategoria`
--

CREATE TABLE `subcategoria` (
  `idSubcategoria` int(1) NOT NULL,
  `nombreSubCategoria` varchar(250) NOT NULL,
  `idCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subcategoria`
--

INSERT INTO `subcategoria` (`idSubcategoria`, `nombreSubCategoria`, `idCategoria`) VALUES
(1, 'Alimento Adulto', 1),
(2, 'Alimento Senior', 1),
(3, 'Alimentos Humedos', 1),
(4, 'Snacks', 1),
(5, 'Antibioticos', 2),
(6, 'Tranquilizantes', 2),
(7, 'Vitaminas suplementos y Sustitutos', 2),
(8, 'Antiparasitarios', 2),
(9, 'Juguetes', 3),
(10, 'Comederos y Bebederos', 3),
(11, 'Camas', 3),
(12, 'Alimentos Kitten', 1),
(13, 'Paseo', 3),
(14, 'Rascadores', 3),
(15, 'Limpieza y Comestica', 4),
(16, 'Accesorios Huron', 3),
(17, 'Accesorios Pequeños Roedores', 3),
(18, 'Accesorios Chinchilla', 3),
(19, 'Alimentos y Sanck Huron', 1),
(20, 'Alimentos y Sanck Chinchilla', 1),
(21, 'Alimentos y Snack Pequeños Roedores', 1),
(22, 'Alimentos y Snack Erizo', 1),
(23, 'Alimento Puppy', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nombres` varchar(256) NOT NULL,
  `apellidoP` varchar(256) NOT NULL,
  `apellidoM` varchar(256) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `direccion` varchar(256) NOT NULL,
  `idComuna` int(1) NOT NULL,
  `correo` varchar(256) NOT NULL,
  `contrasena` varchar(256) NOT NULL,
  `rolUsuario` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`nombres`, `apellidoP`, `apellidoM`, `rut`, `direccion`, `idComuna`, `correo`, `contrasena`, `rolUsuario`) VALUES
('Toshi Limoncito', 'Perez', 'Marin', '11234234-1', 'direcion un lugar', 2, 'toshi@gmail.com', '5d5e18d1cd75f9e97f27a25981673975', 0),
('Mario Roberto', 'Mendez', 'Mesias', '11402075-k', 'una direccion 123l', 6, 'mario@gmail.com', '9e34a6abbe04da03a9cb2c75883f0765', 0),
('Admin1', 'Ad', 'Min1', '12345678-9', 'direccion de admin', 3, 'admin@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 1),
('Sofia Francisca', 'Martinez', 'Alvarez', '20501974-k', 'una direccion 123232', 52, 'sofia@gmail.com', '3bea0d292e0da63ccb3f89c4b2706846', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD KEY `idProductoFKCarrito` (`idProducto`),
  ADD KEY `rutFKCarrito` (`rut`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `categoriaproducto`
--
ALTER TABLE `categoriaproducto`
  ADD KEY `idCategoriaFKCategoriaProducto` (`idCategoria`),
  ADD KEY `idProductoFKCategoriaProducto` (`idProducto`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`idComentario`),
  ADD KEY `rutFKComentario` (`rut`),
  ADD KEY `idProductoFKComentario` (`idProducto`);

--
-- Indices de la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD PRIMARY KEY (`idComuna`),
  ADD KEY `idRegionFKComuna` (`idRegion`),
  ADD KEY `idComuna` (`idComuna`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`idMarca`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`idMascota`);

--
-- Indices de la tabla `mascotacategoria`
--
ALTER TABLE `mascotacategoria`
  ADD PRIMARY KEY (`idMascota`,`idCategoria`);

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`idOrden`),
  ADD KEY `rutUsuarioPkOrden` (`rutUsuario`);

--
-- Indices de la tabla `ordendetalle`
--
ALTER TABLE `ordendetalle`
  ADD PRIMARY KEY (`idOrdenDetalle`),
  ADD KEY `idProductoPkOrdenDetalle` (`idProducto`),
  ADD KEY `idOrdenPkOrdenDetalle` (`idOrden`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `idMarcaFKProducto` (`idMarca`),
  ADD KEY `idMascotaFKProducto` (`idMascota`),
  ADD KEY `idCategoriaFKProducto` (`idCategoria`),
  ADD KEY `idSubCategoriaFKProducto` (`idSubcategoria`);

--
-- Indices de la tabla `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`idRegion`);

--
-- Indices de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`idSubcategoria`),
  ADD KEY `idCategoriaFKSubCategoria` (`idCategoria`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`rut`),
  ADD KEY `idComunaFKUsuario` (`idComuna`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `idComentario` int(1) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `idMarca` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `idMascota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `orden`
--
ALTER TABLE `orden`
  MODIFY `idOrden` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ordendetalle`
--
ALTER TABLE `ordendetalle`
  MODIFY `idOrdenDetalle` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `region`
--
ALTER TABLE `region`
  MODIFY `idRegion` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `idSubcategoria` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `idProductoFKCarrito` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rutFKCarrito` FOREIGN KEY (`rut`) REFERENCES `usuario` (`rut`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `categoriaproducto`
--
ALTER TABLE `categoriaproducto`
  ADD CONSTRAINT `idCategoriaFKCategoriaProducto` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `idProductoFKCategoriaProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `idProductoFKComentario` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rutFKComentario` FOREIGN KEY (`rut`) REFERENCES `usuario` (`rut`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD CONSTRAINT `idRegionFKComuna` FOREIGN KEY (`idRegion`) REFERENCES `region` (`idRegion`) ON DELETE CASCADE;

--
-- Filtros para la tabla `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `rutUsuarioPkOrden` FOREIGN KEY (`rutUsuario`) REFERENCES `usuario` (`rut`) ON DELETE CASCADE;

--
-- Filtros para la tabla `ordendetalle`
--
ALTER TABLE `ordendetalle`
  ADD CONSTRAINT `idOrdenPkOrdenDetalle` FOREIGN KEY (`idOrden`) REFERENCES `orden` (`idOrden`) ON DELETE CASCADE,
  ADD CONSTRAINT `idProductoPkOrdenDetalle` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `idCategoriaFKProducto` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE,
  ADD CONSTRAINT `idMarcaFKProducto` FOREIGN KEY (`idMarca`) REFERENCES `marca` (`idMarca`) ON DELETE CASCADE,
  ADD CONSTRAINT `idMascotaFKProducto` FOREIGN KEY (`idMascota`) REFERENCES `mascota` (`idMascota`) ON DELETE CASCADE,
  ADD CONSTRAINT `idSubCategoriaFKProducto` FOREIGN KEY (`idSubcategoria`) REFERENCES `subcategoria` (`idSubcategoria`) ON DELETE CASCADE;

--
-- Filtros para la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD CONSTRAINT `idCategoriaFKSubCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `idComunaFKUsuario` FOREIGN KEY (`idComuna`) REFERENCES `comuna` (`idComuna`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
