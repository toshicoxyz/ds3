// src/data.ts
export interface Product {
  sku: string
  brand: string
  category: string
  name: string
  price: number | null
  images: string[]
  mainFeatures: string[]
  downloads: {
    label: string
    url: string
    icon: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
}

// ✅ todos los productos deben seguir esta estructura
export const products: Product[] = [
  {
    sku: '6-1427200-4',
    brand: 'AMP',
    category: 'Cable UTP',
    name: 'Cable UTP AMP Categoria 6 Chaqueta CMR 23AWG 6-1427200-4',
    price: 187.0,
    images: [
      'https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg',
      'https://www.ds3comunicaciones.com/AMP/images/Caja.jpg',
    ],
    mainFeatures: [
      'Los Cables AMP NetConnect categoría 6 exceden los requerimientos TIA/EIA-568-B.2-1 e ISO / IEC 11801 Clase E',
      'Cumplen con todos los requisitos de rendimiento para aplicaciones actuales y propuestas, como Gigabit Ethernet (1000BASE-TX).',
      'Disponibles en colores estándar, incluyendo blanco, gris y azul.',
      'Empaquetado en un carrete-in-box, con el estándar 1000 pies libres de empalme longitudinales.',
      'Verificación independiente del cumplimiento de inflamabilidad NEC artículo 800 y NFPA 70, CMR.',
    ],
    downloads: [
      {
        label: 'Datos Técnicos',
        url: 'https://www.ds3comunicaciones.com/AMP/files/6-1427200-4-DS.pdf',
        icon: 'fas fa-file-pdf',
      },
    ],
    specifications: [
      { label: 'Voltage', value: '300VAC or VDC' },
      { label: 'Velocidad Nominal de Propagación', value: '70%' },
      { label: 'Temperatura de Operación', value: ' -20° C a -60° C' },
      { label: 'Temperatura de Almacenamiento', value: ' -20° C a -80° C' },
    ],
  },
  {
    sku: 'C9200L-24P-4G-E',
    brand: 'Cisco',
    category: 'Switch Catalyst',
    name: 'Switch Cisco Catalyst 9200L Essentials C9200L-24P, capa L3 con 24 puertos PoE+ (370W) Gigabit, 04 puertos para fibra SFP',
    price: 1979.0,
    images: [
      'https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_front.jpg',
      'https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_front_large.jpg',
      'https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_back.jpg',
    ],
    mainFeatures: [
      'Switch capa L3 full (Layer 3)',
      'Network Essentials',
      '24 Puertos PoE+ (370 W) Gigabit 10/100/1000',
      '04 puertos 1G para fibra SFP',
      'Capacidad de conmutación: 56 Gbps',
      'Soporta stacking hasta 08 equipos (ancho de banda de 80 Gbps)',
      'Memoria DRAM: 2 GB / Memoria Flash: 4 GB',
    ],
    downloads: [
      {
        label: 'Ficha Técnica',
        url: 'https://www.ds3comunicaciones.com/cisco/files/catalyst_9200.pdf',
        icon: 'fas fa-file-pdf',
      },
      {
        label: 'Manual',
        url: 'https://web.netperu100.com/cisco/catalyst/files/Catalyst_9200_manual.pdf',
        icon: 'fas fa-book-open',
      },
      {
        label: 'Especificaciones',
        url: 'https://web.netperu100.com/cisco/catalyst/files/C9200L-24P-4G-E_esp.pdf',
        icon: 'fas fa-file-alt',
      },
    ],
    specifications: [
      { label: 'Tipo de dispositivo', value: 'Switch gestionado L3' },
      { label: 'Puertos', value: '24 x 10/100/1000 (PoE+) + 4 x Gigabit SFP' },
      { label: 'Presupuesto PoE', value: '370 W' },
      {
        label: 'Dimensiones (An x Prof x Al)',
        value: '44.5 cm x 28.8 cm x 4.4 cm',
      },
      { label: 'Peso', value: '4.35 kg' },
      { label: 'Protocolos de enrutamiento', value: 'OSPF, EIGRP, RIP, IS-IS' },
    ],
  },
  {
    sku: '219590-4',
    brand: 'AMP',
    category: 'Cable UTP',
    name: 'Cable UTP AMP Categoria 5E',
    price: 120.0,
    images: [
      "https://www.ds3comunicaciones.com/AMP/images/219590-4-2.bmp"
    ],
    mainFeatures: [
      'Categoría 5E certificado para transmisión hasta 100 MHz',
      'Compatible con Fast Ethernet y Gigabit Ethernet',
      'Construcción de 4 pares trenzados',
    ],
    downloads: [],
    specifications: [
      { label: 'Categoría', value: 'Cat 5e' },
      { label: 'Tipo', value: 'UTP' },
    ],
  },
  {
    sku: '1859218-2',
    brand: 'AMP',
    category: 'Cable UTP',
    name: 'Cable UTP AMP Categoria 6A Apantallado Chaqueta LSZH',
    price: 280.0,
    images: [
      "https://www.ds3comunicaciones.com/AMP/images/Caja.jpg"
    ],
    mainFeatures: [
      'Categoría 6A para 10 Gigabit Ethernet',
      'Chaqueta LSZH, libre de halógenos, baja emisión de humos',
      'Construcción apantallada para reducir interferencias',
    ],
    downloads: [],
    specifications: [
      { label: 'Categoría', value: 'Cat 6A' },
      { label: 'Chaqueta', value: 'LSZH' },
      { label: 'Blindaje', value: 'FTP' },
    ],
  },
  {
    sku: '5-569278',
    brand: 'AMP',
    category: 'Conectores RJ45',
    name: 'Conector RJ45 AMP Plug Categoria 5E',
    price: 2.5,
    images: [
      "https://www.ds3comunicaciones.com/AMP/images/5-569278-1.jpg",
      "https://www.ds3comunicaciones.com/AMP/images/5-569278-2.JPG",
      "https://www.ds3comunicaciones.com/AMP/images/5-569278-3.jpg"
    ],
    mainFeatures: [
      'Conector modular RJ45 estándar',
      'Compatible con cables UTP Cat 5e sólidos y multifilares',
      'Construcción transparente de alta resistencia',
    ],
    downloads: [],
    specifications: [
      { label: 'Tipo', value: 'RJ45' },
      { label: 'Categoría', value: 'Cat 5e' },
    ],
  },
  {
    sku: '1375055-x',
    brand: 'AMP',
    category: 'Jacks',
    name: 'Jack RJ-45 Cat. 6 marca AMP',
    price: 6.9,
    images: [
      "http://www.ds3comunicaciones.com/AMP/images/1375055-x_front.jpg"
    ],
    mainFeatures: [
      'Jack de ponchado RJ45 Cat 6',
      'Alta resistencia y durabilidad',
      'Cumple con ANSI/TIA-568.2-D',
    ],
    downloads: [],
    specifications: [
      { label: 'Categoría', value: 'Cat 6' },
      { label: 'Tipo', value: 'SL Jack' },
    ],
  },
  {
    sku: '219886-3',
    brand: 'AMP',
    category: 'Patch Cord',
    name: 'Patch Cord UTP Cat 6 de 0.90 metros, marca AMP',
    price: 12.5,
    images: [
      "http://www.ds3comunicaciones.com/AMP/images/219886-3_front.jpg"
    ],
    mainFeatures: [
      'Longitud de 0.90 m',
      'Categoría 6 certificada',
      'Conector RJ45 estándar con protección anti-tirón',
    ],
    downloads: [],
    specifications: [
      { label: 'Categoría', value: 'Cat 6' },
      { label: 'Longitud', value: '0.90 m' },
    ],
  },
  {
    sku: '406981-1',
    brand: 'AMP',
    category: 'Patch Panel',
    name: 'Patch Panel 12 puertos Cat. 5E AMP',
    price: 110.0,
    images: [
      "http://www.ds3comunicaciones.com/AMP/images/406981-1_front.jpg"
    ],
    mainFeatures: [
      '12 puertos RJ45 categoría 5E',
      'Formato rack 19”',
      'Construcción metálica de alta resistencia',
    ],
    downloads: [],
    specifications: [
      { label: 'Puertos', value: '12' },
      { label: 'Categoría', value: 'Cat 5e' },
      { label: 'Formato', value: 'Rack 19”' },
    ],
  },
  {
    sku: '1375159-1',
    brand: 'AMP',
    category: 'Ordenadores',
    name: 'Ordenador de cable horizontal 1RU AMP',
    price: 85.0,
    images: [
      "http://www.ds3comunicaciones.com/AMP/images/1375159-1_front.jpg"
    ],
    mainFeatures: [
      'Gestor de cables horizontal de 1RU',
      'Puerta frontal desmontable',
      'Diseñado para racks estándar de 19”',
    ],
    downloads: [],
    specifications: [
      { label: 'Altura', value: '1RU' },
      { label: 'Tipo', value: 'Horizontal' },
    ],
  },
  // ... más modelos Cisco con mismos campos pero vacíos si no tienes info
]
