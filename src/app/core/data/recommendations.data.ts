export interface DailyRecommendation {
  id: number;
  title: string;
  content: string;
  // Place images at assets/images/tips/tip-N.jpg (N = id)
  // Fallback: assets/images/plants-image.jpg
  image: string;
  impact: 'alto' | 'medio' | 'bajo';
  category: string;
}

export const DAILY_RECOMMENDATIONS: DailyRecommendation[] = [
  {
    id: 1,
    title: 'Duchas más cortas, planeta más sano',
    content:
      'Reducir tu ducha de 10 a 5 minutos puede evitar hasta 0.3 kg de CO₂ al día. Además conservas agua potable valiosa para todos.',
    image: 'assets/images/tips/tip-1.jpg',
    impact: 'bajo',
    category: 'Hogar',
  },
  {
    id: 2,
    title: 'El bus es más verde de lo que crees',
    content:
      'Un trayecto de 10 km en bus emite hasta 78% menos CO₂ que en carro particular. Usarlo dos días a la semana marca una diferencia real.',
    image: 'assets/images/tips/tip-2.jpg',
    impact: 'alto',
    category: 'Transporte',
  },
  {
    id: 3,
    title: 'Tu bolsa de tela tiene superpoderes',
    content:
      'Producir una bolsa plástica genera 0.07 kg de CO₂. Reutilizar una bolsa de tela 100 veces reduce esa huella prácticamente a cero.',
    image: 'assets/images/tips/tip-3.jpg',
    impact: 'bajo',
    category: 'Compras',
  },
  {
    id: 4,
    title: 'Un martes sin carne roja',
    content:
      'Una porción de carne de res genera hasta 6.6 kg de CO₂. Reemplazarla por pollo o legumbres reduce esa huella en más de un 85%. Pequeño cambio, gran impacto.',
    image: 'assets/images/tips/tip-4.jpg',
    impact: 'alto',
    category: 'Alimentación',
  },
  {
    id: 5,
    title: 'El cargador desconectado también ayuda',
    content:
      'Los cargadores en modo standby siguen consumiendo energía. Desconectarlos al salir de casa puede evitar hasta 0.04 kg de CO₂ al día sin esfuerzo.',
    image: 'assets/images/tips/tip-5.jpg',
    impact: 'bajo',
    category: 'Energía',
  },
  {
    id: 6,
    title: 'LED: misma luz, menos planeta gastado',
    content:
      'Cambiar una bombilla incandescente por una LED reduce el consumo eléctrico en un 75%. Una sola bombilla puede ahorrarte 0.4 kg de CO₂ en un año.',
    image: 'assets/images/tips/tip-6.jpg',
    impact: 'medio',
    category: 'Energía',
  },
  {
    id: 7,
    title: 'Convierte tu basura orgánica en abono',
    content:
      'Los residuos orgánicos en rellenos generan metano, 25 veces más potente que el CO₂. Hacer compost en casa puede evitar hasta 0.1 kg de CO₂ por kg de residuo.',
    image: 'assets/images/tips/tip-7.jpg',
    impact: 'medio',
    category: 'Residuos',
  },
  {
    id: 8,
    title: 'Compra local, come fresco',
    content:
      'Los alimentos importados viajan miles de kilómetros antes de llegar a tu mesa. Comprar en mercados locales puede reducir hasta 0.5 kg de CO₂ por visita.',
    image: 'assets/images/tips/tip-8.jpg',
    impact: 'medio',
    category: 'Alimentación',
  },
  {
    id: 9,
    title: 'La bicicleta: cero emisiones, doble beneficio',
    content:
      'Usar bicicleta en vez de carro para trayectos menores a 5 km elimina completamente las emisiones de ese viaje. Y es gratuito para tu salud cardiovascular.',
    image: 'assets/images/tips/tip-9.jpg',
    impact: 'alto',
    category: 'Transporte',
  },
  {
    id: 10,
    title: 'Apaga el computador al terminar',
    content:
      'Dejar el PC encendido toda la noche genera alrededor de 0.14 kg de CO₂. Apagarlo al terminar el día suma una diferencia significativa al mes.',
    image: 'assets/images/tips/tip-10.jpg',
    impact: 'bajo',
    category: 'Energía',
  },
  {
    id: 11,
    title: 'Segunda mano, primera elección',
    content:
      'Producir una camiseta nueva genera hasta 2.1 kg de CO₂. Comprar ropa de segunda mano extiende su vida útil y evita esa emisión por completo.',
    image: 'assets/images/tips/tip-11.jpg',
    impact: 'medio',
    category: 'Compras',
  },
  {
    id: 12,
    title: 'Come lo que la tierra da hoy',
    content:
      'Los alimentos fuera de temporada requieren invernaderos calefactados o largas cadenas de frío. Elegir lo que está en cosecha reduce su huella hasta un 40%.',
    image: 'assets/images/tips/tip-12.jpg',
    impact: 'bajo',
    category: 'Alimentación',
  },
  {
    id: 13,
    title: 'Tu botella reutilizable importa',
    content:
      'Producir y transportar botellas plásticas de un solo uso genera CO₂ en cada etapa. Llevar tu propia botella puede evitar hasta 0.08 kg de CO₂ al día.',
    image: 'assets/images/tips/tip-13.jpg',
    impact: 'medio',
    category: 'Residuos',
  },
  {
    id: 14,
    title: 'Una planta en casa hace más de lo que crees',
    content:
      'Una planta mediana puede absorber hasta 1 kg de CO₂ al año, además de mejorar la calidad del aire interior y reducir el estrés. Un gesto pequeño con doble efecto.',
    image: 'assets/images/tips/tip-14.jpg',
    impact: 'bajo',
    category: 'Hogar',
  },
  {
    id: 15,
    title: 'Sube el aire acondicionado un par de grados',
    content:
      'Ajustar el aire de 18°C a 24°C reduce su consumo hasta un 40%. Cada grado adicional equivale aproximadamente a 0.2 kg de CO₂ menos al día.',
    image: 'assets/images/tips/tip-15.jpg',
    impact: 'alto',
    category: 'Energía',
  },
  {
    id: 16,
    title: 'Repara antes de desechar',
    content:
      'Fabricar un nuevo smartphone genera hasta 70 kg de CO₂. Reparar el tuyo extiende su vida útil y evita que todo ese esfuerzo de producción termine en la basura.',
    image: 'assets/images/tips/tip-16.jpg',
    impact: 'alto',
    category: 'Electrónicos',
  },
  {
    id: 17,
    title: 'Carpooling: menos carros, mismo destino',
    content:
      'Compartir el carro con un compañero de trabajo divide a la mitad las emisiones de CO₂ de ese trayecto. Una conversación puede valer 0.1 kg de CO₂ menos al día.',
    image: 'assets/images/tips/tip-17.jpg',
    impact: 'medio',
    category: 'Transporte',
  },
  {
    id: 18,
    title: 'Menos comida desperdiciada, menos CO₂',
    content:
      'El 30% de los alimentos producidos en el mundo se desperdician, generando 3.3 gigatoneladas de CO₂ anualmente. Planear tus comidas reduce directamente esa cifra.',
    image: 'assets/images/tips/tip-18.jpg',
    impact: 'alto',
    category: 'Alimentación',
  },
];
