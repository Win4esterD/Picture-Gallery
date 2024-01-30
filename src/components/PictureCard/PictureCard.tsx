import Image from "next/image";
import { Box, Button } from "@mui/material";
import { ButtonLink } from "..";
import { Likes } from "..";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type PictureCardProps = {
  url: string;
  likedByUser: boolean;
  likes: number;
  id: string;
};

export function PictureCard({ url, likedByUser, likes, id }: PictureCardProps) {
  const router: AppRouterInstance = useRouter();
  return (
    <Box sx={{ marginTop: "2rem", maxWidth: '90%' }}>
      <Image src={url} alt="picture" width="450" height="450" priority={true} style={{maxWidth: '100%'}}/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Likes likedByUser={likedByUser} likes={likes} />
        <Button variant="outlined" onClick={() => router.push(`/photos/${id}`)}>
          <ButtonLink href={`/photos/${id}`}>View picture</ButtonLink>
        </Button>
      </Box>
    </Box>
  );
}
