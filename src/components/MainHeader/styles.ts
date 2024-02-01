import {headerHeight, headerSmallDesktopHeight} from './header-config';
import {queries} from '@/utils/queries/queries';

type headerStyles = {
  appBar: React.CSSProperties;
  input: React.CSSProperties;
  searchButton: React.CSSProperties;
};

export const headerStyles: headerStyles = {
  appBar: {
    height: headerHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [queries.smallDesktop]: {
      height: headerSmallDesktopHeight,
    },
  },
  input: {
    backgroundColor: '#FFF',
    width: '22rem',
    height: '2.5rem',
    marginLeft: '1rem',
    [queries.smallDesktop]: {
      height: '2rem',
    },
  },
  searchButton: {},
};
