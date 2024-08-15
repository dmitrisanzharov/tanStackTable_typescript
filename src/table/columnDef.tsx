export const columnDef = [
    {
        accessorKey: 'id',
        header: 'id'
    },
    {
        accessorKey: 'first_name',
        header: 'First Name',
        filterFn: 'arrIncludesSome'
    },
    {
        accessorKey: 'last_name',
        header: 'Last Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    }
]
