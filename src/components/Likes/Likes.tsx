import { Box, Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type LikesProps = {
  likedByUser: boolean;
  likes: number;
};

export function Likes({ likedByUser, likes }: LikesProps): JSX.Element {
  return (
    <Box sx={{ display: "flex" }}>
      <SvgIcon sx={{ cursor: "pointer" }}>
        {!likedByUser ? (
          <FavoriteBorderIcon />
        ) : (
          <FavoriteIcon sx={{ color: "red" }} />
        )}
      </SvgIcon>
      <Typography sx={{ paddingLeft: "0.1rem" }}>{likes}</Typography>
    </Box>
  );
}