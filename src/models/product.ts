export interface Product {
  id: number;
  title: string;
  sold: number;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  state: {
    id: string;
    name: string;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  description: string;
}
