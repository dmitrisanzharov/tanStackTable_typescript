import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const columnDef = [
    columnHelper.accessor('id', {
        header: 'id'
    }),
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
]