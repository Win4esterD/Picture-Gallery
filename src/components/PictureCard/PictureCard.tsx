import Image from "next/image";
import { Box, Button } from "@mui/material";
import { ButtonLink } from "..";
import { Likes } from "..";


type PictureCardProps = {
  url: string;
  likedByUser: boolean;
  likes: number;
  id: string;
};

export function PictureCard({ url, likedByUser, likes, id }: PictureCardProps) {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Image src={url} alt="picture" width="360" height="300" priority={true} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Likes likedByUser={likedByUser} likes={likes} />
        <Button variant="outlined">
          <ButtonLink
            href={`/photos/${id}`}
          >
            View picture
          </ButtonLink>
        </Button>
      </Box>
    </Box>
  );
}
