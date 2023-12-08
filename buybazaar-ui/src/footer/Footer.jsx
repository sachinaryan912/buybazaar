import * as React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from "@mui/material";

// Function to create data rows
function createData(col1, col2, col3, col4,col5,col6,col7,col8) {
  return { col1, col2, col3, col4,col5,col6,col7,col8 };
}


const rows = [
  // createData("ABOUT", "HELP", "CONSUMER POLICY", "SOCIAL"),
  // createData("Contact Us", "Payments", "Cancellation & Returns","Facebook"),
  // createData("Careers", "Cancellation & Returns", "Security","Twitter"),
  // createData("Buybazaar Stories", "FAQ", "Privacy","Youtube"),
  // createData("Press", "Report Infringement", "Sitemap","Linkedin"),
  // createData("Buybazaar Wholesale", "","Grievance Redressed","Instagram"),
  // createData("Cleartrip","" ,"EPR Compliance",""),
  // createData("Corporate Information","", "",""),
  createData(
    "ABOUT",
    "Contact Us",
    "Careers",
    "Buybazaar Stories",
    "Press",
    "Buybazaar Wholesale",
    "Cleartrip",
    "Corporate Information"
  ),
  createData(
    "HELP",
    "Payments",
    "Cancellation & Returns",
    "FAQ",
    "Report Infringement",
    "",
    "",
    ""
  ),
  createData(
    "CONSUMER POLICY",
    "Cancellation & Returns",
    "Security",
    "Privacy",
    "Sitemap",
    "Grievance Redressed",
    "EPR Compliance",
    ""
  ),
  createData(
    "SOCIAL",
    "Facebook",
    "Twitter",
    "Youtube",
    "Linkedin",
    "Instagram",""
  ),
  createData("Office Address"),
];

export default function CustomPaginationActionsTable() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        pt: 5,
        pb: 3,
        marginTop: 33,
        borderBottom: "none",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {rows.map((row, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6">{row.col1}</Typography>
              <Typography sx={{ color: "grey" }}>{row.col2}</Typography>
              <Typography sx={{ color: "grey" }}> {row.col3}</Typography>
              <Typography sx={{ color: "grey" }}> {row.col4}</Typography>
              <Typography sx={{ color: "grey" }}> {row.col5}</Typography>
              <Typography sx={{ color: "grey" }}> {row.col6}</Typography>
              <Typography sx={{ color: "grey" }}> {row.col7}</Typography>
              <Typography sx={{ color: "grey" }}>{row.col8}</Typography>
              {/* <Link
                href="https://www.youtube.com/watch?v=H6XCtALH74E"
                underline="none"
              >
                {row.col8}
              </Link> */}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
          <img
            src="./static/images/IMG_9354.jpg"
            alt="Logo"
            style={{
              position: "absolute",
               right: "0",
               top: "5",

              width: "25%",
              hight: "10%",
              borderRadius: "10px",
            }}
          />
        </Grid>
        {/* Add additional content or links here */}
        <Typography variant="body2" sx={{ mt: 3, color: "grey" }}>
          © 2023 BuyBazaar. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
