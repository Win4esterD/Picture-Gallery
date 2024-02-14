'use client';
import {Box, Button, SvgIcon, Typography} from '@mui/material';
import {Likes} from '..';
import {ImageStyled, LinkStyled} from '..';
import {queries} from '@/utils/queries/queries';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {downloadImage} from '@/services/userActions';
import {utm, unsplashLink} from '@/services/apiVariables';

type PictureCardProps = {
  url: string;
  likedByUser: boolean;
  likes: number;
  id: string;
  downloadLocation: string;
  userName: string;
  profileImage: string;
  profileLink: string;
};

export function PictureCard({
  url,
  likedByUser,
  likes,
  id,
  downloadLocation,
  userName,
  profileImage,
  profileLink,
}: PictureCardProps) {
  return (
    <Box
      sx={{
        marginTop: '2rem',
        maxWidth: '90%',
        position: 'relative',
      }}
    >
      <ImageStyled
        src={url}
        alt="picture"
        width={450}
        height={450}
        priority={true}
        sx={{
          maxWidth: '100%',
          width: '24vw',
          height: '24vw',
          [queries.smallDesktop]: {
            width: '30vw',
            height: '30vw',
          },
          [queries.largeTablet]: {
            width: '46vw',
            height: '46vw',
          },
          [queries.mobile]: {
            width: '90vw',
            height: '90vw',
          },
        }}
      />
      <Box
        className="foto-info-popper"
        sx={{
          width: '100%',
          height: '24vw',
          backgroundColor: '#000',
          position: 'absolute',
          zIndex: 1,
          top: 0,
          opacity: 0,
          transition: 'opacity 0.5s',
          '&:hover': {
            opacity: 0.8,
            cursor: 'pointer',
          },
          [queries.smallDesktop]: {
            width: '30vw',
            height: '30vw',
          },
          [queries.largeTablet]: {
            width: '46vw',
            height: '46vw',
          },
          [queries.mobile]: {
            width: '90vw',
            height: '90vw',
          },
        }}
      >
        <Typography
          component="a"
          href={unsplashLink}
          target="_blank"
          sx={{
            color: '#FFF',
            display: 'block',
            position: 'relative',
            textDecoration: 'none',
            textAlign: 'center',
            top: '1rem',
            fontWeight: 600,
            transition: 'color 0.3s',
            '&:hover': {
              color: 'orange',
              textDecoration: 'underline',
            },
          }}
        >
          Unsplash
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '90%',
            paddingLeft: '5%',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: '1rem',
          }}
        >
          <Box sx={{display: 'flex', gap: '1rem'}}>
            <LinkStyled href={`${profileLink}?${utm}`} target="_blank">
              <ImageStyled
                src={profileImage}
                alt="profile image"
                width={60}
                height={60}
                sx={{borderRadius: '3rem'}}
              />
            </LinkStyled>
            <Typography
              component="a"
              href={`${profileLink}?${utm}`}
              target="_blank"
              sx={{
                color: '#FFF',
                marginTop: '1.2rem',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'orange',
                },
              }}
            >
              {userName}
            </Typography>
          </Box>
          <SvgIcon
            sx={{
              fontSize: '2rem',
              color: '#FFF',
              cursor: 'pointer',
              marginTop: '1.2rem',
              '&:hover': {
                color: 'orange',
              },
            }}
            onClick={async () => await downloadImage(downloadLocation)}
          >
            <FileDownloadIcon />
          </SvgIcon>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Likes likedByUser={likedByUser} likes={likes} id={id} />
        <Button variant="outlined" href={`/photos/${id}`} target="_blank">
          Watch
        </Button>
      </Box>
    </Box>
  );
}
