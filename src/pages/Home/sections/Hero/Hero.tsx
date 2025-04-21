import { Grid, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";

const Hero = () => {
  const StyleHero = styled("div")(() => ({
    backgroundColor: "black",
    color: "white",
  }));

  const StyleImg = styled("img")(() => ({
    width: "30%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyleHero>
        <Grid container spacing={2}>
          <Grid size={4}>
            <StyleImg src={Avatar} />
          </Grid>
          <Grid size={8}>size=4</Grid>
        </Grid>
      </StyleHero>
    </>
  );
};

export default Hero;
