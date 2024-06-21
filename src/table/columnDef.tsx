export const columnDef: any = [
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
        cell: () => 'dim2i'
    },
    {
        id: 'email', 
        accessorKey: 'email'
    }
]