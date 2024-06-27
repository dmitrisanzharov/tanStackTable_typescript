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


function genderFilter(row: any, columnId: any, filterValue: any){
    console.log('row', row);
    console.log('columnId', columnId);
    console.log('filterValue', filterValue);
    return true;
}



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
    columnHelper.accessor((orgData: any) => `hello: ${orgData.email}`, {
        // header: 'Email'
        id: 'email lalal'
    }),
    columnHelper.accessor('gender', {
        id: 'gender',
        header: (props: any) => {
            // console.log('props', props);
            return 'Gender'
        },
        // filterFn: genderFilter
    }),
    columnHelper.accessor(()=> 'notFound', {
        id: 'notFound',
        header: '',
        cell: (info) => {
            // console.log(info)
            return 'blah';
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
        omg: 'omg'
    },
    {
        id: 'email', 
        accessorKey: 'email',
        cell: (info: any)=> {
            // console.log('info', info)
            return <h1>{info.getValue('email')}</h1>
        }
    }
]