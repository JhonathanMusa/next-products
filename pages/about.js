import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import useNavColor from "../helpers/useNavColor";
import { navColors } from "../utils/dataColors";
import NextLink from "next/link";

// get data products from API 

const About = () => {
  const navColor = useNavColor(navColors);
  const [productsData, setProductsData] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/products");
      console.log(data.products);
      setProductsData(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout color={navColor} description="about page">
      <div>
        <h1>About</h1>
      </div>
      <Grid container spacing={3}>
        {productsData.map((product) => (
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
              </CardActionArea>
              <CardContent>
                <Typography>{product.name}</Typography>
                <Typography>$. {product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default About;
