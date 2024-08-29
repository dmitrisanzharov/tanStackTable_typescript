import { createColumnHelper } from "@tanstack/react-table";


const columnHelper = createColumnHelper();


export const colDef: any = [
    {
        accessorKey: 'id',
        header: 'ID'
    },
    columnHelper.accessor((row: any) => {
        // console.log('row', row)
        return row.first_name;
    }, {
        id: 'first_name',
        header: 'Name',
        // cell: (info: any) => 'steve'
    }),
    // {
    //     accessorKey: 'last_name',
    //     header: 'Surname'
    // }
]