import React from 'react';
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from '@tanstack/react-table';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import dataMain from './data';
import { colDefForBasic2 } from './colDef';

type Props = {};

const BasicTable = (props: Props) => {
    const [filterId, setFilterId] = React.useState<string>('');
    const [filterValue, setFilterValue] = React.useState<string>('');

    const colDefMemo: any = React.useMemo(() => colDefForBasic2, []);
    const dataMemo: any = React.useMemo(() => dataMain, []);

    const table = useReactTable({
        columns: colDefMemo,
        data: dataMemo,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    function handleFilterChange(){
        console.log('table', table);
        table.setColumnFilters([{id: filterId, value: filterValue}])
    }

    return (
        <TableContainer>
            <h2>Choose filters</h2>
            <select value={filterId} onChange={(e) => setFilterId(e.target.value)}>
                {['', 'id', 'first_name', 'last_name'].map((item: string) => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
            <input value={filterValue} onChange={e => setFilterValue(e.target.value)} />
            <button onClick={handleFilterChange}>set filter</button>
            <hr />
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
                                            <input
                                                value={headerCell.column.getFilterValue() || ''}
                                                onChange={(e) => headerCell.column.setFilterValue(e.target.value)}
                                            />
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
