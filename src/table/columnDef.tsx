import { createColumnHelper, ColumnDef } from "@tanstack/react-table"

export type Person = {
    id: string,
    first_name: string,
    email: string,
    last_name?: string,
    gender?: string,
    ip_address?: string
}


const columnHelper = createColumnHelper<Person>();



export const columnDefWithGroup = [
    columnHelper.accessor('id', {
        header: 'id'
    }),
    columnHelper.group({
        header: 'Names',
        columns: [
            columnHelper.accessor('first_name', {
                header: 'First Name'
            }),
            columnHelper.accessor('last_name', {
                header: 'Last Name'
            })
        ]
    }),
    columnHelper.accessor('email', {
        header: 'Email'
    }),
    columnHelper.display({
        id: 'gender',
        header: 'Gender',
        cell: props => {
            // console.log(props);
            return props.row.original.gender || 'unknown';
        }
    }),
    columnHelper.accessor(()=> 'notFound', {
        id: 'notFound',
        header: 'Not Found',
        cell: (info) => {
            console.log(info)
            return info.getValue();
        }
    })
]; 


export const columnDef = [
    {
        id: 'id', 
        accessorKey: 'id'
    },
    {
        id: 'first_name',
        header: 'First Name', 
        accessorFn: ((data: any)=> {
            // console.log('row', data);
            return data.first_name;
        }),
    },
    {
        id: 'email', 
        accessorKey: 'email',
        cell: (info: any)=> {
            console.log('info', info)
            return <h1>{info.getValue('email')}</h1>
        }
    }
]