import React, {useState, createContext, ReactNode, FC} from 'react';
import {success} from 'mocks/productsList/fixtures';
import {ResponseListProducts} from 'models/products';

const ContextProducts = createContext<ResponseListProducts | any>(success);

const ProductsContext: FC<{
  children: ReactNode;
  data?: {data: ResponseListProducts};
}> = ({children, data}) => {
  const [state, setState] =
    useState<{data: ResponseListProducts} | undefined>(data);

  return (
    <ContextProducts.Provider value={[state, setState]}>
      {children}
    </ContextProducts.Provider>
  );
};
export {ProductsContext, ContextProducts};
