'use client';
import {AppBar, OutlinedInput, Button, useMediaQuery} from '@mui/material';
import {getImagesByQuery} from '@/services/requests';
import {useState, Dispatch, SetStateAction} from 'react';
import {useRouter} from 'next/navigation';
import {queries} from '@/utils/queries/queries';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {headerStyles} from './styles';

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
      <form
        onSubmit={async e => {
          e.preventDefault();
          await peformAnimation();
        }}
        style={{display: 'flex', maxWidth: '90%'}}
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
      </form>
    </AppBar>
  );
}
