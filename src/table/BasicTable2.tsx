import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import dataMain from "./data";
import { colDefForBasic2 } from "./colDef";

type Props = {};

const BasicTable = (props: Props) => {
	const colDefMemo: any = React.useMemo(() => colDefForBasic2, []);
	const dataMemo: any = React.useMemo(() => dataMain, []);

	const table = useReactTable({
		columns: colDefMemo,
		data: dataMemo,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<TableContainer>
			<Table>
				<TableHead>
					{table.getHeaderGroups().map((headerRow: any) => {
						return (
							<TableRow key={headerRow.id} sx={{ backgroundColor: "lightgray" }}>
								{headerRow.headers.map((headerCell: any) => {
									return (
										<TableCell key={headerCell.id} sx={{ backgroundColor: "yellow" }}>
											{flexRender(headerCell.column.columnDef.header, headerCell.getContext())}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableHead>
				<TableBody>
					{table.getRowModel().rows.map((row: any) => {
						return (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell: any) => {
									return <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BasicTable;
