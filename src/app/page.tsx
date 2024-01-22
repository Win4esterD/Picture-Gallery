"use client";
import { getImages } from "@/services/requests";
import { Box, CircularProgress, Typography } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
import { PictureCard, MainHeader } from "@/components";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/providers/context";

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
  const [isPending, setIsPending] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function getFirstImages() {
      setIsPending(true);
      setSearchResult(await getImages());
      setIsPending(false);
    }
    getFirstImages();
  }, []);

  return (
    <>
      <MainHeader searchHandler={setSearchResult} setIsPending={setIsPending} />
      <Box
        component="main"
        sx={{ marginTop: "10rem", justifyContent: "center" }}
      >
        <Grid
          container
          sx={{
            justifyContent: "space-evenly",
          }}
        >
          {!isPending ? (
            searchResult?.map((item: Image) => (
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
    </>
  );
}
