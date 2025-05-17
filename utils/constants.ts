// Logo tarzlarına karşılık gelen görsellerin isim eşlemesi
export const styleToImageMap: Record<string, string> = {
  monogram: 'image1',
  abstract: 'image2',
  mascot: 'image3',
  'no-style': 'image4',
};

// Görsel isimlerine karşılık gelen dosyalar
export const imageMap: Record<string, any> = {
  image1: require('../assets/images/image1.png'),
  image2: require('../assets/images/image2.png'),
  image3: require('../assets/images/image3.png'),
  image4: require('../assets/images/image4.png'),
};

// Kullanıcının seçebileceği logo tarzları
export const logoStyles = [
  { id: 'no-style', label: 'No Style' },
  { id: 'monogram', label: 'Monogram' },
  { id: 'abstract', label: 'Abstract' },
  { id: 'mascot', label: 'Mascot' },
];

// Rastgele önerilecek prompt ve stiller
export const surprisePrompts = [
  { prompt: "Ece Software for Simple and clean logo", style: "monogram" },
  { prompt: "Vintage Co. for Retro and vintage style logo", style: "abstract" },
  { prompt: "Happy Paws for Playful mascot logo", style: "mascot" },
  { prompt: "Nova Studio for Minimalist and modern logo", style: "no-style" },
];
