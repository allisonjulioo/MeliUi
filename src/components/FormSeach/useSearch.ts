import {useState, useContext} from 'react';
import {ContextProducts} from 'useList';
import debounce from 'lodash.debounce';
import {queryProducts} from './useSearchService';

export interface Search {
  search: string;
}

const useSearch = () => {
  const [state, setState] = useContext(ContextProducts);
  const getListProducts = async (search: string) => {
    const {data, errors, loading} = await queryProducts(search);
    setState({data, errors, search, loading});

    return {data, errors, loading};
  };

  const [debouncedSearch] = useState(() => debounce(getListProducts, 500));

  const handleSearch = (value: string) => debouncedSearch(value);

  return {state, handleSearch};
};
export {useSearch};
