import React from 'react';
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel } from '@tanstack/react-table';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';
import dataMain from './data';
import { colDefForBasic2 } from './colDef';

type Props = {};

const BasicTable = (props: Props) => {
    const colDefMemo: any = React.useMemo(() => colDefForBasic2, []);
    const dataMemo: any = React.useMemo(() => dataMain, []);

    const table = useReactTable({
        columns: colDefMemo,
        data: dataMemo,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 3,
                pageIndex: 10
            }
        }
    });

    function currentPage() {
        return table?.options?.state?.pagination?.pageIndex ? table?.options?.state?.pagination?.pageIndex + 1 : 1;
    }

    React.useEffect(() => {
        console.log('table', table);
    }, []);

    return (
        <TableContainer>
            <h2>Page controlls</h2>

            <Box sx={{ display: 'flex', border: '1px solid lightgray', justifyContent: 'space-between', paddingY: '15px' }}>
                <button onClick={() => table.setPageIndex(0)}>first page</button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>last page</button>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    next
                </button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    previous
                </button>
            </Box>

            <p>
                Page count: {currentPage()} of {table.getPageCount()}
            </p>
            <p>Page jump</p>
            <input type='number' value={currentPage()} onChange={(e) => table.setPageIndex(Number(e.target.value) - 1)} max={table.getPageCount()} />

            <p>Pagination control</p>
            <select value={table?.options?.state?.pagination?.pageSize} onChange={(e) => table.setPageSize(Number(e.target.value))}>
                {[10, 25, 50].map((pageSizeEl) => {
                    return (
                        <option key={pageSizeEl} value={pageSizeEl}>
                            Show: {pageSizeEl}
                        </option>
                    );
                })}
            </select>
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
