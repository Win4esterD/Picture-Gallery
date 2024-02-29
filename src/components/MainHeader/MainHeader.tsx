'use client';
import {
  AppBar,
  OutlinedInput,
  Button,
  useMediaQuery,
  Box,
  Typography,
} from '@mui/material';
import {getImagesByQuery} from '@/services/requests';
import {useState, Dispatch, SetStateAction} from 'react';
import {useRouter} from 'next/navigation';
import {queries} from '@/utils/queries/queries';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {headerStyles} from './styles';
import {ImageStyled} from '..';
import {GlobalContext} from '@/provider/GlobalContext/GlobalContext';
import {useContext} from 'react';

type MainHeaderProps = {
  searchHandler?: Dispatch<SetStateAction<never[]>>;
  setIsPending?: Dispatch<SetStateAction<boolean>>;
  setPages?: Dispatch<SetStateAction<number>>;
};

export function MainHeader({
  searchHandler,
  setIsPending,
  setPages,
}: MainHeaderProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router: AppRouterInstance = useRouter();
  const smallDesktop: boolean = useMediaQuery(queries.smallDesktop);
  const {setIsDialogOpen, isAuth} = useContext(GlobalContext);

  async function peformAnimation(): Promise<void> {
    router.push(`/?query=${searchQuery}&page=1`);
    setIsPending && setIsPending(true);
    if (searchHandler) {
      const response = await getImagesByQuery(searchQuery);
      searchHandler(response.results);
      setPages && setPages(response.total_pages);
    }
    setIsPending && setIsPending(false);
  }

  return (
    <AppBar sx={headerStyles.appBar}>
      <Box sx={headerStyles.content}>
        <ImageStyled
          src="/images/icons/logo.png"
          width={50}
          height={50}
          priority={true}
          alt="logo"
          sx={headerStyles.logo}
          onClick={() => router.push('/')}
        />
        <Box
          component="form"
          onSubmit={async e => {
            e.preventDefault();
            await peformAnimation();
          }}
          sx={{display: 'flex', maxWidth: '65%'}}
        >
          <OutlinedInput
            sx={headerStyles.input}
            color="secondary"
            placeholder="Enter search query"
            onChange={e => setSearchQuery(e.target.value)}
          ></OutlinedInput>
          <Button
            variant="contained"
            color="secondary"
            size={!smallDesktop ? 'large' : 'small'}
            sx={headerStyles.searchButton}
            type="submit"
          >
            SEARCH
          </Button>
        </Box>
        <Typography
          component={!isAuth ? 'span' : 'a'}
          href="/profile/"
          sx={headerStyles.signIn}
          onClick={() => {
            !isAuth && setIsDialogOpen(true);
          }}
        >
          {!isAuth ? 'Sign In' : 'My Profile'}
        </Typography>
      </Box>
    </AppBar>
  );
}
