import React from "react";
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel } from "@tanstack/react-table";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import dataMain from "./data";
import { colDef, colDef2, colDef3 } from "./colDef";

type Props = {};

const AnyName = (props: Props) => {
	const [count, setCount] = React.useState(0);


	const [vis, setVis] = React.useState({first_name: true, foo: false})

	const colDefMemo: any = React.useMemo(() => colDef3, []);
	const dataMemo: any = React.useMemo(() => dataMain, []);

	const table = useReactTable({
		columns: colDefMemo,
		data: dataMemo,
        // initialState: {
        //     columnFilters: [{ id: "first_name", value: "Ermin" }],
        // },
		state: {
			columnVisibility: vis
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),
		onColumnVisibilityChange: setVis
	} as any);

    React.useEffect(() => {
     
        let foo = table.getHeaderGroups();
        // console.log("foo: ", foo);

    }, [count]);

	return (
		<>
			<h4>{count}</h4>
			<button onClick={() => setCount(count + 1)}>inc</button>
			<hr />
			<TableContainer>
				<Table>
					<TableHead sx={{ backgroundColor: "lightgray" }}>
						{table.getHeaderGroups().map((headerGroup: any) => {
							console.log("headerGroup", headerGroup);
							return (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((headerColumn: any) => {
										// let a = headerColumn.column.getFacetedRowModel();
										// console.log("a", a);
                                        if(headerColumn.isPlaceholder){
                                            return <TableCell></TableCell>
                                        }
										return <TableCell key={headerColumn.id} colSpan={headerColumn.colSpan}>{flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}</TableCell>;
									})}
								</TableRow>
							);
						})}
					</TableHead>
					{table.getRowModel().rows.map((row: any) => {
						// console.log("row", row.getValue('first_name'));
						return (
							<TableRow key={row.id} sx={{ "&:hover": { backgroundColor: "lightyellow", cursor: "pointer" } }}>
								{row.getVisibleCells().map((cell: any) => {
									return <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
								})}
							</TableRow>
						);
					})}
				</Table>
			</TableContainer>
		</>
	);
};

export default AnyName;
