import {
  headerHeight,
  headerSmallDesktopHeight,
} from '@/components/MainHeader/header-config';
import {queries} from '@/utils/queries/queries';

type styles = {
  main: React.CSSProperties;
  rightBlock: React.CSSProperties;
  image: React.CSSProperties;
  rightBlockWrapper: React.CSSProperties;
  author: React.CSSProperties;
  description: React.CSSProperties;
  downloadButtonsBlock: React.CSSProperties;
  download: React.CSSProperties;
  relatedTopicsBlock: React.CSSProperties;
  relatedTopicsHeader: React.CSSProperties;
  relatedTopicsButtons: React.CSSProperties;
};

export const styles: styles = {
  main: {
    marginTop: `calc(${headerHeight})`,
    display: 'flex',
    height: `calc(100vh - ${headerHeight})`,
    [queries.smallDesktop]: {
      marginTop: `calc(${headerSmallDesktopHeight})`,
      height: `calc(100vh - ${headerSmallDesktopHeight})`,
    },
    [queries.bigTablet]: {
      flexDirection: 'column',
      height: '100%',
    },
  },
  image: {
    width: '50%',
    height: '100%',
    [queries.bigTablet]: {
      width: '80%',
      height: '100%',
      marginLeft: '10%',
    },
  },
  rightBlock: {
    height: `calc(100vh - ${headerHeight})`,
    width: '50%',
    [queries.bigTablet]: {
      width: '100%',
      height: '100%',
    },
  },
  rightBlockWrapper: {
    paddingLeft: '10%',
    marginTop: '3vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '5vh',
    [queries.smallDesktop]: {
      gap: '3vh',
    },
  },
  author: {
    fontSize: '1.5rem',
    paddingRight: '5%',
    [queries.smallDesktop]: {fontSize: '1rem'},
    [queries.tablet]: {fontSize: '0.9rem'},
  },
  description: {
    fontSize: '1.5rem',
    paddingRight: '5%',
    [queries.smallDesktop]: {fontSize: '1rem'},
    [queries.tablet]: {fontSize: '0.8rem'},
  },
  downloadButtonsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  download: {
    [queries.smallDesktop]: {
      fontSize: '1.5rem',
    },
  },
  relatedTopicsBlock: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '2%',
    gap: '1%',
  },
  relatedTopicsHeader: {
    [queries.smallDesktop]: {
      fontSize: '1.5rem',
    },
  },
  relatedTopicsButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1%',
    marginTop: '1vh',
    [queries.bigTablet]: {
      paddingBottom: '3vh',
    },
  },
};
