export interface Item {
  id: number;
  title: string;
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
}
