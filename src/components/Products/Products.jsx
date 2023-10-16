import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Widget A",
    description: "A nice product",
    price: "$19.99",
    image:
      "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/386584764_1777095482808079_806263171993844914_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NRzZ4xF2OsYAX-GohvV&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDYBNAXdOxvjtZdnshudu_jBfE2P226MJpPuS-WUbpwYQ&oe=65323812",
  },
  {
    id: 2,
    name: "Gadget X",
    description: "Try this product",
    price: "$49.99",
    image:
      "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/386584764_1777095482808079_806263171993844914_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NRzZ4xF2OsYAX-GohvV&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDYBNAXdOxvjtZdnshudu_jBfE2P226MJpPuS-WUbpwYQ&oe=65323812",
  },
];

const Products = () => {
  const classes = useStyles();

  //if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
