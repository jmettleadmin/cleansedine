import type { Product } from '@shared/schema';
import supplementImage from '@assets/generated_images/Pet_supplement_product_photography_a6615556.png';
import treatsImage from '@assets/generated_images/Dog_treats_product_photo_9fc4d4cd.png';
import catFoodImage from '@assets/generated_images/Cat_food_product_photo_fb9798b2.png';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Multi-Vitamin Complex',
    description: 'Complete daily vitamins and minerals for optimal pet health. Supports immune system, bone health, and vitality.',
    price: 1299,
    image: supplementImage,
    category: 'Supplements',
    inStock: true,
  },
  {
    id: '2',
    name: 'Omega-3 Fish Oil Capsules',
    description: 'Pure fish oil rich in EPA and DHA for healthy skin, shiny coat, and joint support.',
    price: 899,
    image: supplementImage,
    category: 'Supplements',
    inStock: true,
  },
  {
    id: '3',
    name: 'Natural Dog Treats',
    description: 'Organic, grain-free treats made with real chicken and vegetables. Perfect for training and rewards.',
    price: 549,
    image: treatsImage,
    category: 'Treats',
    inStock: true,
  },
  {
    id: '4',
    name: 'Premium Cat Food',
    description: 'Nutritionally balanced premium cat food with real fish protein and essential nutrients.',
    price: 799,
    image: catFoodImage,
    category: 'Food',
    inStock: true,
  },
  {
    id: '5',
    name: 'Joint Support Formula',
    description: 'Glucosamine and chondroitin blend for healthy joints and mobility in aging pets.',
    price: 1499,
    image: supplementImage,
    category: 'Supplements',
    inStock: true,
  },
  {
    id: '6',
    name: 'Probiotic Digestive Support',
    description: 'Advanced probiotic formula for digestive health and immune system support.',
    price: 999,
    image: supplementImage,
    category: 'Supplements',
    inStock: true,
  },
  {
    id: '7',
    name: 'Dental Chew Treats',
    description: 'Natural dental chews that help reduce plaque and tartar while freshening breath.',
    price: 649,
    image: treatsImage,
    category: 'Treats',
    inStock: false,
  },
  {
    id: '8',
    name: 'Grain-Free Dog Food',
    description: 'Premium grain-free formula with real meat as the first ingredient.',
    price: 1899,
    image: treatsImage,
    category: 'Food',
    inStock: true,
  },
];
