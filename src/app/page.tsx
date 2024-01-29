"use client";
import { getImages, getImagesByQuery } from "@/services/requests";
import { Box, CircularProgress, Pagination } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
import { PictureCard, MainHeader } from "@/components";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/providers/context";
import { ImageData } from "@/types/ImageData";


export default function Home({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}): JSX.Element {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<never[]>([]);
  const [pages, setPages] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    async function getFirstImages() {
      setIsPending(true);
      if (!searchParams.query) {
        setSearchResult(await getImages());
      } else {
        const response = await getImagesByQuery(
          searchParams.query,
          searchParams.page
        );
        setSearchResult(response.results);
        setPages(response.total_pages);
      }
      setIsPending(false);
    }

    getFirstImages();
  }, [searchParams.page, searchParams.query]);

  return (
    <>
      <MainHeader
        searchHandler={setSearchResult}
        setIsPending={setIsPending}
        setPages={setPages}
      />
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
            searchResult?.map((item: ImageData) => (
              <PictureCard
                key={item.id}
                url={item.urls.small}
                likedByUser={item.liked_by_user}
                likes={item.likes}
                id={item.id}
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
        {!isPending && (
          <Pagination
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5rem",
              paddingBottom: "1rem",
            }}
            count={pages >= 200 ? 200 : pages}
            color="primary"
            shape="rounded"
            page={searchParams.page ? Number(searchParams.page) : 1}
            onChange={async (_, page) => {
              setIsPending(true);
              router.push(`?query=${searchParams.query}&page=${page}`);
              const response = await getImagesByQuery(
                searchParams.query,
                page.toString()
              );
              setSearchResult(response?.results);
              setIsPending(false);
            }}
          />
        )}
      </Box>
    </>
  );
}
