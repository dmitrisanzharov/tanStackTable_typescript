import React from "react";
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
} from "@tanstack/react-table";
import data from "./data";
import { columnDef } from "./columnDef";
import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Box,
} from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {
	const dataMemo = React.useMemo(() => data, [data]);
	const columnsMemo = React.useMemo(() => columnDef, [columnDef]);

	const table = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		anyKey: "test",
	} as any);

	// temp block
	let a1 = table;
	console.log(a1);

	return (
		<Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead sx={{ backgroundColor: "lightgray" }}>
						{table.getHeaderGroups().map((headerGroup: any) => {
							// console.log("headerGroup", headerGroup);
							// console.log("============================");
							return (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map(
										(headerColumn: any) => {
											// console.log(
											// 	"headerColumn",
											// 	headerColumn
											// );
											return (
												<TableCell
													key={headerColumn.id}
												>
													{flexRender(
														headerColumn.column
															.columnDef.header,
														headerColumn.getContext()
													)}
												</TableCell>
											);
										}
									)}
								</TableRow>
							);
						})}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.map((row: any) => {
							// console.log("============================");
							// console.log("row", row);
							// console.log("row", row.getValue('email'));
							return (
								<TableRow key={row.id}>
									{row.getVisibleCells().map((cell: any) => {
										// console.log("cell", cell);
										// console.log('cell value', cell.getValue(cell.id))
										return (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default BasicTable;
