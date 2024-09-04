import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const colDef: any = [
	{
		accessorKey: "id",
		header: "ID",
	},
	columnHelper.accessor(
		(row: any) => {
			// console.log('row', row)
			return row.first_name;
		},
		{
			id: "first_name",
			header: (info: any) => {
				console.log("info", info);
				return "Name";
			},
			// cell: (info: any) => 'steve'
		} as any
	),
	// {
	//     accessorKey: 'last_name',
	//     header: 'Surname'
	// }
];

export const colDef2: any = [
	columnHelper.display({
		id: "foo",
		header: () => "FOOS",
		cell: (info) => {
			// console.log('info', info);
			return "yo";
		},
	}),
	columnHelper.group({
		header: "All Names",
		columns: [
			columnHelper.accessor(
				(row: any) => {
					// console.log('row', row)
					return row.first_name;
				},
				{
					id: "first_name",
					header: (info: any) => {
						// console.log('info from header', info);
						return "Name";
					},
					// cell: (info: any) => 'steve'
				} as any
			),
			{
				accessorKey: "last_name",
				header: "Surname",
			},
		],
	}),
];

export const colDef3: any = [
	columnHelper.display({
		id: "foo",
		header: "foo",
		cell: () => "foos",
	}),
	columnHelper.accessor((row: any) => row.first_name, {
		id: "first_name",
		header: "name",
	} as any),
];

export const colDefForBasic2: any = [
	{
		accessorKey: "id",
		id: "id",
		header: "ID",
		filterFn: "equalsString",
	},
	{
		accessorKey: "first_name",
		id: "first_name",
		header: "First",
	},
	{
		accessorKey: "last_name",
		id: "last_name",
		header: "Second",
	},
];

export const colDefForBasic3: any = [
	{
		accessorKey: "id",
		id: "id",
		header: "ID",
	},
	{
		accessorKey: "first_name",
		id: "first_name",
		header: "First",
	},
	{
		accessorKey: "last_name",
		id: "last_name",
		header: "Second",
	},
];

export const colDefRowSelection: any = [
	{
		header: (info: any) => {
			return (
				<>
					<input type="checkbox" checked={info.table.getIsAllRowsSelected()} onChange={info.table.getToggleAllRowsSelectedHandler()} />
					<button onClick={() => info.table.resetRowSelection()}>reset</button>
				</>
			);
		},
		id: "row_select",
		cell: (info: any) => <input type="checkbox" checked={info.row.getIsSelected()} disabled={!info.row.getCanSelect()} onChange={info.row.getToggleSelectedHandler()} />,
	},
	{
		accessorKey: "id",
		id: "id",
		header: "ID",
        enableRowSelection: (row: any) => row.id <= 9
	},
	{
		accessorKey: "first_name",
		id: "first_name",
		header: "First",
	},
	{
		accessorKey: "last_name",
		id: "last_name",
		header: "Second",
	},
];
