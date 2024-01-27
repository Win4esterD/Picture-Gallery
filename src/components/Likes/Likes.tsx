import { Box, Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type LikesProps = {
  likedByUser: boolean;
  likes: number;
  size?: string;
};

export function Likes({ likedByUser, likes, size='3.5rem' }: LikesProps): JSX.Element {
  return (
    <Box sx={{ display: "flex" }}>
      <SvgIcon sx={{ cursor: "pointer", fontSize: size }}>
        {!likedByUser ? (
          <FavoriteBorderIcon />
        ) : (
          <FavoriteIcon sx={{ color: "red" }} />
        )}
      </SvgIcon>
      <Typography
        sx={{ paddingLeft: "0.1rem", fontSize: `${parseInt(size) / 2}rem` }}
      >
        {likes}
      </Typography>
    </Box>
  );
}