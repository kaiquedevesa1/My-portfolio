import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyleToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));
  return (
    <>
      <AppBar position="absolute">
        <StyleToobar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Project</MenuItem>
        </StyleToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
