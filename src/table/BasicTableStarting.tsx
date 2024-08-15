import React from 'react';
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import apiData from './data';
import { columnDef } from './columnDef';

type Props = {};

const BasicTable = (props: Props) => {
    const dataMemo = React.useMemo(() => apiData, []);
    const columnDefMemo = React.useMemo(() => columnDef, []);

    const table = useReactTable({
        data: dataMemo,
        columns: columnDefMemo,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    } as any);

    React.useEffect(() => {
        table.setColumnFilters([{id: 'first_name', value: []}])
    }, []);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: 'lightgray' }}>
                        {table.getHeaderGroups().map((headerGroupArr: any) => {
                            // console.log('headerGroupArr', headerGroupArr);
                            return (
                                <TableRow key={headerGroupArr.id}>
                                    {headerGroupArr.headers.map((headerColumn: any) => {
                                        console.log('headerColumn', headerColumn);
                                        return (
                                            <TableCell key={headerColumn.id}>
                                                {flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}
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
        </>
    );
};

export default BasicTable;
