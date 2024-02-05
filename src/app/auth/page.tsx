'use client';
import {authorizeUser} from '@/services/userActions';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {Box, Typography, Button} from '@mui/material';

type AuthorizationParams = {
  searchParams: {
    code: string;
  };
};

export default function Authorization({searchParams}: AuthorizationParams) {
  const {push} = useRouter();

  useEffect(() => {
    async function getToken() {
      const response = await authorizeUser(
        searchParams.code,
        `${window.location.origin}/auth/`,
      );
      document.cookie = `token=${response?.data?.access_token}`;
    }

    searchParams.code && getToken();
    push('/');
  }, [])
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2vh',
      }}
    >
      <Typography variant="h1" align="center" sx={{fontSize: '3rem'}}>
        Authorization successful!
      </Typography>
      <Typography variant="h5" align="center">
        You were successfully authororised.
      </Typography>
      <Typography align="center">
        You will be redirected to the main page, if it {`doesn't`} happen,
        please, click the button below.
      </Typography>
      <Button href="/" variant="contained">
        Return
      </Button>
    </Box>
  );
}
