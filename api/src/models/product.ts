export interface Product {
  id: number;
  title: string;
  sold_quantity?: number;
  price: {
    currency: string;
    amount: number;
    decimals: number;
    formated?: string;
  };
  state?: {
    id: string;
    name: string;
  };
  picture: string;
  condition: string;
  free_shipping?: boolean;
  description?: string;
}
