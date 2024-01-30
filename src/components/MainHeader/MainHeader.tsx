"use client";
import { AppBar, OutlinedInput, Button, useMediaQuery } from "@mui/material";
import { getImagesByQuery } from "@/services/requests";
import { KeyboardEvent, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { headerHeight, headerSmallDesktopHeight } from "./header-config";
import { queries } from "@/utils/queries/queries";

type MainHeaderProps = {
  searchHandler?: Dispatch<SetStateAction<never[]>>;
  setIsPending?: Dispatch<SetStateAction<boolean>>;
  setPages?: Dispatch<SetStateAction<number>>;
};

export function MainHeader({
  searchHandler,
  setIsPending,
  setPages,
}: MainHeaderProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const smallDesktop = useMediaQuery(queries.smallDesktop)

  async function peformAnimation() {
    router.push(`/?query=${searchQuery}&page=1`);
    setIsPending && setIsPending(true);
    if (searchHandler) {
      const response = await getImagesByQuery(searchQuery);
      searchHandler(response.results);
      setPages && setPages(response.total_pages);
    }
    setIsPending && setIsPending(false);
  }

  return (
    <AppBar
      sx={{
        height: headerHeight,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        [queries.smallDesktop]: {
          height: headerSmallDesktopHeight,
        },
      }}
    >
      <OutlinedInput
        sx={{
          backgroundColor: "#FFF",
          width: "22rem",
          height: "2.5rem",
          marginLeft: "1rem",
          [queries.smallDesktop]: {
            height: "2rem",
          },
        }}
        color="secondary"
        placeholder="Enter search query"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={async (e: KeyboardEvent) => {
          if (e.code === "Enter") {
            await peformAnimation();
          }
        }}
      ></OutlinedInput>
      <Button
        variant="contained"
        color="secondary"
        size={!smallDesktop? 'large': 'small'}
        sx={{ marginRight: "1rem" }}
        onClick={async () => {
          await peformAnimation();
        }}
      >
        SEARCH
      </Button>
    </AppBar>
  );
}
