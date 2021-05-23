import {useHistory, useLocation} from 'react-router';
import {useContext, useEffect} from 'react';
import {ContextSearch} from 'models/context';
import {ContextProducts} from 'useList';
import {resultsSearchPage} from './base';

const useRouter = () => {
  const history = useHistory();
  const {search: queryString} = useLocation();

  const [context] = useContext<ContextSearch[]>(ContextProducts);
  const {search} = context ?? {search: ''};

  const searchParams = () => {
    const params = new URLSearchParams(queryString);
    const value = params.get('search');

    return {value};
  };

  useEffect(() => {
    if (search.length > 0) {
      return history.push({
        pathname: resultsSearchPage.path,
        search: `?search=${search}`,
      });
    }
  }, [search, history]);

  return {searchParams};
};
export {useRouter};
