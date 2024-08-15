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

    const names = React.useMemo(()=> {
        return Array.from(new Set(apiData.map((el: any)=> el.first_name))).sort();
    }, []);

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    React.useEffect(() => {
        table.setColumnFilters([{id: 'first_name', value: personName}])
    }, [personName]);

    return (
        <>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id='demo-multiple-name-label'>Name</InputLabel>
                <Select
                    labelId='demo-multiple-name-label'
                    id='demo-multiple-name'
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label='Name' />}
                >
                    {names.map((name: any) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: 'lightgray' }}>
                        {table.getHeaderGroups().map((headerGroupArr: any) => {
                            // console.log('headerGroupArr', headerGroupArr);
                            return (
                                <TableRow key={headerGroupArr.id}>
                                    {headerGroupArr.headers.map((headerColumn: any) => {
                                        // console.log('headerColumn', headerColumn);
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
