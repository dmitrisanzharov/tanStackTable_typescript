import React from 'react';
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from '@tanstack/react-table';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import dataMain from './data';
import { colDefForBasic3 } from './colDef';

type Props = {};

const BasicTable = (props: Props) => {

    const [columnFilters, setColumnFilters] = React.useState([]);

    const colDefMemo: any = React.useMemo(() => colDefForBasic3, []);
    const dataMemo: any = React.useMemo(() => dataMain, []);
    const defaultColumn = React.useMemo(() => ({
        victor: "yo",
        }), []);


    const table = useReactTable({
        defaultColumn: defaultColumn,
        columns: colDefMemo,
        data: dataMemo,     
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters: columnFilters
        },
        onColumnFiltersChange: setColumnFilters
    } as any);

    React.useEffect(() => {
        let foo = table.getAllColumns();
        console.log("foo: ", foo);
    }, []);


    return (
        <TableContainer>
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerRow: any) => {
                        return (
                            <TableRow key={headerRow.id} sx={{ backgroundColor: 'lightgray' }}>
                                {headerRow.headers.map((headerCell: any) => {
                                    return (
                                        <TableCell key={headerCell.id} sx={{ backgroundColor: 'yellow' }}>
                                            {flexRender(headerCell.column.columnDef.header, headerCell.getContext())}
                                            <br />
                                            {headerCell.column.getCanFilter() && <input value={headerCell.column.getFilterValue() || ''} onChange={e => headerCell.column.setFilterValue(e.target.value)} />}
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
