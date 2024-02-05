import {getPhotoById} from '@/services/requests';
import {ImageStyled, DialogWindow} from '@/components';
import {MainHeader, Likes, PhotoSizeButtons} from '@/components';
import {notFound} from 'next/navigation';
import {Typography, Box, Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {styles} from './singlePagePhotoStyles';

type PhotoParams = {
  params: {
    photoId: string;
  };
};

type tags = {
  title: string;
};

export default async function Photo({
  params,
}: PhotoParams): Promise<JSX.Element> {
  const pictureData = await getPhotoById(params.photoId);
  if (pictureData?.errors) {
    notFound();
  }

  return (
    <>
      <MainHeader />
      <DialogWindow />
      <Box component="main" sx={styles.main}>
        <ImageStyled
          src={pictureData?.urls?.regular}
          alt="picture"
          width={800}
          height={800}
          priority={true}
          sx={styles.image}
        />
        <Box sx={styles.rightBlock}>
          <Box sx={styles.rightBlockWrapper}>
            <Typography sx={styles.author}>
              <b>Author:</b> {pictureData?.user.username}
            </Typography>
            <Typography sx={styles.description}>
              <b>Description: </b>
              {pictureData?.description
                ? pictureData.description
                : pictureData.alt_description}
            </Typography>
            <Likes
              likes={pictureData?.likes}
              likedByUser={pictureData?.liked_by_user}
              id={params.photoId}
            />
            <Box sx={styles.downloadButtonsBlock}>
              <Typography variant="h4" sx={styles.download}>
                Download
              </Typography>
              <PhotoSizeButtons
                regular={pictureData?.urls.regular}
                small={pictureData?.urls.small}
                thumb={pictureData?.urls.thumb}
              />
            </Box>
            <Box sx={styles.relatedTopicsBlock}>
              <Typography variant="h4" sx={styles.relatedTopicsHeader}>
                Related topics
              </Typography>
              <Grid sx={styles.relatedTopicsButtons}>
                {pictureData?.tags.map((item: tags, index: number) => (
                  <Button
                    key={index}
                    variant="outlined"
                    size="small"
                    href={`/?query=${item.title}&page=1`}
                    sx={{marginTop: '0.5rem'}}
                  >
                    {item.title}
                  </Button>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
