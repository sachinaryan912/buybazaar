// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ProductList = () => {
  const [products, setProducts] = useState([]);


  // useEffect(() => {
  //   axios.get('http://localhost:8765/api/products')
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);

  useEffect(() => {
    fetch('http://localhost:8765/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ marginLeft: 40, marginRight: 20 }}>
      <h1>All Products</h1><br />
      <div style={{ display: 'flex', overflowX: 'scroll', marginLeft: 20,marginRight: 20 }}>
      
      {products.map(product => (
        <Card key={product.productId} style={{ minWidth: 300, marginRight: 16 }}>
          <CardMedia
            component="img"
            alt={product.productName}
            height="140"
            image={product.imageUrl}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {product.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Price: ₹{product.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
    
  );
};

export default ProductList;
