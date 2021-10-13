import { Grid, Link, List, ListItem, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import Image from "next/image";

import Layout from "../../components/Layout";
import data from "../../utils/data";
import useStyles from "../../utils/styles";

export default function ProductDetails() {
  const classes = useStyles();

  const { query } = useRouter();
  const { title } = query;

  const product = data.products.find((a) => a.title === title);

  
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout
      title={product.name}
      color="#202622"
      description={product.description}
    >
      <div>
        <NextLink href="/" passHref>
          <Link>
            <Typography  className={classes.section}>
              <ArrowBackIosIcon />
              Back
            </Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            alt={product.name}
            className={classes.images}
            height={300}
            layout="responsive"
            src={product.image}
            width={300}
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>{product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>{product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Rating: {product.rating}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Grid>
            <List>
              <ListItem>
                <Grid container>
                  <Typography>Price</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>${product.price}</Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Typography>Status</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {product.countInStock > 0 ? "In Stock" : "No Product"}
                  </Typography>
                </Grid>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
