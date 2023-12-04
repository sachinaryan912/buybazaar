import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";


 



function createData(about, help, policy,social) {
  return { about, help, policy ,social};
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
  return (
    <Table
      sx={{
        width: "75%",
        height: "10%",
        marginTop: 50,
        borderBottom: "none",
      }}
    >
      <TableBody sx={{  }}>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell sx={{ padding: "0.5rm" }}>{row.about}</TableCell>
            <TableCell>{row.help}</TableCell>
            <TableCell>{row.policy}</TableCell>
            <TableCell>{row.social}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
