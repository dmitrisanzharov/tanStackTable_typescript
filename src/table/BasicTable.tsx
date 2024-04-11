import React from "react";
import { useReactTable } from "@tanstack/react-table";
import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead></TableHead>
            </Table>
		</TableContainer>
	);
};

export default BasicTable;
