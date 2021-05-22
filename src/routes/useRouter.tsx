import {useHistory} from 'react-router';
import {searchPage} from './base';

const scenarions = [
  {
    key: searchPage.key,
    route: {...searchPage},
  },
];

const useRouter = () => {
  const history = useHistory();

  function nextPage<T>(routerKey: string, options?: T) {
    const scenario = scenarions.find(({key}) => key === routerKey);
    history.push(scenario?.route.path ?? '/', {...options});
  }

  return {nextPage};
};
export {useRouter};
