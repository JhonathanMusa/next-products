import {
  AppBar,
  Container,
  createTheme,
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import Head from "next/head";
import NextLink from "next/link";

import useStyles from "../utils/styles";

const Layout = ({ title, color, description, children }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.3rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
  });
  const classes = useStyles({ color });
  return (
    <div>
      <Head>
        <title>{title ? `Product - ${title}` : "Store App"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography>Home</Typography>
              </Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link>
                <Typography>About</Typography>
              </Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link>
                <Typography>Contact</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Container className={classes.main}>{children}</Container>
      <AppBar position="static" className={classes.footer}>
        <footer className={classes.footer}>
          <Typography>2021</Typography>
        </footer>
      </AppBar>
    </div>
  );
};

export default Layout;
