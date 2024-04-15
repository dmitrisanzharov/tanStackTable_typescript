import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<any>();

export const columnDef = [
	columnHelper.accessor((row, idx) => {
        return "id";
    }, {
		header: "id",
        omg: 'omg', 
		id: 'idYo'
	} as any),
	columnHelper.accessor("first_name", {
		header: "first_name",
	}),
	columnHelper.accessor("last_name", {
		header: "last_name",
	}),
	columnHelper.accessor("email", {
		header: (info: any) => {
			// console.log('info', info);
			return "email"; 
		},
	}),
    columnHelper.accessor(()=> "doesNotExist" + 'lalala', {
        id: 'mahMan',
		header: "doesNotExist",
        cell: (info) => {
            // console.log('info', info.getValue());
            return info.getValue();
        },
		enableHiding: true
	})
];