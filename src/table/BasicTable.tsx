import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import dataMain from "./data";
import { colDef } from "./colDef";

type Props = {};

const BasicTable = (props: Props) => {
	const colDefMemo: any = React.useMemo(() => colDef, []);
	const dataMemo: any = React.useMemo(() => dataMain, []);

	const table = useReactTable({
		columns: colDefMemo,
		data: dataMemo,
		getCoreRowModel: getCoreRowModel(),
	});


	return (
		<TableContainer>
			<Table>
				<TableHead sx={{ backgroundColor: "lightgray", boxShadow: "inset 0px 0px 0px 1px black"}}>
					{table.getHeaderGroups().map((headerGroup: any) => {
						// console.log("headerGroup", headerGroup);
						return (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((headerCell: any) => {
									// console.log("headerCell", headerCell);
									return <TableCell key={headerCell.id}>{flexRender(headerCell.column.columnDef.header, headerCell.getContext())}</TableCell>;
								})}
							</TableRow>
						);
					})}
				</TableHead>
				{table.getRowModel().rows.map((row: any) => {
					// console.log("row", row);
					return (
						<TableRow key={row.id} sx={{'&:hover': {backgroundColor: 'lightyellow', cursor: 'pointer'}}}>
							{row.getVisibleCells().map((cell: any) => {
								return <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
							})}
						</TableRow>
					);
				})}
			</Table>
		</TableContainer>
	);
};

export default BasicTable;
