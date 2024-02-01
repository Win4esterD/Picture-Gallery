import {Box, Button} from '@mui/material';
import {Likes} from '..';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {ImageStyled} from '..';
import {queries} from '@/utils/queries/queries';

type PictureCardProps = {
  url: string;
  likedByUser: boolean;
  likes: number;
  id: string;
};

export function PictureCard({url, likedByUser, likes, id}: PictureCardProps) {
  const router: AppRouterInstance = useRouter();
  return (
    <Box sx={{marginTop: '2rem', maxWidth: '90%'}}>
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
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Likes likedByUser={likedByUser} likes={likes} />
        <Button variant="outlined" href={`/photos/${id}`} target="_blank">
          Watch
        </Button>
      </Box>
    </Box>
  );
}
