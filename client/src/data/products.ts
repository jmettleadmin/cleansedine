import type { Product } from '@shared/schema';
import cleansedineImage from '@assets/cleansedine_1759242906402.png';
import oralcareImage from '@assets/oralcare_1759242906404.png';
import furtasticImage from '@assets/furtastic_1759242906403.png';
import purepetImage from '@assets/purepet_1759243051518.png';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cleansedine Antiseptic/Disinfectant Solution',
    description: 'Chlorhexidine Gluconate 0.5% w/v solution. Alcohol-free, skin-friendly formula for rinse and non-rinse use.',
    price: 89500,
    image: cleansedineImage,
    category: 'Disinfectant',
    inStock: true,
  },
  {
    id: '2',
    name: 'Cleansedine Oral Care',
    description: 'Chlorhexidine Gluconate oral care solution for pets. Helps maintain oral hygiene and fresh breath.',
    price: 42500,
    image: oralcareImage,
    category: 'Oral Care',
    inStock: true,
  },
  {
    id: '3',
    name: 'Fur-tastic Medicated Shampoo',
    description: 'Chlorhexidine Gluconate & Ketoconazole medicated shampoo. Anti-fungal, anti-bacterial formula for clean and healthy pets.',
    price: 55000,
    image: furtasticImage,
    category: 'Grooming',
    inStock: true,
  },
  {
    id: '4',
    name: 'Purepet Multi-Surface Disinfectant',
    description: 'Powerful multi-surface disinfectant. Eliminates germs, kills parasites on kennel, bed linen, toys, and feeding bowls. Safe for kids and pets.',
    price: 69500,
    image: purepetImage,
    category: 'Disinfectant',
    inStock: true,
  },
];
