'use client';
import {getPhotoById} from '@/services/requests';
import {ImageStyled, DialogWindow} from '@/components';
import {MainHeader, Likes, PhotoSizeButtons} from '@/components';
import {notFound} from 'next/navigation';
import {Typography, Box, Button, CircularProgress} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {styles} from './singlePagePhotoStyles';
import {useEffect, useState} from 'react';
import {cookieParser} from '@/utils/functions/cookieParser';

type PhotoParams = {
  params: {
    photoId: string;
  };
};

type tags = {
  title: string;
};

export default function Photo({params}: PhotoParams): JSX.Element {
  const [pictureData, setPictureData] = useState<any>();
  useEffect(() => {
    const getPageView = async () => {
      const response = await getPhotoById(params.photoId);
      setPictureData(response);
    };
    getPageView();
  }, [params.photoId]);

  pictureData?.errors && notFound();

  return (
    <>
      <MainHeader />
      <DialogWindow />
      <Box component="main" sx={styles.main}>
        {pictureData?.urls?.regular ? (
          <ImageStyled
            src={pictureData.urls.regular}
            alt="picture"
            width={800}
            height={800}
            priority={true}
            sx={styles.image}
          />
        ) : (
          <Box
            sx={Object.assign(styles.image, {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
          >
            <CircularProgress size={100} />
          </Box>
        )}
        <Box sx={styles.rightBlock}>
          <Box sx={styles.rightBlockWrapper}>
            <Typography sx={styles.author}>
              <b>Author:</b>
              {pictureData?.user?.username ? (
                pictureData?.user?.username
              ) : (
                <CircularProgress size={20} />
              )}
            </Typography>
            <Typography sx={styles.description}>
              <b>Description: </b>
              {pictureData?.description
                ? pictureData.description
                : pictureData?.alt_description}
            </Typography>
            {pictureData?.likes ? (
              <Likes
                likes={pictureData?.likes}
                likedByUser={pictureData?.['liked_by_user']}
                id={params.photoId}
              />
            ) : (
              <CircularProgress />
            )}

            <Box sx={styles.downloadButtonsBlock}>
              <Typography variant="h4" sx={styles.download}>
                Download
              </Typography>
              {pictureData ? (
                <PhotoSizeButtons
                  regular={pictureData?.urls?.regular}
                  small={pictureData?.urls?.small}
                  thumb={pictureData?.urls?.thumb}
                />
              ) : (
                <CircularProgress />
              )}
            </Box>
            <Box sx={styles.relatedTopicsBlock}>
              <Typography variant="h4" sx={styles.relatedTopicsHeader}>
                Related topics
              </Typography>
              <Grid sx={styles.relatedTopicsButtons}>
                {!pictureData ? (
                  <CircularProgress />
                ) : (
                  pictureData?.tags?.map((item: tags, index: number) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      href={`/?query=${item.title}&page=1`}
                      sx={{marginTop: '0.5rem'}}
                    >
                      {item.title}
                    </Button>
                  ))
                )}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
