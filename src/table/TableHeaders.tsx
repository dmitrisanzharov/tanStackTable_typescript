import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import dataMain from './data';
import { colDef } from './colDef';

type Props = {};

const BasicTable = (props: Props) => {
    const colDefMemo: any = React.useMemo(() => colDef, []);
    const dataMemo: any = React.useMemo(() => dataMain, []);

    const table = useReactTable({
        columns: colDefMemo,
        data: dataMemo,
        getCoreRowModel: getCoreRowModel(),
    });

    // React.useEffect(() => {
    //     {table.getHeaderGroups().map((headerGroup: any)=> {
    //         console.log('headerGroup', headerGroup);
    //     })}
    // }, []);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerRow: any) => {
                        console.log('headerRow', headerRow);
                        return <TableRow key={headerRow.id} sx={{backgroundColor: 'lightgray'}}>
                            {headerRow.headers.map((headerCell: any)=> {
                                return <TableCell key={headerCell.id} sx={{backgroundColor: 'yellow'}}>{flexRender(headerCell.column.columnDef.header, headerCell.getContext())}</TableCell>
                            })}
                        </TableRow>;
                    })}
                </TableHead>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
