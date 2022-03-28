import { Grid } from "@mui/material";
import ProductCard from "./productCard";

export default function ProductList(props) {
  return (
    <Grid container spacing={4}>
      {props.products.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
}
