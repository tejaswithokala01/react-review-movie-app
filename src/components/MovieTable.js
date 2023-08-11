import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import { formatReview } from "../helpers";

const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "reviews", label: "Review Score", minWidth: 100 },
  {
    id: "company",
    label: "Company",
    minWidth: 170,
    //   align: 'right',
  },
  { id: "button", label: "Review Movie" },
];

const MovieTable = ({ movies, setOpenModal }) => {
  const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelect = (id) => {
        if (selectedRows.includes(id)) {
          setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
          setSelectedRows([id]);
          setOpenModal(true);
        }
      };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((item) => (
              <TableRow hover key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{formatReview(item.reviews)}</TableCell>
                <TableCell>Company name</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleRowSelect(item.id)}
                  >
                    Review
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MovieTable;
