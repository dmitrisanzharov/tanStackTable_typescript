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

const ColumnHidingTable = (props: Props) => {
	const dataMemo: any = React.useMemo(() => data, [data]);
	const columnsMemo: any = React.useMemo(() => columnDef, [columnDef]);

	const initialColumnVisibilityObj: any = {
		first_name: true,
		mahMan: true,
		idYo: true,
	};

	const [vis, setColumnVis] = React.useState(initialColumnVisibilityObj);

	const table: any = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		anyKey: "test",
		state: {
			columnVisibility: vis,
		},
		onColumnVisibilityChange: setColumnVis,
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
			<label>Hide all</label>
			<input
				type="checkbox"
				checked={table.getIsAllColumnsVisible()}
				onChange={table.getToggleAllColumnsVisibilityHandler()}
			/>
			<ul>
				{table.getAllLeafColumns().map((col: any) => {
					console.log("col", col.columnDef.header);
					return typeof col.columnDef.header === 'string' ? (
						<li key={col.id}>
							<label>{col.columnDef.header}</label>
							<input type='checkbox' checked={col.getIsVisible()} onChange={col.getToggleVisibilityHandler()}/>
						</li>
					) : <></>;
				})}
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
													<>
														{flexRender(
															headerColumn.column
																.columnDef
																.header,
															headerColumn.getContext()
														)}
													</>
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

export default ColumnHidingTable;
