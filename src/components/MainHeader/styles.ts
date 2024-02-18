import {headerHeight, headerSmallDesktopHeight} from './header-config';
import {queries} from '@/utils/queries/queries';

type headerStyles = {
  appBar: React.CSSProperties;
  logo: React.CSSProperties;
  input: React.CSSProperties;
  searchButton: React.CSSProperties;
  content: React.CSSProperties;
  signIn: React.CSSProperties;
};

export const headerStyles: headerStyles = {
  appBar: {
    height: headerHeight,
    display: 'flex',
    justifyContent: 'center',
    [queries.smallDesktop]: {
      height: headerSmallDesktopHeight,
    },
  },
  logo: {
    cursor: 'pointer',
    [queries.smallDesktop]: {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    paddingLeft: '2%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    width: '22rem',
    height: '2.5rem',
    marginLeft: '1rem',
    [queries.smallDesktop]: {
      height: '2rem',
    },
    [queries.largeTablet]: {
      fontSize: '0.7rem',
    },
  },
  searchButton: {
    position: 'relative',
    bottom: '0.1rem',
    [queries.smallDesktop]: {
      bottom: '0.05rem',
    },
  },
  signIn: {
    cursor: 'pointer',
    fontWeight: 600,
    color: '#FFF',
    textDecoration: 'none',
    transition: 'color .5s',
    // @ts-ignore
    '&:hover': {
      color: 'orange',
    },
  },
};
