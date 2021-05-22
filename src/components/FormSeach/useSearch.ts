import {useState, useCallback, useContext} from 'react';
import debounce from 'lodash.debounce';
import {ContextProducts} from 'useList';
import {queryProducts} from './useSearchService';

export interface Search {
  search: string;
}

const useSearch = () => {
  const [state, setState] = useContext(ContextProducts);
  const [error, setError] = useState<unknown>();

  const getListProducts = useCallback(
    async (value: string) => {
      const {data, errors} = await queryProducts(value);

      if (data) {
        setState(data);
        return {data};
      }
      setError(errors);
      return {error};
    },
    [setState, error],
  );

  const [debouncedSearch] = useState(() => debounce(getListProducts, 500));

  const handleSearch = (value: string) => debouncedSearch(value);

  return {state, handleSearch};
};
export {useSearch};
