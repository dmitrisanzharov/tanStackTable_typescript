import React from "react";
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
} from "@tanstack/react-table";
import data from "./data";
import { columnDef, columnDefSelectedRows } from "./columnDef";
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

const RowSelectionTable = (props: Props) => {
	const dataMemo: any = React.useMemo(() => data, [data]);
	const columnsMemo: any = React.useMemo(
		() => columnDefSelectedRows,
		[columnDefSelectedRows]
	);

	const initialColumnVisibilityObj: any = {
		first_name: true,
		mahMan: true,
		idYo: true,
	};

	const [vis, setColumnVis] = React.useState(initialColumnVisibilityObj);
	const [rowSelection, setRowSelection] = React.useState({});
	const [columnOrder, setColumnOrder] = React.useState<any>(['idYo', 'email']);

	const table: any = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		anyKey: "test",
		enableRowSelection: true,
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			columnVisibility: vis,
			rowSelection: rowSelection,
			columnOrder: columnOrder,
		},
		onRowSelectionChange: setRowSelection,
		onColumnVisibilityChange: setColumnVis,
		onColumnOrderChange: setColumnOrder,
	} as any);

	// temp block
	let a1 = table;
	// console.log(a1);

	function handleClick() {
		setColumnVis({
			...initialColumnVisibilityObj,
			idYo: true,
			mahMan: true,
		});
	}

	return (
		<Box>
			<button onClick={()=> setColumnOrder(['last_name'])}>change column order</button>
			<hr />
			<ul>
				{table.getSelectedRowModel().flatRows.length > 0 ? table.getSelectedRowModel().flatRows.map((row: any) => {
					return <li key={row.id}>
						{JSON.stringify(row)}
					</li>
				}) : 'nothing is selected'}
			</ul>

			<hr />
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead
						sx={{
							backgroundColor: "lightgray",
							outline: "1px solid black",
						}}
					>
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
													sx={{ fontWeight: "bold" }}
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

export default RowSelectionTable;
