"use client";
import { AppBar, OutlinedInput, Button } from "@mui/material";
import { NavLink } from "..";
import { getImagesByQuery } from "@/services/requests";
import { EventHandler, KeyboardEvent, useState, Dispatch, SetStateAction } from "react";

type MainHeaderProps = {
  searchHandler: Dispatch<SetStateAction<never[]>>;
  setIsPending: Dispatch<SetStateAction<boolean>>;
};

export function MainHeader({ searchHandler, setIsPending }: MainHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
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
            setIsPending(true);
            searchHandler(await getImagesByQuery(searchQuery));
            setIsPending(false);
          }
        }}
      ></OutlinedInput>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={async () => {
          setIsPending(true)
          searchHandler(await getImagesByQuery(searchQuery));
          setIsPending(false);
        }}
      >
        SEARCH
      </Button>
    </AppBar>
  );
}
