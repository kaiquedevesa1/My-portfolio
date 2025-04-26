import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyleToobar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));
  return (
    <>
      <AppBar position="absolute">
        <StyleToobar>
          <MenuItem>Abaut</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Project</MenuItem>
        </StyleToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
