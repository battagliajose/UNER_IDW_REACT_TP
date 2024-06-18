USE idw;

/*delete from alojamientos where idAlojamiento > 0*/

/*alter table alojamientos drop TipoAlojamiento*/

INSERT INTO `tiposalojamiento` (`idTipoAlojamiento`, `Descripcion`) VALUES
(1, 'Casa'),
(2, 'Departamento'),
(3, 'Cabaña'),
(4, 'Duplex');

INSERT INTO `servicios` (`idServicio`, `Nombre`) VALUES
(1, 'WIFI'),
(2, 'Pileta'),
(3, 'Cochera'),
(4, 'Parrilla'),
(5, 'Yakuzi');

INSERT INTO alojamientos (idAlojamiento, Titulo, Descripcion, Latitud, Longitud, PrecioPorDia, CantidadDormitorios, CantidadBanios, Estado, idTipoAlojamiento) VALUES
(1, 'Bella vista', 'Disfruta de unas vistas impresionantes desde este acogedor apartamento. Con una ubicación privilegiada, es el lugar perfecto para relajarse y disfrutar de la belleza natural que te rodea.', 40.7128, -74.006, 150, 2, 1, 'Disponible', 2),
(2, 'Cerca de la playa', 'Este encantador alojamiento te ofrece la oportunidad de estar a solo unos pasos de la arena y el mar. Perfecto para los amantes del sol y el mar que buscan comodidad y conveniencia.', 34.0522, -118.2437, 200, 3, 2, 'Reservado', 1),
(3, 'Gran capacidad', 'Con amplios espacios y todas las comodidades que necesitas, este alojamiento es ideal para grupos grandes o familias que buscan una estancia cómoda y memorable.', 51.5074, -0.1278, 300, 5, 3, 'Disponible', 3),
(4, 'Ciudad', 'Sumérgete en el ritmo vibrante de la ciudad desde este moderno apartamento. Con una ubicación céntrica, estarás rodeado de restaurantes, tiendas y atracciones emocionantes.', 48.8566, 2.3522, 120, 1, 1, 'Reservado', 4),
(5, 'Campo', 'Escápate del ajetreo y el bullicio de la vida urbana y encuentra paz y tranquilidad en este encantador alojamiento rural. Rodeado de naturaleza, es el lugar perfecto para desconectar y recargar energías.', 45.4215, -75.6919, 180, 4, 2, 'Disponible', 2),
(6, 'Apartamento moderno', 'Un apartamento moderno con todas las comodidades para una estancia relajante.', 34.0522, -118.2437, 160, 2, 1, 'Disponible', 1),
(7, 'Vistas al mar', 'Disfruta de unas impresionantes vistas al mar desde este acogedor alojamiento.', 41.3851, 2.1734, 220, 3, 2, 'Reservado', 3),
(8, 'Loft céntrico', 'Un loft moderno y elegante en el corazón de la ciudad.', 40.7128, -74.006, 180, 1, 1, 'Disponible', 4),
(9, 'Casa rural', 'Escápate a esta encantadora casa rural y disfruta de la tranquilidad del campo.', 37.7749, -122.4194, 250, 3, 2, 'Reservado', 2),
(10, 'Apartamento de lujo', 'Experimenta el lujo y la comodidad en este impresionante apartamento.', 51.5074, -0.1278, 300, 2, 2, 'Disponible', 1),
(11, 'Casa junto al río', 'Relájate en esta encantadora casa con vistas al río y al bosque circundante.', 40.7128, -74.006, 220, 3, 2, 'Reservado', 3),
(12, 'Chalet de montaña', 'Un acogedor chalet de montaña con impresionantes vistas panorámicas.', 47.6062, -122.3321, 280, 4, 3, 'Disponible', 4),
(13, 'Casita junto al lago', 'Disfruta de la serenidad del lago en esta pintoresca casita.', 45.4215, -75.6919, 200, 2, 1, 'Reservado', 2),
(14, 'Ático con terraza', 'Un elegante ático con una espaciosa terraza para disfrutar del sol y las vistas.', 34.0522, -118.2437, 180, 1, 1, 'Disponible', 1),
(15, 'Apartamento histórico', 'Sumérgete en la historia en este encantador apartamento situado en un edificio histórico.', 51.5074, -0.1278, 250, 2, 1, 'Reservado', 3),
(16, 'Villa de lujo', 'Una impresionante villa con piscina privada y todas las comodidades de lujo.', 40.7128, -74.006, 500, 6, 4, 'Disponible', 4),
(17, 'Refugio en la montaña', 'Escápate del bullicio de la ciudad y encuentra paz y tranquilidad en este refugio de montaña.', 47.6062, -122.3321, 180, 3, 2, 'Reservado', 2),
(18, 'Cabaña acogedora', 'Una cabaña encantadora para una escapada romántica o un retiro tranquilo.', 34.0522, -118.2437, 150, 1, 1, 'Disponible', 1),
(19, 'Apartamento familiar', 'Espacioso y cómodo, este apartamento es perfecto para familias que buscan un hogar lejos de casa.', 40.7128, -74.006, 200, 3, 2, 'Reservado', 3),
(20, 'Suite de lujo', 'Disfruta de la máxima comodidad y elegancia en esta lujosa suite.', 51.5074, -0.1278, 400, 2, 2, 'Disponible', 4);

INSERT INTO imagenes (idImagen, idAlojamiento, RutaArchivo) VALUES
(1, 1, '../../img/tarjetas/apartment-01.jpg'),
(2, 2, '../../img/tarjetas/apartment-02.jpg'),
(3, 3, '../../img/tarjetas/apartment-03.jpg'),
(4, 4, '../../img/tarjetas/apartment-04.jpg'),
(5, 5, '../../img/tarjetas/apartment-05.jpg'),
(6, 6, '../../img/tarjetas/apartment-06.jpg'),
(7, 7, '../../img/tarjetas/apartment-07.jpg'),
(8, 8, '../../img/tarjetas/apartment-08.jpg'),
(9, 9, '../../img/tarjetas/apartment-09.jpg'),
(10, 10, '../../img/tarjetas/apartment-10.jpg'),
(11, 11, '../../img/tarjetas/apartment-11.jpg'),
(12, 12, '../../img/tarjetas/apartment-12.jpg'),
(13, 13, '../../img/tarjetas/apartment-13.jpg'),
(14, 14, '../../img/tarjetas/apartment-14.jpg'),
(15, 15, '../../img/tarjetas/apartment-15.jpg'),
(16, 16, '../../img/tarjetas/apartment-16.jpg'),
(17, 17, '../../img/tarjetas/apartment-17.jpg'),
(18, 18, '../../img/tarjetas/apartment-18.jpg'),
(19, 19, '../../img/tarjetas/apartment-19.jpg'),
(20, 20, '../../img/tarjetas/apartment-20.jpg');

