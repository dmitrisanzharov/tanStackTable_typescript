import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import * as Mui from "@mui/material";
import allData from "./data";
import { columnDef } from "./columnDef";

type Props = {};

const BasicTable = (props: Props) => {
	const dataWithMemo = React.useMemo(() => allData, [allData]);
	const columnDefWithDemo = React.useMemo(() => columnDef, [columnDef]);

	const theTable: any = useReactTable({
		data: dataWithMemo,
		columns: columnDefWithDemo,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Mui.TableContainer>
			<Mui.Table>
                <Mui.TableHead sx={{backgroundColor: 'lightgray'}}>
                    {theTable.getHeaderGroups().map((headerGroupArray: any) => {
                        // console.log('headerGroupArray', headerGroupArray);
                        return <Mui.TableRow key={headerGroupArray.id}>
                            {headerGroupArray.headers.map((headerColumn: any) => {
                                // console.log('headerColumn', headerColumn);
                                return <Mui.TableCell key={headerColumn.id} sx={{border: '1px solid red'}}>
                                    {flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}
                                </Mui.TableCell>
                            })}
                        </Mui.TableRow>
                    })}
                </Mui.TableHead>
                <Mui.TableBody>
                    {theTable.getRowModel().rows.map((row: any)=> {
                        console.log('row', row)
                        return <Mui.TableRow key={row.id}>
                            {row.getVisibleCells().map((singleCell: any)=>{
                                console.log('singleCell', singleCell);
                                return <Mui.TableCell key={singleCell.id} sx={{border: '1px solid lightgray', '&:hover':{backgroundColor: 'gold'}}}>
                                    {flexRender(singleCell.column.columnDef.cell, singleCell.getContext())}
                                </Mui.TableCell>
                            })}
                        </Mui.TableRow>
                    })}
                </Mui.TableBody>
            </Mui.Table>

			{/* end of table container */}
		</Mui.TableContainer>
	);
};

export default BasicTable;
