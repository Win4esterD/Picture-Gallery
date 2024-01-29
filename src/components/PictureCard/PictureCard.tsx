import Image from "next/image";
import { Box, Button } from "@mui/material";
import { ButtonLink } from "..";
import { Likes } from "..";
import { useRouter } from "next/navigation";

type PictureCardProps = {
  url: string;
  likedByUser: boolean;
  likes: number;
  id: string;
};

export function PictureCard({ url, likedByUser, likes, id }: PictureCardProps) {
  const router = useRouter();
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Image src={url} alt="picture" width="450" height="450" priority={true} />
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
