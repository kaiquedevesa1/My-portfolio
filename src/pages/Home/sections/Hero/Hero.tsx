import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100bh",
  }));

  const StyleImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyleHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyleImg src={Avatar} />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Kaique Devesa
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Button color="secondary" variant="text">
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 6 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Button>
                    <EmailIcon />
                    Contact me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyleHero>
    </>
  );
};

export default Hero;
