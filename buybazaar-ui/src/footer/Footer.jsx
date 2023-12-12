import * as React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Function to create data rows
function createData(col1, col2, col3, col4) {
  return { col1, col2, col3, col4 };
}


const rows = [
  createData("ABOUT", "HELP", "CONSUMER POLICY", "SOCIAL"),
  createData("Contact Us", "Payments", "Cancellation & Returns","Facebook"),
  createData("Careers", "Cancellation & Returns", "Security","Twitter"),
  createData("Buybazaar Stories", "FAQ", "Privacy","Youtube"),
  createData("Press", "Report Infringement", "Sitemap","Linkedin"),
  createData("Buybazaar Wholesale", "","Grievance Redressed","Instagram"),
  createData("Cleartrip","" ,"EPR Compliance"),
  createData("Corporate Information","", ""),
];

export default function CustomPaginationActionsTable() {
  const [value, setValue] = React.useState(0);
  return (
   

    <Box 
    sx={{ 
      backgroundColor: 'black', 
      color: 'white', 
      pt: 5, 
      pb: 3 ,
      marginTop: 33,
      borderBottom: "none"
      }}>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
            {/* Your logo */}
            <img src="./static/images/IMG_9354.jpg" alt="Logo" 
            style={{ width: '50%', marginBottom: '10px', borderRadius: '10px' }} />
          </Grid>
        {rows.map((row, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="h6" >{row.col1}</Typography>
            <Typography sx={{color: "grey"}}>{row.col2}</Typography>
            <Typography sx={{color: "grey"}}> {row.col3}</Typography>
            <Typography sx={{color: "grey"}}>{row.col4}</Typography>
          </Grid>
        ))}
      </Grid>
      {/* Add additional content or links here */}
      <Typography variant="body2" sx={{ mt: 3 , color: "grey"}}>
        © 2023 BuyBazaar. All rights reserved.
      </Typography>
    </Container>

  </Box>
  );
}
