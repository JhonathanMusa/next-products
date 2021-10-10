import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  navLink: {
    margin: 10,
  },

  main: {
    minHeight: "80vh",
  },

  footer: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default useStyles;
