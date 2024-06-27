import React from "react";
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	getFacetedUniqueValues,
	getFacetedRowModel,
    getFilteredRowModel, 
	TableOptions,
    getSortedRowModel
} from "@tanstack/react-table";
import * as Mui from "@mui/material";
import allData from "./data";
import { columnDef, Person, columnDefWithGroup } from "./columnDef"; 

type Props = {};

const TableSorting = (props: Props) => {
	const dataWithMemo = React.useMemo(() => allData, [allData]);
	const columnDefWithDemo = React.useMemo(() => columnDef, [columnDef]);

    // const [sorting, setSorting] = React.useState<any>([
    //     {
    //         id: 'first_name',
    //         desc: false
    //     }
    // ]);
 

	const theTable: any = useReactTable({
		data: dataWithMemo,
		columns: columnDefWithDemo,
        anyKey: 'hello',
		getCoreRowModel: getCoreRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedRowModel: getFacetedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel()
        // state: {
        //     sorting: sorting
        // },
        // onSortingChange: setSorting
	} as TableOptions<Person>);


    // React.useMemo(() => {

    //     theTable.getHeaderGroups().map((headerGroupObject: any) => {
    //         headerGroupObject.headers.map((columnObject: any) => {
    
    //             if (columnObject.id === "first_name") {
    //                 columnObject.column.setFilterValue("Ermin");
    //             }
    
    //         });
    //     });

  
    // }, []);

    // React.useEffect(() => {
    //     let test = theTable.getState().columnFilters;
    //     console.log('theTable', test);
    // }, []);

    // React.useEffect(() => {
    //     theTable.setColumnFilters([{ id: 'gender', value: 'Female'}]);
    //     // console.log('theTable', test);
    // }, []);


	return (
		<Mui.TableContainer>
			<Mui.Table sx={{ maxWidth: "650px" }}>
				<Mui.TableHead sx={{ backgroundColor: "lightgray" }}>
					{theTable.getHeaderGroups().map((headerGroupArray: any) => {
						// console.log('headerGroupArray', headerGroupArray);
						return (
							<Mui.TableRow key={headerGroupArray.id}>
								{headerGroupArray.headers.map(
									(headerColumn: any) => {
										// console.log('headerColumn', headerColumn);
										if(headerColumn.isPlaceholder){
											return <Mui.TableCell sx={{border: '1px solid red'}} key={headerColumn.id}></Mui.TableCell>;
										}
										return (
											<Mui.TableCell
												key={headerColumn.id}
												sx={{ border: "1px solid red" }}
												colSpan={headerColumn.colSpan}
											>
                                                <>												{flexRender(
													headerColumn.column
														.columnDef.header,
													headerColumn.getContext()
												)}</>
                                                <button onClick={headerColumn.column.getToggleSortingHandler()}>{headerColumn.column.getIsSorted() || 'no sort'}</button>
											</Mui.TableCell>
										);
									}
								)}
							</Mui.TableRow>
						);
					})}
				</Mui.TableHead>
				<Mui.TableBody>
					{theTable.getRowModel().rows.map((row: any) => {
						// console.log('row', row)
						return (
							<Mui.TableRow key={row.id}>
								{row
									.getVisibleCells()
									.map((singleCell: any) => {
										// console.log('============================');
										// console.log('singleCell', singleCell);
										// let test1 = singleCell.column.getFacetedRowModel();
										// console.log("test1: ", test1);

										return (
											<Mui.TableCell
												key={singleCell.id}
												sx={{
													border: "1px solid lightgray",
													"&:hover": {
														backgroundColor: "gold",
													},
												}}
											>
												{flexRender(
													singleCell.column.columnDef
														.cell,
													singleCell.getContext()
												)}
											</Mui.TableCell>
										);
									})}
							</Mui.TableRow>
						);
					})}
				</Mui.TableBody>
			</Mui.Table>

			{/* end of table container */}
		</Mui.TableContainer>
	);
};

export default TableSorting;
