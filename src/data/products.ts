export type Category = 'Bazar' | 'Juguetes' | 'Camping y Pesca' | 'Herramientas' | 'Muebles y Electrodomesticos';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    image: string;
}

export const products: Product[] = [
    {
        "id": "p1",
        "name": "Balde con Mopa Giratoria",
        "description": "Balde con sistema de escurrido giratorio y mopa incluida, ideal para limpiar pisos.",
        "price": 495,
        "category": "Bazar",
        "image": "/imagenes/valde-con-mopa.jpg"
    },
    {
        "id": "p2",
        "name": "Balde con Mopa Premium",
        "description": "Balde con mopa giratoria de alta capacidad, sistema de escurrido eficiente y mango extensible.",
        "price": 1087,
        "category": "Bazar",
        "image": "/imagenes/valde-con-mopa-premium.jpg"
    },
    {
        "id": "p3",
        "name": "Balde Transparente Rischioto",
        "description": "Balde plástico transparente de uso doméstico, resistente y liviano.",
        "price": 369,
        "category": "Bazar",
        "image": "/imagenes/valde-1.jpg"
    },
    {
        "id": "p4",
        "name": "Carrito de Compras",
        "description": "Carrito de compras plegable con ruedas, ideal para mercado y supermercado.",
        "price": 640,
        "category": "Bazar",
        "image": "/imagenes/carrito-compra.jpg"
    },
    {
        "id": "p5",
        "name": "Tina de Baño para Bebé",
        "description": "Tina plástica ergonómica para el baño del bebé, segura y fácil de usar.",
        "price": 459,
        "category": "Bazar",
        "image": "/imagenes/tina-baño.jpg"
    },
    {
        "id": "p6",
        "name": "Papel Higiénico Finopel x12 30m",
        "description": "Pack de 12 rollos de papel higiénico Finopel de 30 metros cada uno.",
        "price": 149,
        "category": "Bazar",
        "image": "/imagenes/papel-higienico-1.jpg"
    },
    {
        "id": "p7",
        "name": "Papel Higiénico Finopel x16 30m",
        "description": "Pack de 16 rollos de papel higiénico Finopel de 30 metros cada uno.",
        "price": 199,
        "category": "Bazar",
        "image": "/imagenes/papel-higienico-2.jpg"
    },
    {
        "id": "p8",
        "name": "Papel Higiénico Finopel x12 60m",
        "description": "Pack de 12 rollos de papel higiénico Finopel de 60 metros cada uno.",
        "price": 259,
        "category": "Bazar",
        "image": "/imagenes/papel-higienico-3.jpg"
    },
    {
        "id": "p9",
        "name": "Papel Higiénico Campanita Soft Plus XL x4",
        "description": "Pack de 4 rollos XL de papel higiénico Campanita Soft Plus, extra suave.",
        "price": 147,
        "category": "Bazar",
        "image": "/imagenes/papel-higienico-4.jpg"
    },
    {
        "id": "p10",
        "name": "Estantería Plástica 4 Pisos",
        "description": "Estantería organizadora de 4 niveles en plástico resistente, fácil armado.",
        "price": 639,
        "category": "Bazar",
        "image": "/imagenes/estructura-4-pisos.jpg"
    },
    {
        "id": "p11",
        "name": "Estantería Plástica 3 Pisos Esquinera",
        "description": "Estantería esquinera de 3 pisos en plástico, aprovecha espacios reducidos.",
        "price": 429,
        "category": "Bazar",
        "image": "/imagenes/estructura-3-pisos.jpg"
    },
    {
        "id": "p12",
        "name": "Tacho de Basura con Tapa Vaivén Rischioto",
        "description": "Tacho de basura con tapa de apertura vaivén, práctico para cocina y baño.",
        "price": 126,
        "category": "Bazar",
        "image": "/imagenes/tacho-basura-con-tapa.jpg"
    },
    {
        "id": "p13",
        "name": "Tacho de Basura con Pedal Blanco",
        "description": "Tacho de basura con pedal de apertura, color blanco, cuerpo metálico resistente.",
        "price": 690,
        "category": "Bazar",
        "image": "/imagenes/tacho-basura-blanco.jpg"
    },
    {
        "id": "p14",
        "name": "Papelera Decorativa Little Flower",
        "description": "Papelera plástica decorativa con diseño de flores, ideal para escritorio o baño.",
        "price": 228,
        "category": "Bazar",
        "image": "/imagenes/papelera-blanca.jpg"
    },
    {
        "id": "p15",
        "name": "Papelera Infantil Gatito Rosa",
        "description": "Papelera infantil rosa con diseño de gatito, liviana y colorida.",
        "price": 229,
        "category": "Bazar",
        "image": "/imagenes/papelera-rosada.jpg"
    },
    {
        "id": "p16",
        "name": "Servilletero Plástico Calado",
        "description": "Servilletero de plástico con diseño calado decorativo, elegante para la mesa.",
        "price": 169,
        "category": "Bazar",
        "image": "/imagenes/servilletero.jpg"
    },
    {
        "id": "p17",
        "name": "Perchas Plásticas x6",
        "description": "Pack de 6 perchas plásticas resistentes para ropa, livianas y duraderas.",
        "price": 179,
        "category": "Bazar",
        "image": "/imagenes/percha-plastico.jpg"
    },
    {
        "id": "p18",
        "name": "Perchas Metal x10",
        "description": "Pack de 10 perchas metálicas resistentes, ideales para ropa pesada.",
        "price": 198,
        "category": "Bazar",
        "image": "/imagenes/percha-metal.jpg"
    },
    {
        "id": "p19",
        "name": "Portacepillos de Pared con Ventosa",
        "description": "Soporte de pared con ventosa para cepillos y accesorios de baño, diseño floral.",
        "price": 219,
        "category": "Bazar",
        "image": "/imagenes/accesorio-baño.jpg"
    },
    {
        "id": "p20",
        "name": "Gancho de Toalla con Ventosa",
        "description": "Soporte de pared para toallas con ventosa de fijación fuerte, sin perforar.",
        "price": 178,
        "category": "Bazar",
        "image": "/imagenes/accesorio-baño-2.jpg"
    },
    {
        "id": "p21",
        "name": "Cepillo y Piedra Pómez para Pies",
        "description": "Set de limpieza podal con cepillo y piedra pómez, suaviza y exfolia talones.",
        "price": 59,
        "category": "Bazar",
        "image": "/imagenes/cepillo-baño.jpg"
    },
    {
        "id": "p22",
        "name": "Lima Pedicura 4 en 1",
        "description": "Paleta de pedicura 4 pasos: limpia, exfolia, lima y pule. Ideal para el hogar.",
        "price": 63,
        "category": "Bazar",
        "image": "/imagenes/lima-pie.jpg"
    },
    {
        "id": "p23",
        "name": "Toallero Doble con Ventosa",
        "description": "Barra toallero doble fijación con ventosa, sin perforar, acero y plástico.",
        "price": 265,
        "category": "Bazar",
        "image": "/imagenes/acsesorio-baño-4.jpg"
    },
    {
        "id": "p24",
        "name": "Barra con Ganchos Acero Inox",
        "description": "Barra organizadora con ganchos, fijación ventosa, apta para baño y cocina.",
        "price": 286,
        "category": "Bazar",
        "image": "/imagenes/accesorio-baño-5.jpg"
    },
    {
        "id": "p25",
        "name": "Repisa de Ducha con Ventosa",
        "description": "Repisa semicircular para ducha con ventosa potente, soporta hasta 3 kg.",
        "price": 315,
        "category": "Bazar",
        "image": "/imagenes/porta-jabon.jpg"
    },
    {
        "id": "p26",
        "name": "Repisa Esquinera de Ducha con Ventosa",
        "description": "Repisa triangular para rincón de ducha, fijación sin taladro, hasta 3 kg.",
        "price": 329,
        "category": "Bazar",
        "image": "/imagenes/porta-shampo.jpg"
    },
    {
        "id": "p27",
        "name": "Cortina de Baño Tela Broder con Anillos",
        "description": "Cortina de ducha 100% poliester repelente al agua, incluye 12 anillos de tela.",
        "price": 490,
        "category": "Bazar",
        "image": "/imagenes/cortina-bano.jpg"
    },
    {
        "id": "p28",
        "name": "Cortina de Baño con Ganchos",
        "description": "Cortina de ducha con diseño estampado e incluye 12 ganchos plásticos.",
        "price": 215,
        "category": "Bazar",
        "image": "/imagenes/cortina-bano-2.jpg"
    },
    {
        "id": "p29",
        "name": "Cuchillo de Cocina Today Acero Inox",
        "description": "Cuchillo de acero inoxidable con mango metálico, hoja larga y resistente.",
        "price": 673,
        "category": "Bazar",
        "image": "/imagenes/cuchillo.jpg"
    },
    {
        "id": "p30",
        "name": "\"Cuchillo para Carne Di Solle 8\"\"\"",
        "description": "\"Cuchillo profesional inox 8\"\", mango antimicrobial, hoja de alto carbono.\"",
        "price": 599,
        "category": "Bazar",
        "image": "/imagenes/cuchillo2.jpg"
    },
    {
        "id": "p31",
        "name": "\"Cuchillo para Carne Di Solle 10\"\"\"",
        "description": "\"Cuchillo profesional inox 10\"\", mango antimicrobial, ideal para cortes grandes.\"",
        "price": 689,
        "category": "Bazar",
        "image": "/imagenes/cuchillo3.jpg"
    },
    {
        "id": "p32",
        "name": "Set Asado Di Solle 2 Piezas",
        "description": "Set churrasquero con cuchillo y tenedor de asado, mango de madera certificada.",
        "price": 539,
        "category": "Bazar",
        "image": "/imagenes/cuchilloytenedorasado.jpg"
    },
    {
        "id": "p33",
        "name": "Tenedor de Asado Mango Madera",
        "description": "Tenedor para asado en acero inox con mango de madera, largo y resistente.",
        "price": 315,
        "category": "Bazar",
        "image": "/imagenes/tenedorasado.jpg"
    },
    {
        "id": "p34",
        "name": "Cuchillo de Asado Mango Madera",
        "description": "Cuchillo para asado con hoja inox y mango de madera natural, robusto y preciso.",
        "price": 389,
        "category": "Bazar",
        "image": "/imagenes/cuchilloasado.jpg"
    },
    {
        "id": "p35",
        "name": "Espátula de Asado Mango Madera",
        "description": "Espátula inox perforada con mango de madera, ideal para parrilla y asado.",
        "price": 458,
        "category": "Bazar",
        "image": "/imagenes/espatula.jpg"
    },
    {
        "id": "p36",
        "name": "Tenedores de Mesa Selecta x6",
        "description": "Set de 6 tenedores de mesa con mango de madera oscura, línea Comodoro.",
        "price": 299,
        "category": "Bazar",
        "image": "/imagenes/tenedores.jpg"
    },
    {
        "id": "p37",
        "name": "Cuchillos Gran Asado Selecta x6",
        "description": "Set de 6 cuchillos para asado con hoja dentada y mango de madera, línea Comodoro.",
        "price": 475,
        "category": "Bazar",
        "image": "/imagenes/cuchilloscarne.jpg"
    },
    {
        "id": "p38",
        "name": "Cuchilla Selecta Mango Madera",
        "description": "Cuchilla de cocina con hoja ancha inox y mango de madera, cortes precisos.",
        "price": 679,
        "category": "Bazar",
        "image": "/imagenes/cuchillo4.jpg"
    },
    {
        "id": "p39",
        "name": "Pinza de Asado Mango Madera",
        "description": "Pinza larga de acero inox con mango de madera, ideal para parrilla y asado.",
        "price": 499,
        "category": "Bazar",
        "image": "/imagenes/pinzaasado.jpg"
    },
    {
        "id": "p40",
        "name": "Tenedores Inox x12",
        "description": "Pack de 12 tenedores de acero inoxidable, diseño clásico para uso diario.",
        "price": 124,
        "category": "Bazar",
        "image": "/imagenes/tenedores-pack.jpg"
    },
    {
        "id": "p41",
        "name": "Cuchillos de Mesa Inox x12",
        "description": "Pack de 12 cuchillos de mesa acero inox con hoja dentada, uso diario.",
        "price": 263,
        "category": "Bazar",
        "image": "/imagenes/cuchillos-pack.jpg"
    },
    {
        "id": "p42",
        "name": "Tenedores Inox x6",
        "description": "Set de 6 tenedores de acero inoxidable, mango liso elegante.",
        "price": 199,
        "category": "Bazar",
        "image": "/imagenes/tenedorespack6.jpg"
    },
    {
        "id": "p43",
        "name": "Cucharas de Mesa Inox x12",
        "description": "Pack de 12 cucharas de acero inoxidable, diseño clásico para mesa.",
        "price": 124,
        "category": "Bazar",
        "image": "/imagenes/packcuchara.jpg"
    },
    {
        "id": "p44",
        "name": "Cuchara Grande Nylon Selecta",
        "description": "Cuchara de servir en nylon resistente al calor, mango ergonómico.",
        "price": 95,
        "category": "Bazar",
        "image": "/imagenes/cucharagrande.jpg"
    },
    {
        "id": "p45",
        "name": "Espumadera Nylon Selecta",
        "description": "Espumadera de nylon con perforaciones, apta para sartenes antiadherentes.",
        "price": 95,
        "category": "Bazar",
        "image": "/imagenes/espumadera.jpg"
    },
    {
        "id": "p46",
        "name": "Batidor Nylon Selecta",
        "description": "Batidor de silicona flexible con mango ergonómico, ideal para mezclar y batir.",
        "price": 95,
        "category": "Bazar",
        "image": "/imagenes/batidor.jpg"
    },
    {
        "id": "p47",
        "name": "Pincel de Cocina Silicona Freecook",
        "description": "Pincel de silicona con mango de madera, apto para horno y parrilla.",
        "price": 209,
        "category": "Bazar",
        "image": "/imagenes/pincel.jpg"
    },
    {
        "id": "p48",
        "name": "Cuchillo de Pan Selecta Eco",
        "description": "Cuchillo para pan con hoja dentada larga y mango de madera natural certificada.",
        "price": 339,
        "category": "Bazar",
        "image": "/imagenes/cuchillopan.jpg"
    },
    {
        "id": "p49",
        "name": "Juego de Cubiertos Tramontina x24",
        "description": "Set completo 24 piezas con cucharas, tenedores y cuchillos, mango plástico rojo.",
        "price": 720,
        "category": "Bazar",
        "image": "/imagenes/juego-cubiertos.jpg"
    },
    {
        "id": "p50",
        "name": "Tabla de Madera con Accesorios para Picada",
        "description": "Tabla ovalada de madera con set de 3 utensilios inox para quesos y picada.",
        "price": 964,
        "category": "Bazar",
        "image": "/imagenes/tablaconacsesorios.jpg"
    },
    {
        "id": "p51",
        "name": "Set de Cuchillos para Quesos Funtree",
        "description": "Set 3 cuchillos especiales para queso con mango de madera y soporte.",
        "price": 642,
        "category": "Bazar",
        "image": "/imagenes/picadaacsesorios.jpg"
    },
    {
        "id": "p52",
        "name": "Servilletero de Mesa Madera",
        "description": "Servilletero de madera con abertura oval, estilo rústico elegante.",
        "price": 269,
        "category": "Bazar",
        "image": "/imagenes/servilleterodemesa.jpg"
    },
    {
        "id": "p53",
        "name": "Portacubiertos Redondo de Madera",
        "description": "Organizador de cubiertos cilíndrico de madera natural entrelazada.",
        "price": 287,
        "category": "Bazar",
        "image": "/imagenes/portacubiertos.jpg"
    },
    {
        "id": "p54",
        "name": "Portacubiertos Cuadrado de Bambú",
        "description": "Organizador de cubiertos cuadrado de bambú natural, resistente y ecológico.",
        "price": 287,
        "category": "Bazar",
        "image": "/imagenes/portacubiertos2.jpg"
    },
    {
        "id": "p55",
        "name": "Repasador de Cocina x2",
        "description": "Pack de 2 repasadores de tela a cuadros, absorbentes y resistentes.",
        "price": 85,
        "category": "Bazar",
        "image": "/imagenes/repsadaor.jpg"
    },
    {
        "id": "p56",
        "name": "Sartén Antiadherente Selecta Marble 20cm",
        "description": "Sartén mármol 20cm antiadherente ultraresistente, apta para inducción, 4mm.",
        "price": 845,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/sarten.jpg"
    },
    {
        "id": "p57",
        "name": "Sartén con Tapa Inox 24cm",
        "description": "Sartén 24cm con tapa de vidrio y cuerpo granito, capacidad 2.3L, inducción.",
        "price": 1395,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/sarten2.jpg"
    },
    {
        "id": "p58",
        "name": "Panquequera Selecta Marble 22cm",
        "description": "Sartén panquequera mármol 22cm antiadherente, mango soft touch, inducción.",
        "price": 1175,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/panquequera.jpg"
    },
    {
        "id": "p59",
        "name": "Sartén Inox con Tapa 28cm",
        "description": "Sartén de acero inox 28cm con tapa de vidrio, capacidad 4.1L, apta para inducción.",
        "price": 1495,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/olla-sarten.jpg"
    },
    {
        "id": "p60",
        "name": "Sartén Cerámica Brinox 24cm",
        "description": "Sartén antiadherente cerámica 24cm x 5cm, capacidad 1.6L, 6 capas de protección.",
        "price": 947,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/sarten3.jpg"
    },
    {
        "id": "p61",
        "name": "Sartén Cerámica Brinox 20cm",
        "description": "Sartén antiadherente cerámica 20cm x 3.8cm, capacidad 1L, liviana y resistente.",
        "price": 789,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/sarten4.jpg"
    },
    {
        "id": "p62",
        "name": "Panquequera / Tapioquera Brinox 22cm",
        "description": "Sartén plana para panqueques y tapioca 22cm, antiadherente, capacidad 590ml.",
        "price": 485,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/panquequera2.jpg"
    },
    {
        "id": "p63",
        "name": "Asadera con Grill Selecta 37x29cm",
        "description": "Asadera con superficie acanalada tipo grill, 37x29x5cm, antiadherente.",
        "price": 690,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/asaderacongrill.jpg"
    },
    {
        "id": "p64",
        "name": "Plancha de Hierro Fundido con Mango Madera",
        "description": "Plancha/grill redonda de hierro fundido con mango de madera plegable, ideal para asado.",
        "price": 755,
        "category": "Muebles y Electrodomesticos",
        "image": "/imagenes/plancha.jpg"
    },
    {
        "id": "p65",
        "name": "Set de Baño 4 Piezas Floral Celeste",
        "description": "Set de accesorios de baño con dispensador, vaso, jabonera y soporte, diseño floral.",
        "price": 699,
        "category": "Bazar",
        "image": "/imagenes/setbaño.jpg"
    },
    {
        "id": "p66",
        "name": "Set de Baño Cerámica 3 Piezas",
        "description": "Set de baño cerámica estilo europeo con dispensador, jabonera y vaso, color blanco.",
        "price": 799,
        "category": "Bazar",
        "image": "/imagenes/setbaño2.jpg"
    },
    {
        "id": "p67",
        "name": "Dispensador de Jabón Líquido Coza Negro",
        "description": "Porta jabón líquido plástico con bomba, diseño moderno color negro, reciclable.",
        "price": 245,
        "category": "Bazar",
        "image": "/imagenes/portajabonliqudio.jpg"
    },
    {
        "id": "p68",
        "name": "Tupper con Manija Rectangular Floral",
        "description": "Recipiente plástico con tapa y manija, diseño floral, práctico para llevar comida.",
        "price": 117,
        "category": "Bazar",
        "image": "/imagenes/tuperconmanija.jpg"
    },
    {
        "id": "p69",
        "name": "Tupper con Manija Redondo Infantil",
        "description": "Recipiente redondo con tapa y asa, diseño infantil animado, ideal para vianda.",
        "price": 190,
        "category": "Bazar",
        "image": "/imagenes/tuperconmanijaredondo.jpg"
    },
    {
        "id": "p70",
        "name": "Set 6 Tuppers Apilables Multicolor",
        "description": "Juego de 6 recipientes apilables con tapas de colores, distintos tamaños.",
        "price": 316,
        "category": "Bazar",
        "image": "/imagenes/6tuper.jpg"
    },
    {
        "id": "p71",
        "name": "Set 4 Tuppers Herméticos",
        "description": "Juego de 4 recipientes herméticos apilables con tapas de colores.",
        "price": 249,
        "category": "Bazar",
        "image": "/imagenes/4tuper.jpg"
    },
    {
        "id": "p72",
        "name": "Set 5 Tuppers Flower Shower",
        "description": "Juego de 5 tuppers con cierre hermético y diseño floral, distintos tamaños.",
        "price": 499,
        "category": "Bazar",
        "image": "/imagenes/5tuperestampado.jpg"
    },
    {
        "id": "p73",
        "name": "Set 3 Tuppers Herméticos Crisper",
        "description": "Juego de 3 recipientes herméticos apilables, aptos para freezer y microondas.",
        "price": 184,
        "category": "Bazar",
        "image": "/imagenes/3tupper.jpg"
    },
    {
        "id": "p74",
        "name": "Set 4 Tuppers Easy Buckle",
        "description": "Juego de 4 recipientes con cierre fácil, para conservar alimentos frescos.",
        "price": 205,
        "category": "Bazar",
        "image": "/imagenes/4tuper2.jpg"
    },
    {
        "id": "p75",
        "name": "Recipiente Plástico con Tapa Tritec",
        "description": "Jarra recipiente plástico con tapa a rosca, práctica para almacenar líquidos.",
        "price": 110,
        "category": "Bazar",
        "image": "/imagenes/recipiente.jpg"
    },
    {
        "id": "p76",
        "name": "Azucarero / Farinero Plástico Rischioto",
        "description": "Contenedor plástico con tapa dispensadora para azúcar o harina, cierre hermético.",
        "price": 79,
        "category": "Bazar",
        "image": "/imagenes/tuperazucar.jpg"
    },
    {
        "id": "p77",
        "name": "Vaso Plástico Cuadriculado Naranja",
        "description": "Vaso plástico naranja translúcido con diseño cuadriculado, liviano y resistente.",
        "price": 45,
        "category": "Bazar",
        "image": "/imagenes/vasoplastico.jpg"
    },
    {
        "id": "p78",
        "name": "Taza Plástica Rosa con Asa",
        "description": "Taza plástica color rosa, resistente y liviana, ideal para uso diario.",
        "price": 55,
        "category": "Bazar",
        "image": "/imagenes/tazaplastico.jpg"
    },
    {
        "id": "p79",
        "name": "Colador Plástico con Asa",
        "description": "Colador plástico color salmón con asa integrada, ideal para escurrir frutas y verduras.",
        "price": 56,
        "category": "Cocina",
        "image": "/imagenes/colador.jpg"
    },
    {
        "id": "p80",
        "name": "Plato Divisor para Bebé",
        "description": "Plato plástico con divisiones y estampado infantil, ideal para la hora de comida del bebé.",
        "price": 129,
        "category": "Bebés",
        "image": "/imagenes/platobb.jpg"
    },
    {
        "id": "p81",
        "name": "Botella Estampada con Frase Rosa",
        "description": "Botella plástica rosa con frase motivacional, tapa metálica y correa incluida.",
        "price": 215,
        "category": "Botellería",
        "image": "/imagenes/botellaestampada.jpg"
    },
    {
        "id": "p82",
        "name": "Botella Estampada con Frase Amarilla",
        "description": "Botella plástica amarilla con frase motivacional, tapa metálica y correa incluida.",
        "price": 258,
        "category": "Botellería",
        "image": "/imagenes/botellaestampada2.jpg"
    },
    {
        "id": "p83",
        "name": "Botella Deportiva con Pico 600ml",
        "description": "Botella deportiva 600ml con tapa abatible y pico de hidratación, apta para uso diario.",
        "price": 390,
        "category": "Botellería",
        "image": "/imagenes/botella3.jpg"
    },
    {
        "id": "p84",
        "name": "Botella Deportiva con Aro Celeste",
        "description": "Botella deportiva celeste con aro colgante y tapa a rosca, práctica y liviana.",
        "price": 390,
        "category": "Botellería",
        "image": "/imagenes/botella4.jpg"
    },
    {
        "id": "p85",
        "name": "Botella Fashion Sport 720ml Rosa",
        "description": "Botella deportiva Cille 720ml color rosa, con tapa metálica y correa ergonómica.",
        "price": 335,
        "category": "Botellería",
        "image": "/imagenes/botella5.jpg"
    },
    {
        "id": "p86",
        "name": "Botella Fashion Sport 1.5L Celeste",
        "description": "Botella deportiva Cille 1.5L color celeste, tapa metálica, gran capacidad.",
        "price": 443,
        "category": "Botellería",
        "image": "/imagenes/botella6.jpg"
    },
    {
        "id": "p87",
        "name": "Botella BPA Free Amarilla",
        "description": "Botella plástica amarilla libre de BPA, con tapa dorada y correa de silicona incluida.",
        "price": 258,
        "category": "Botellería",
        "image": "/imagenes/botella7.jpg"
    },
    {
        "id": "p88",
        "name": "Termo Metálico Verde 1000ml",
        "description": "Termo metálico de alta calidad 1000ml color verde, conserva temperatura por horas.",
        "price": 569,
        "category": "Botellería",
        "image": "/imagenes/termo.jpg"
    },
    {
        "id": "p89",
        "name": "Termo Metálico Plateado 1000ml",
        "description": "Termo metálico de alta calidad 1000ml color plateado, diseño clásico y resistente.",
        "price": 540,
        "category": "Botellería",
        "image": "/imagenes/termo2.jpg"
    },
    {
        "id": "p90",
        "name": "Cubetera Plástica",
        "description": "Cubetera plástica con múltiples cavidades para hacer cubos de hielo, fácil desmolde.",
        "price": 79,
        "category": "Cocina",
        "image": "/imagenes/cubera.jpg"
    },
    {
        "id": "p91",
        "name": "Taza Plástica Roja con Asa",
        "description": "Taza plástica color rojo coral con asa, resistente y apta para uso diario.",
        "price": 29,
        "category": "Bazar",
        "image": "/imagenes/tazaplastico2.jpg"
    },
    {
        "id": "p92",
        "name": "Palo de Amasar de Madera 40cm",
        "description": "Palo de amasar de madera natural 40cm, ideal para masas, tartas y repostería.",
        "price": 129,
        "category": "Cocina",
        "image": "/imagenes/paloamasar.jpg"
    },
    {
        "id": "p93",
        "name": "Posavasos de Bambú con Porta",
        "description": "Set de posavasos de bambú con diseño floral y porta incluido, elegante y ecológico.",
        "price": 509,
        "category": "Cocina",
        "image": "/imagenes/posavasomadera.jpg"
    },
    {
        "id": "p94",
        "name": "Taza Cerámica Fruit Day con Tapa 360ml",
        "description": "Taza cerámica 360ml con diseño frutal y tapa metálica, ideal para café o té.",
        "price": 263,
        "category": "Bazar",
        "image": "/imagenes/taza.jpg"
    },
    {
        "id": "p95",
        "name": "Rallador de Acero Inoxidable 4 Caras",
        "description": "Rallador cúbico de acero inoxidable con 4 tipos de corte y mango ergonómico.",
        "price": 249,
        "category": "Cocina",
        "image": "/imagenes/rallador.jpg"
    },
    {
        "id": "p96",
        "name": "Jarra de Vidrio Happy Summer Pasabahçe",
        "description": "Jarra de vidrio Pasabahçe con diseño veraniego, ideal para jugos y bebidas frías.",
        "price": 109,
        "category": "Bazar",
        "image": "/imagenes/jarra.jpg"
    },
    {
        "id": "p97",
        "name": "Jarra de Vidrio con Tapa Roja 1650cc",
        "description": "Jarra de vidrio transparente con tapa plástica roja, gran capacidad 1650cc.",
        "price": 439,
        "category": "Bazar",
        "image": "/imagenes/jarra2.jpg"
    },
    {
        "id": "p98",
        "name": "Jarra de Vidrio Lisa Alta 1.85L",
        "description": "Jarra de vidrio transparente de diseño alto y estilizado, capacidad 1.85L.",
        "price": 239,
        "category": "Bazar",
        "image": "/imagenes/jarra3.jpg"
    },
    {
        "id": "p99",
        "name": "Jarra Pasabahçe Panzuda 0.5L",
        "description": "Jarra de vidrio Pasabahçe de forma redondeada, elegante y resistente, 0.5L.",
        "price": 199,
        "category": "Bazar",
        "image": "/imagenes/jarra4.jpg"
    },
    {
        "id": "p100",
        "name": "Jarra de Vidrio Redondeada 1L",
        "description": "Jarra de vidrio transparente con forma redondeada y asa cómoda, 1L.",
        "price": 415,
        "category": "Bazar",
        "image": "/imagenes/jarra5.jpg"
    },
    {
        "id": "p101",
        "name": "Jarra de Vidrio Alta Cuadrada 1L",
        "description": "Jarra de vidrio alta con forma cuadrada y asa recta, diseño moderno 1L.",
        "price": 275,
        "category": "Bazar",
        "image": "/imagenes/jarra6.jpg"
    },
    {
        "id": "p102",
        "name": "Jarra de Vidrio Ochavada con Tapa",
        "description": "Jarra de vidrio tallada con tapa transparente, elegante y resistente.",
        "price": 359,
        "category": "Bazar",
        "image": "/imagenes/jarra7.jpg"
    },
    {
        "id": "p103",
        "name": "Jarra de Vidrio Tallada con Tapa Blanca 1.3L",
        "description": "Jarra de vidrio con diseño tallado y tapa blanca hermética, capacidad 1.3L.",
        "price": 369,
        "category": "Bazar",
        "image": "/imagenes/jarra8.jpg"
    },
    {
        "id": "p104",
        "name": "Jarra de Vidrio Cuadrada con Tapa Blanca 1.2L",
        "description": "Jarra de vidrio cuadrada con tapa plástica blanca, práctica y resistente, 1.2L.",
        "price": 259,
        "category": "Bazar",
        "image": "/imagenes/jarra9.jpg"
    },
    {
        "id": "p105",
        "name": "Vaso de Vidrio Bajo 8.5x7cm",
        "description": "Vaso de vidrio bajo y ancho, apto para agua, jugos y bebidas variadas.",
        "price": 56,
        "category": "Bazar",
        "image": "/imagenes/vaso1.jpg"
    },
    {
        "id": "p106",
        "name": "Vaso Imperial Octogonal 11.5x6.5cm",
        "description": "Vaso de vidrio Imperial con base octogonal, resistente y de diseño clásico.",
        "price": 89,
        "category": "Bazar",
        "image": "/imagenes/vaso2.jpg"
    },
    {
        "id": "p107",
        "name": "Vaso Imperial Alto Tallado 14x8cm",
        "description": "Vaso de vidrio Imperial alto con tallado decorativo en la base, elegante.",
        "price": 89,
        "category": "Bazar",
        "image": "/imagenes/vaso3.jpg"
    },
    {
        "id": "p108",
        "name": "Vaso Imperial Tallado Mediano 12x7.5cm",
        "description": "Vaso de vidrio Imperial mediano con tallado decorativo, versátil y resistente.",
        "price": 79,
        "category": "Bazar",
        "image": "/imagenes/vaso4.jpg"
    },
    {
        "id": "p109",
        "name": "Vaso Imperial Bajo 8x7.5cm",
        "description": "Vaso de vidrio Imperial bajo con base tallada, ideal para whisky y jugos.",
        "price": 59,
        "category": "Bazar",
        "image": "/imagenes/vaso5.jpg"
    },
    {
        "id": "p110",
        "name": "Vaso Imperial Redondeado 11x8.5cm",
        "description": "Vaso de vidrio Imperial de forma redondeada, base sólida y diseño moderno.",
        "price": 89,
        "category": "Bazar",
        "image": "/imagenes/vaso6.jpg"
    },
    {
        "id": "p111",
        "name": "Vaso de Vidrio Cuadrado Bajo 8.5x8cm",
        "description": "Vaso de vidrio de forma cuadrada y base robusta, ideal para bebidas cortas.",
        "price": 79,
        "category": "Bazar",
        "image": "/imagenes/vaso7.jpg"
    },
    {
        "id": "p112",
        "name": "Vaso de Vidrio Cilíndrico Alto 14x6cm",
        "description": "Vaso de vidrio cilíndrico alto y delgado, ideal para agua, jugos y tragos largos.",
        "price": 52,
        "category": "Bazar",
        "image": "/imagenes/vaso9.jpg"
    },
    {
        "id": "p113",
        "name": "Vaso de Vidrio Cilíndrico Liso 13.5x6.5cm",
        "description": "Vaso de vidrio cilíndrico liso, diseño simple y resistente para uso diario.",
        "price": 39,
        "category": "Bazar",
        "image": "/imagenes/vaso8.jpg"
    },
    {
        "id": "p114",
        "name": "Salero Pimentero Figura Cocinero",
        "description": "Salero y pimentero de vidrio con tapa plástica en forma de cocinero, diseño divertido.",
        "price": 59,
        "category": "Cocina",
        "image": "/imagenes/saladeros.jpg"
    },
    {
        "id": "p115",
        "name": "Copa de Vino Transparente 350ml",
        "description": "Copa de vino de vidrio transparente, forma clásica y elegante, capacidad 350ml.",
        "price": 66,
        "category": "Bazar",
        "image": "/imagenes/copa.jpg"
    },
    {
        "id": "p116",
        "name": "Copa Flauta Transparente 190ml",
        "description": "Copa flauta de vidrio transparente, ideal para champagne y espumantes, 190ml.",
        "price": 59,
        "category": "Bazar",
        "image": "/imagenes/copa2.jpg"
    },
    {
        "id": "p117",
        "name": "Copa Flauta Base Cuadrada",
        "description": "Copa flauta de vidrio con base cuadrada, diseño moderno y elegante.",
        "price": 138,
        "category": "Bazar",
        "image": "/imagenes/copa3.jpg"
    },
    {
        "id": "p118",
        "name": "Copa de Vino Iridiscente Dorada",
        "description": "Copa de vino con acabado iridiscente dorado, sofisticada y decorativa.",
        "price": 199,
        "category": "Bazar",
        "image": "/imagenes/copa4.jpg"
    },
    {
        "id": "p119",
        "name": "Copa de Vino con Franja Dorada",
        "description": "Copa de vino transparente con franja dorada decorativa en el borde.",
        "price": 295,
        "category": "Bazar",
        "image": "/imagenes/copa5.jpg"
    },
    {
        "id": "p120",
        "name": "Jarro Cervecero Tallado Grande 1L",
        "description": "Jarro de vidrio tallado con asa, capacidad 1 litro, ideal para cerveza.",
        "price": 249,
        "category": "Bazar",
        "image": "/imagenes/jarra1lt.jpg"
    },
    {
        "id": "p121",
        "name": "Jarro Cervecero Tallado Mediano 473ml",
        "description": "Jarro de vidrio con base tallada y asa, capacidad 473ml, perfecto para cerveza.",
        "price": 219,
        "category": "Bazar",
        "image": "/imagenes/jarracerveza.jpg"
    },
    {
        "id": "p122",
        "name": "Jarro de Vidrio con Asa Tallado",
        "description": "Jarro de vidrio con diseño tallado y asa, versátil para bebidas calientes y frías.",
        "price": 99,
        "category": "Bazar",
        "image": "/imagenes/jarravaso.jpg"
    },
    {
        "id": "p123",
        "name": "Set 6 Vasos de Vidrio Estampados",
        "description": "Set de 6 vasos de vidrio con diseño estampado de gotas de lluvia, coloridos.",
        "price": 270,
        "category": "Bazar",
        "image": "/imagenes/vasos.jpg"
    },
    {
        "id": "p124",
        "name": "Set 6 Vasos Whisky Deli Glassware",
        "description": "Set de 6 vasos de vidrio estilo whisky, resistentes y de alta calidad.",
        "price": 675,
        "category": "Bazar",
        "image": "/imagenes/whisky.jpg"
    },
    {
        "id": "p125",
        "name": "Set 6 Vasos LAV Belek 380cc",
        "description": "Set de 6 vasos LAV Belek de 380cc, diseño moderno y resistente para uso diario.",
        "price": 599,
        "category": "Bazar",
        "image": "/imagenes/vasos2.jpg"
    },
    {
        "id": "p126",
        "name": "Canasta de Junco con Asas",
        "description": "Canasta rectangular de junco trenzado con asas, ideal para pan y decoración.",
        "price": 225,
        "category": "Bazar",
        "image": "/imagenes/canasta.jpg"
    },
    {
        "id": "p127",
        "name": "Canasta de Madera Artesanal",
        "description": "Canasta artesanal elaborada con palitos de madera, original y decorativa.",
        "price": 137,
        "category": "Bazar",
        "image": "/imagenes/canasta2.jpg"
    },
    {
        "id": "p128",
        "name": "Fuente Melamina Azul Floral Grande 30x30cm",
        "description": "Fuente de melamina azul con diseño floral interior, resistente y colorida, 30x30x12cm.",
        "price": 792,
        "category": "Cocina",
        "image": "/imagenes/fuente.jpg"
    },
    {
        "id": "p129",
        "name": "Fuente Melamina Azul Floral Mediana 25x25cm",
        "description": "Fuente de melamina azul con diseño floral interior, tamaño mediano, 25x25x10cm.",
        "price": 540,
        "category": "Cocina",
        "image": "/imagenes/fuente2.jpg"
    },
    {
        "id": "p130",
        "name": "Fuente Melamina Naranja Floral 20x20cm",
        "description": "Fuente de melamina naranja con diseño floral interior, resistente, 20x20x8cm.",
        "price": 355,
        "category": "Cocina",
        "image": "/imagenes/fuente3.jpg"
    },
    {
        "id": "p131",
        "name": "Fuente Melamina Verde Floral 13x13cm",
        "description": "Fuente de melamina verde con diseño floral interior, tamaño pequeño, 13x13x6cm.",
        "price": 114,
        "category": "Cocina",
        "image": "/imagenes/fuente4.jpg"
    },
    {
        "id": "p132",
        "name": "Frutero Forma Manzana Metal",
        "description": "Frutero metálico en forma de manzana con tapa de malla, decorativo y funcional.",
        "price": 218,
        "category": "Cocina",
        "image": "/imagenes/manzanametal.jpg"
    },
    {
        "id": "p133",
        "name": "Bandeja Plástica Sweet Macaron 39x27cm",
        "description": "Bandeja plástica con estampado de macarons, ideal para servir y decorar la mesa.",
        "price": 324,
        "category": "Cocina",
        "image": "/imagenes/bandeja.jpg"
    },
    {
        "id": "p134",
        "name": "Bandeja Melamina Floral Violeta 29x20cm",
        "description": "Bandeja de melamina con diseño floral violeta, elegante para servir o decorar.",
        "price": 139,
        "category": "Cocina",
        "image": "/imagenes/bandeja2.jpg"
    },
    {
        "id": "p135",
        "name": "Plato Ovalado Melamina Rojo y Dorado 32x22cm",
        "description": "Plato ovalado de melamina con borde rojo y cenefa dorada, sofisticado y resistente.",
        "price": 139,
        "category": "Cocina",
        "image": "/imagenes/plato.jpg"
    },
    {
        "id": "p136",
        "name": "Set Pinches Fruta Hummingbird 6 unid.",
        "description": "Set de 6 pinches para fruta en forma de colibri con soporte árbol, decorativos.",
        "price": 115,
        "category": "Cocina",
        "image": "/imagenes/nosequees.jpg"
    },
    {
        "id": "p137",
        "name": "Panera de Bambú con Tapa Corrediza",
        "description": "Panera de bambú natural con tapa corrediza, elegante y funcional para guardar pan.",
        "price": 972,
        "category": "Cocina",
        "image": "/imagenes/paneramadera.jpg"
    },
    {
        "id": "p138",
        "name": "Panera Metálica Estampada Grande",
        "description": "Panera metálica con tapa y diseño estampado de pan, práctica y resistente.",
        "price": 1034,
        "category": "Cocina",
        "image": "/imagenes/paneraestampadagrande.png"
    },
    {
        "id": "p139",
        "name": "Panera Metálica Estampada Chica",
        "description": "Panera metálica chica con tapa y diseño estampado de pan, práctica para la mesa.",
        "price": 840,
        "category": "Cocina",
        "image": "/imagenes/panerachica.png"
    }
];

export const categories: Category[] = [
    'Bazar',
    'Juguetes',
    'Camping y Pesca',
    'Herramientas',
    'Muebles y Electrodomesticos'
];
