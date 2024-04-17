import React from "react";
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
    getSortedRowModel
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
	Box
} from "@mui/material";

type Props = {};

const SortingTable = (props: Props) => {
	const dataMemo: any = React.useMemo(() => data, [data]);
	const columnsMemo: any = React.useMemo(() => columnDef, [columnDef]);

    const [sorting, setSorting] = React.useState([{id: 'last_name', desc: false}, {id: 'email', desc: true}]);

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
        getSortedRowModel: getSortedRowModel(),
		anyKey: "test",
		state: {
            sorting: sorting
		},
        onSortingChange: setSorting,
		onColumnVisibilityChange: setColumnVis,
	} as any);

	// temp block
	let a1 = table;
	// console.log(a1);

	function handleClick(){
		setColumnVis({...initialColumnVisibilityObj, idYo: true, mahMan: true})
	}

    function sortingReturn(sortName: any){
        console.log('sortName', sortName);
        if(!sortName){
            return null;
        }

        if(sortName === 'asc'){
            return ' -asc';
        }

        return ' -desc';
    }

	return (
		<Box>
			<button onClick={handleClick}>change vis</button>
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
                                                    onClick={headerColumn.column.getToggleSortingHandler()}
												>
													{flexRender(
														headerColumn.column
															.columnDef.header,
														headerColumn.getContext()
													)}
                                                    {sortingReturn(headerColumn.column.getIsSorted())}
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

export default SortingTable;
