import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import NextLink from "next/link";
import router from "next/router";

import Layout from "../components/Layout";
import useNavColor from "../helpers/useNavColor";
import data from "../utils/data";
import { navColors } from "../utils/dataColors";


export default function Home() {
  const navColor = useNavColor(navColors);

  return (
    <Layout color={navColor} description="store main page">
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.id}>
              <Card>
                <CardActionArea>
                  <NextLink href={`/product/${product.title}`} passHref>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                  </NextLink>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                    <Typography>$. {product.price}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    color="primary"
                    onClick={() => {
                      router.push("/product/" + product.title);
                    }}
                  >
                    View More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
