import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: ({ color }) => color,
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  navLink: {
    margin: 10,
  },

  main: {
    minHeight: "90vh",
  },

  section: {
    display: "flex",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: "1.2rem",
  },

  images: {
    borderRadius: 8,
  },

  footer: {
    backgroundColor: ({ color }) => color,
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    height: "3rem",
  },
});

export default useStyles;
