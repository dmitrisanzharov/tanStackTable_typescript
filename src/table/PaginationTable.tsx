import React from "react";
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
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

const PaginationTable = (props: Props) => {
	const dataMemo: any = React.useMemo(() => data, [data]);
	const columnsMemo: any = React.useMemo(() => columnDef, [columnDef]);

	const initialColumnVisibilityObj: any = {
		first_name: true,
		mahMan: true,
		idYo: false,
	};

	const [vis, setColumnVis] = React.useState(initialColumnVisibilityObj);

	const table: any = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		anyKey: "test",
		initialState: {
			pagination: {
				pageSize: 5
			}
		},
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

	const currentPage: number = React.useMemo(() => {
		const isUndefined: Boolean =
			table.options?.state?.pagination?.pageIndex === undefined ||
			table.options?.state?.pagination?.pageIndex === null;
		return isUndefined
			? 0
			: (table.options?.state?.pagination?.pageIndex as number);
	}, [table.options?.state?.pagination?.pageIndex]);

	const [pageTo, setPageTo] = React.useState("1");

	return (
		<Box>
			<select
				value={table.options.state.pagination.pageSize}
				onChange={(e) => table.setPageSize(Number(e.target.value))}
			>
				{[10, 25, 50].map((pageSizeEl) => {
					return (
						<option key={pageSizeEl} value={pageSizeEl}>
							Show: {pageSizeEl}
						</option>
					);
				})}
			</select>
			<hr />
			<Box>
				<button
					onClick={() => table.setPageIndex(0)}
					disabled={!table.getCanPreviousPage()}
				>
					{"<<<"}
				</button>
				<button
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					prev page
				</button>
				<button
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					next page
				</button>
				<button
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					disabled={!table.getCanNextPage()}
				>
					{">>>"}
				</button>
				<span>
					{" "}
					| {currentPage + 1} of {table.getPageCount()}
				</span>
				<span>
					{" | "}
					<input
						type="number"
						placeholder="enter page to go to"
						min={1}
						max={table.getPageCount() - 1}
						value={pageTo}
						onChange={(e) => setPageTo(e.target.value)}
					/>
					<button
						onClick={() => table.setPageIndex(Number(pageTo) - 1)}
					>
						jump
					</button>
				</span>
				<span>
					{" | Jump to page: "}
					<input
						type="number"
						value={currentPage + 1}
						onChange={(e) =>
							table.setPageIndex(Number(e.target.value) - 1)
						}
						min={1}
						max={table.getPageCount()}
					/>
				</span>
			</Box>
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

export default PaginationTable;
