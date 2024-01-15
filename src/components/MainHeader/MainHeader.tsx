'use client'
import { AppBar, OutlinedInput } from "@mui/material";
import { NavLink } from "..";

export function MainHeader() {
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
      ></OutlinedInput>
      <NavLink link="/" text="REGISTER" />
    </AppBar>
  );
}
