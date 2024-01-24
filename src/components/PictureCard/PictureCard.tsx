import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MainLink } from "..";


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
        <Box sx={{ display: "flex" }}>
          <SvgIcon sx={{ cursor: "pointer" }}>
            {!likedByUser ? (
              <FavoriteBorderIcon />
            ) : (
              <FavoriteIcon sx={{ color: "red" }} />
            )}
          </SvgIcon>
          <Typography sx={{ paddingLeft: "0.1rem" }}>{likes}</Typography>
          <Typography sx={{ paddingLeft: "0.1rem" }} component="p">
            Likes
          </Typography>
        </Box>
        <Button variant="outlined">
          <MainLink href={`/photos/${id}`} text="View picture" />
        </Button>
      </Box>
    </Box>
  );
}
