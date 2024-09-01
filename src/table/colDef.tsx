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
			header: "Name",
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
		header: "FOOS",
        cell: (info) => {
            console.log('info', info);
            return 'yo'
        }
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
					header: "Name",
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
