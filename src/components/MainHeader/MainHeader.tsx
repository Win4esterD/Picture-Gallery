'use client'
import { AppBar, OutlinedInput } from "@mui/material";
import { NavLink } from "..";
import {getImagesByQuery} from '@/services/requests';

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
        onKeyUp={(e) => {
          if(e.code === "Enter") {
            //@ts-ignorets-ignore
            console.log(getImagesByQuery(e.target.value));
          }
        }}
      ></OutlinedInput>
      <NavLink link="/" text="REGISTER" />
    </AppBar>
  );
}
