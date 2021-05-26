import {useState, useEffect, useCallback} from 'react';
import {queryProductDetail} from './useProductDetailService';
import {useParams} from 'react-router';
import {Product} from 'models/product';

export interface Search {
  search: string;
}

const useProductDetail = () => {
  const {id} = useParams<{id: string}>();
  const [data, setData] = useState<Product>();
  const [error, setError] = useState<unknown>();

  const getProductDetail = useCallback(async () => {
    const {
      data: {item},
      errors,
    } = await queryProductDetail(id);
    setData(item);
    setError(errors);
  }, []);

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  return {data, error};
};
export {useProductDetail};
