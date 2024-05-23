import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columnDef = [
    {
        accessorKey: 'id',
        header: 'id',
    },
    {
        accessorKey: 'first_name',
        header: 'First Name'
    },
    {
        accessorKey: 'last_name',
        header: 'Last Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    columnHelper.accessor((row: any)=> {
        let a = row.geofence_types?.split(',');
        // console.log(a);
        return a;
    }, {
        id: 'geofence_types',
        header: 'Geofence types',
        cell: (info: any) => {
            let split = info.getValue() ?? [];
            console.log("split: ", split);
            return split.map((el: any)=> {
                return <span style={{border: '1px solid red', margin: '2px', padding: '2px'}} key={Math.random()}>{el}</span>
            })
            // return 'yo'
        }
    })
]