'use client';
import {authorizeUser} from '@/services/userActions';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { AuthorizationPageLayout } from '@/components';

type AuthorizationParams = {
  searchParams: {
    code: string;
  };
};

export default function Authorization() {
  const router: AppRouterInstance = useRouter();
  setTimeout(() => router.push('/'), 2000);
  return (
    <AuthorizationPageLayout />
  );
}

// export default function Authorization({searchParams}: AuthorizationParams) {
//   const router: AppRouterInstance = useRouter();

//   useEffect(() => {
//     async function getToken() {
//       const response = await authorizeUser(
//         searchParams.code,
//         `${window.location.origin}/auth/`,
//       );
//       document.cookie = `${encodeURIComponent('token')}=${encodeURIComponent(response?.access_token)}`;
//     }
//     searchParams.code && getToken();
//     router.push('/');
//   }, []);
//   return (
//     <Box
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '2vh',
//       }}
//     >
//       <Typography variant="h1" align="center" sx={{fontSize: '3rem'}}>
//         Authorization successful!
//       </Typography>
//       <Typography variant="h5" align="center">
//         You were successfully authororised.
//       </Typography>
//       <Typography align="center">
//         You will be redirected to the main page, if it {`doesn't`} happen,
//         please, click the button below.
//       </Typography>
//       <Button href="/" variant="contained">
//         Return
//       </Button>
//     </Box>
//   );
// }
