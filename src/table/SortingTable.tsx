import React from "react";
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from "@tanstack/react-table";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import dataMain from "./data";
import { colDefForBasic2 } from "./colDef";

type Props = {};

const BasicTable = (props: Props) => {

    const [sorting, setSorting] = React.useState([{id: 'first_name', desc: false}, {id: 'id', desc: true}]);

	const colDefMemo: any = React.useMemo(() => colDefForBasic2, []);
	const dataMemo: any = React.useMemo(() => dataMain, []);

	const table = useReactTable({
		columns: colDefMemo,
		data: dataMemo,
		getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting
        },
        onSortingChange: setSorting
	} as any);

    function sortingReturn(sortState: any){
        return `- ${sortState || 'none'}`;
    }

	return (
		<TableContainer>
			<Table>
				<TableHead>
					{table.getHeaderGroups().map((headerRow: any) => {
						return (
							<TableRow key={headerRow.id} sx={{ backgroundColor: "lightgray" }}>
								{headerRow.headers.map((headerCell: any) => {
									return (
										<TableCell key={headerCell.id} sx={{ backgroundColor: "yellow" }} onClick={headerCell.column.getToggleSortingHandler()}>
											{flexRender(headerCell.column.columnDef.header, headerCell.getContext())}
                                            {sortingReturn(headerCell.column.getIsSorted())}
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
