import React from "react";
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel } from "@tanstack/react-table";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import dataMain from "./data";
import { colDef } from "./colDef";

type Props = {};

const MessAroundTable = (props: Props) => {
	const [count, setCount] = React.useState(0);

	const colDefMemo: any = React.useMemo(() => colDef, []);
	const dataMemo: any = React.useMemo(() => dataMain, []);

	const table = useReactTable({
		columns: colDefMemo,
		data: dataMemo,
        // initialState: {
        //     columnFilters: [{ id: "first_name", value: "Ermin" }],
        // },
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),
	} as any);

    React.useEffect(() => {
        // let table2 = table.getRowModel().rows.map((row: any) => {
         
        //     // console.log('row', row);

        //     return row.getVisibleCells().map((cell: any) => {
        //         console.log('============================');
        //         console.log('cell', cell);
        //         let foo = cell.getValue(cell.id);
        //         console.log("foo: ", foo);
        //     })

        // });
        // console.log("table2: ", table2);

        let tible = table.options.columns;
        console.log("tible: ", tible);

        let tible2 = table.getAllColumns().map(column => {
            console.log('columnDef', column.columnDef)
        });
        // console.log("tible2: ", tible2);


    }, [count]);

	// React.useMemo(() => {
	// 	table.setColumnFilters([{ id: "first_name", value: "Ermin" }]);
	// }, []);

	// React.useEffect(() => {
    //     console.log('table', table);
	// 	let a = table.getRowModel();
    //     console.log("a", a);
    //     let b = table.getFilteredRowModel();
	// 	console.log("b", b);
    //     let c = table.getGlobalFacetedRowModel();
    //     console.log("c", c);
    //     let d = table.getGlobalFacetedUniqueValues();
    //     console.log("d", d);
	// }, [count]);

	return (
		<>
			<h4>{count}</h4>
			<button onClick={() => setCount(count + 1)}>inc</button>

			<hr />
			<TableContainer>
				<Table>
					<TableHead sx={{ backgroundColor: "lightgray", boxShadow: "inset 0px 0px 0px 1px black", outline: '1px solid' }}>
						{table.getHeaderGroups().map((headerGroup: any) => {
							// console.log("headerGroup", headerGroup);
							return (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((headerColumn: any) => {
										// let a = headerColumn.column.getFacetedRowModel();
										// console.log("a", a);
										return <TableCell key={headerColumn.id}>{flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}</TableCell>;
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

export default MessAroundTable;
