"use client";
import { AppBar, OutlinedInput, Button } from "@mui/material";
import { getImagesByQuery } from "@/services/requests";
import { KeyboardEvent, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

type MainHeaderProps = {
  searchHandler?: Dispatch<SetStateAction<never[]>>;
  setIsPending?: Dispatch<SetStateAction<boolean>>;
};

export function MainHeader({ searchHandler, setIsPending }: MainHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  async function peformAnimation() {
    setIsPending ? setIsPending(true) : "";
    searchHandler ? searchHandler(await getImagesByQuery(searchQuery)) : "";
    setIsPending ? setIsPending(false) : "";
  }

  return (
    <AppBar
      sx={{
        height: "7.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OutlinedInput
        sx={{ backgroundColor: "#FFF", width: "22rem", height: "2.5rem" }}
        color="secondary"
        placeholder="Enter search query"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={async (e: KeyboardEvent) => {
          if (e.code === "Enter") {
            router.push("/?query=" + searchQuery);
            await peformAnimation();
          }
        }}
      ></OutlinedInput>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={async () => {
          router.push("/?query=" + searchQuery);
          await peformAnimation();
        }}
      >
        SEARCH
      </Button>
    </AppBar>
  );
}
