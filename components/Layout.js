import {
  AppBar,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import NextLink from "next/link";

import useStyles from "../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>2021</Typography>
      </footer>
    </div>
  );
};

export default Layout;
