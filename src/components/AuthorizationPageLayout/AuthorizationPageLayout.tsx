import {Box, Typography, Button} from '@mui/material';

export function AuthorizationPageLayout(): JSX.Element {
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
