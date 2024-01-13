import { AppBar, OutlinedInput } from "@mui/material";

export function MainHeader() {
  return (
    <AppBar
      sx={{
        height: "7.5rem",
      }}
    >
      <OutlinedInput
        sx={{ backgroundColor: "#FFF", width: "22rem", height: "2.5rem" }}
        color="secondary"
        placeholder="Enter search query"
      ></OutlinedInput>
    </AppBar>
  );
}
