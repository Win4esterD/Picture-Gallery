import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type PictureCardProps = {
  url: string;
  likedByUser: boolean;
  likes: number;
};

export function PictureCard({ url, likedByUser, likes }: PictureCardProps) {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Image src={url} alt="picture" width="360" height="300" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <SvgIcon sx={{ cursor: "pointer" }}>
            {!likedByUser ? (
              <FavoriteBorderIcon />
            ) : (
              <FavoriteIcon sx={{ color: "red" }} />
            )}
          </SvgIcon>
          <Typography>{likes}</Typography>
          <Typography component="p"> Likes</Typography>
        </Box>
        <Button variant="outlined">View picture</Button>
      </Box>
    </Box>
  );
}
