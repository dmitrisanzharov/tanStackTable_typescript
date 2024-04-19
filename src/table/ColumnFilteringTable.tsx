import React from "react";
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {};

const ColumnFilteringTable = (props: Props) => {
	const dataMemo: any = React.useMemo(() => data, [data]);
	const columnsMemo: any = React.useMemo(() => columnDef, [columnDef]);

	const initialColumnVisibilityObj: any = {
		first_name: true,
		mahMan: true,
		idYo: false,
	};

	const [vis, setColumnVis] = React.useState(initialColumnVisibilityObj);
	const [dropValue, setDropDownValue] = React.useState<any>('');
    const [filterValue, setFilterValue] = React.useState('');
	const handleChange = (event: SelectChangeEvent) => {
		setDropDownValue(event.target.value as string);
	};

	const table: any = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
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

	React.useEffect(() => {
		let allColumns = table.getAllColumns();

		// set filter per column
		allColumns.map((column: any) => {
			console.log("column", column);

			if (column.id === dropValue) {
				column.setFilterValue(filterValue);
			}
		});
	}, [dropValue, filterValue]);

	return (
		<Box>
			<FormControl sx={{width: '120px'}}>
				<InputLabel id="demo-simple-select-label">Select Id</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={dropValue}
					label="DropDownValue"
					onChange={handleChange}
				>
					{table?.getAllColumns()?.map((column: any)=> {
                        return (
                            <MenuItem key={column.id} value={column.id}>
                                {column.id}
                            </MenuItem>
                        )
                    })}
				</Select>
			</FormControl>
            <input type='text' value={filterValue} onChange={e=> setFilterValue(e.target.value)} />
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

export default ColumnFilteringTable;
