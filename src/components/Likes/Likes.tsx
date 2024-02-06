"use client";
import {Box, Typography} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {queries} from '@/utils/queries/queries';
import { GlobalContext } from '@/provider/GlobalContext/GlobalContext';
import { useContext, useState } from 'react';
import { likePhoto, unlikePhoto } from '@/services/userActions';


type LikesProps = {
  likedByUser: boolean;
  likes: number;
  id: string;
};

export function Likes({likedByUser, likes, id}: LikesProps): JSX.Element {
  const sizes = {
    desktop: '3.5rem',
    smallDesktop: '2rem',
  };

  const {isAuth, setIsDialogOpen} = useContext(GlobalContext);
  const [liked, setLiked] = useState<boolean>(likedByUser);

  return (
    <Box sx={{display: 'flex'}}>
      <SvgIcon
        onClick={() => {
          if (!isAuth) {
            setIsDialogOpen(true);
          } else {
            !liked ? likePhoto(id): unlikePhoto(id);
            setLiked(!liked)
          }
        }}
        sx={{
          cursor: 'pointer',
          fontSize: sizes.desktop,
          [queries.smallDesktop]: {
            fontSize: sizes.smallDesktop,
          },
        }}
      >
        {!liked ? <FavoriteBorderIcon /> : <FavoriteIcon sx={{color: 'red'}} />}
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
        {!liked? likes: Number(likes) + 1}
      </Typography>
    </Box>
  );
}
