"use client";
import { getImages } from "@/services/requests";
import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress, Typography } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
import { PictureCard, MainHeader } from "@/components";

type Image = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  description: string;
  alt_description: string;
  liked_by_user: boolean;
  likes: number;
  urls: {
    small: string;
  };
};

export default function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["first-visit-images"],
    queryFn: getImages,
  });

  if(isError) return <Typography variant="h1">Error happened while fetching images</Typography>;

  return (
    <Box component="main" sx={{ marginTop: "10rem", justifyContent: "center" }}>
      <Grid
        container
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        {!isPending ? (
          data.map((item: Image) => (
            <PictureCard
              key={item.id}
              url={item.urls.small}
              likedByUser={item.liked_by_user}
              likes={item.likes}
            />
          ))
        ) : (
          <CircularProgress
            size={100}
            sx={{
              marginTop: "5rem",
            }}
          />
        )}
      </Grid>
    </Box>
  );
}
