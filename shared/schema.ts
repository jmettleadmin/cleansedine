import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.string(),
  inStock: z.boolean(),
});

export const cartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
});

export type Product = z.infer<typeof productSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
