'use client';
import {Box, Typography} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {queries} from '@/utils/queries/queries';
import {GlobalContext} from '@/provider/GlobalContext/GlobalContext';
import {useContext, useState, useEffect} from 'react';
import {likePhoto, unlikePhoto} from '@/services/userActions';

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
  const [likesNumber, setLikesNumber] = useState<number>(likes);

  const likeHandler = async () => {
    if (!isAuth) {
      setIsDialogOpen(true);
      return;
    }

    if (!liked) {
      await likePhoto(id);
      setLiked(!liked);
      setLikesNumber(likesNumber + 1);
    } else {
      await unlikePhoto(id);
      setLiked(!liked);
      setLikesNumber(likesNumber - 1);
    }
  };

  return (
    <Box sx={{display: 'flex'}}>
      <SvgIcon
        onClick={likeHandler}
        sx={{
          cursor: 'pointer',
          fontSize: sizes.desktop,
          transition: 'color 0.3s',
          "&:hover": {
            color: "orange"
          },
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
        {likesNumber}
      </Typography>
    </Box>
  );
}
