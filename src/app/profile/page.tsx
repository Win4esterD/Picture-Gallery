'use client';
import {MainHeader} from '@/components';
import {getUserPrivateData} from '@/services/userData';
import {useEffect, useState} from 'react';
import {Avatar, Box, Typography} from '@mui/material';
import {
  headerHeight,
  headerSmallDesktopHeight,
} from '@/components/MainHeader/header-config';
import {queries} from '@/utils/queries/queries';

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    const getUserData = async (): Promise<any> => {
      const data = await getUserPrivateData();
      setUserData(data);
    };
    getUserData();
  }, []);
  console.log(userData);
  return (
    <>
      <MainHeader />
      <Box
        component="main"
        sx={{
          marginTop: headerHeight,
          display: 'flex',
          justifyContent: 'center',
          [queries.smallDesktop]: {
            marginTop: headerSmallDesktopHeight,
          },
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
          <Avatar
            alt="User avatar"
            src={userData?.profile_image?.large}
            sx={{width: '14rem', height: '14rem'}}
          />
          <Typography component="h1" sx={{fontWeight: 600, fontSize: '2rem'}}>
            {userData?.name}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
