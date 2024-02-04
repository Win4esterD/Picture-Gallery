"use client";
import {Box, Typography} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {queries} from '@/utils/queries/queries';
import { GlobalContext } from '@/provider/GlobalContext/GlobalContext';
import { useContext } from 'react';

type LikesProps = {
  likedByUser: boolean;
  likes: number;
};

export function Likes({likedByUser, likes}: LikesProps): JSX.Element {
  const sizes = {
    desktop: '3.5rem',
    smallDesktop: '2rem',
  };

  const {isAuth, setIsDialogOpen} = useContext(GlobalContext);

  return (
    <Box sx={{display: 'flex'}}>
      <SvgIcon
        onClick={() => !isAuth && setIsDialogOpen(true)}
        sx={{
          cursor: 'pointer',
          fontSize: sizes.desktop,
          [queries.smallDesktop]: {
            fontSize: sizes.smallDesktop,
          },
        }}
      >
        {!likedByUser ? (
          <FavoriteBorderIcon />
        ) : (
          <FavoriteIcon sx={{color: 'red'}} />
        )}
      </SvgIcon>
      <Typography
        sx={{
          paddingLeft: '0.1rem',
          fontSize: `${parseInt(sizes.desktop) / 2}rem`,
          fontWeight: 600,
          [queries.smallDesktop]: {
            fontSize: `${parseInt(sizes.smallDesktop) / 2.3}rem`,
          },
        }}
      >
        {likes}
      </Typography>
    </Box>
  );
}
