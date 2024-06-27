import React from "react";
import { useReactTable, getCoreRowModel, flexRender, getFacetedUniqueValues, getFacetedRowModel, getFilteredRowModel, TableOptions } from "@tanstack/react-table";
import * as Mui from "@mui/material";
import allData from "./data";
import { columnDef, Person } from "./columnDef";

type Props = {};

const GlobalFilterTable = (props: Props) => {
	const dataWithMemo = React.useMemo(() => allData, [allData]);
	const columnDefWithDemo = React.useMemo(() => columnDef, [columnDef]);

	const defaultColumn = React.useMemo(() => ({
        victor: "yo",
        }), []);


	const [globalFilterState, setGlobalFilterState] = React.useState("");
	const [filterId, setFilterId] = React.useState<string>("");
	const [filterValue, setFilterValue] = React.useState<string>("");

	const theTable: any = useReactTable({
		defaultColumn: defaultColumn,
		data: dataWithMemo,
		columns: columnDefWithDemo,
		anyKey: "hello",
		getCoreRowModel: getCoreRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			globalFilter: globalFilterState,
		},
		onGlobalFilterChange: setGlobalFilterState,
	} as TableOptions<Person>);

	function handleRunFilter(){
		let allColumns = theTable.getAllColumns(); // this needs to come from table  table.getAllColumns()  OR distructure it
		console.log("allColumns: ", allColumns);
 
 
		let column = allColumns.filter((el: any)=> el.id === filterId)[0];
		// console.log("column: ", column);
		column.setFilterValue(filterValue);
		// console.log('all done');
	}
 


	return (
		<>
			<h2>Global filter</h2>
			<input type="text" value={globalFilterState} onChange={(e) => setGlobalFilterState(e.target.value)} />
			<hr />
			<select value={filterId} onChange={(e) => setFilterId(e.target.value)}>
				// below is list of IDS from table, i.e. KEYS from the DATA objects
				{["", "id", "first_name", "email"].map((item: string) => {
					return <option key={item}>{item}</option>;
				})}
			</select>
			<h3>filter value enter it</h3>
			<input type='text' value={filterValue} onChange={e => setFilterValue(e.target.value)} />
			<button onClick={handleRunFilter} type='button'>run filter</button>
			<hr />
			<Mui.TableContainer>
				<Mui.Table sx={{ maxWidth: "650px" }}>
					<Mui.TableHead sx={{ backgroundColor: "lightgray" }}>
						{theTable.getHeaderGroups().map((headerGroupArray: any) => {
							console.log('headerGroupArray', headerGroupArray);
							return (
								<Mui.TableRow key={headerGroupArray.id}>
									{headerGroupArray.headers.map((headerColumn: any) => {
										// console.log('headerColumn', headerColumn);
										if (headerColumn.isPlaceholder) {
											return (
												<Mui.TableCell
													sx={{
														border: "1px solid red",
													}}
													key={headerColumn.id}
												></Mui.TableCell>
											);
										}
										return (
											<Mui.TableCell
												key={headerColumn.id}
												sx={{
													border: "1px solid red",
												}}
												colSpan={headerColumn.colSpan}
											>
												<>
													{flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}
													<input
														type="text"
														value={headerColumn.column.getFilterValue() || ""}
														onChange={(e) => headerColumn.column.setFilterValue(e.target.value)}
													/>
												</>
											</Mui.TableCell>
										);
									})}
								</Mui.TableRow>
							);
						})}
					</Mui.TableHead>
					<Mui.TableBody>
						{theTable.getRowModel().rows.map((row: any) => {
							// console.log('row', row)
							return (
								<Mui.TableRow key={row.id}>
									{row.getVisibleCells().map((singleCell: any) => {
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
												{flexRender(singleCell.column.columnDef.cell, singleCell.getContext())}
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
		</>
	);
};

export default GlobalFilterTable;
