import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const columnDefFace = [
    columnHelper.accessor(
        (row, idx) => {
            return 'id';
        },
        {
            header: 'id',
            omg: 'omg',
            id: 'idYo',
        } as any
    ),
    columnHelper.accessor((info, idx) => 'blah2', {
        header: 'first_name',
    }),
    columnHelper.accessor('last_name', {
        header: 'last_name',
        enableColumnFilter: false,
    }),
    columnHelper.accessor('email', {
        header: (info: any) => {
            // console.log('info', info);
            return 'email';
        },
    }),
    columnHelper.accessor((row) => `${row.id} and ${row.email}`, {
        id: 'mahMan',
        header: 'doesNotExist',
        cell: (info) => {
            // console.log('info', info.getValue());
            return info.getValue();
        },
        enableHiding: true,
    }),
];

export const columnDef = [
    columnHelper.accessor(
        (row, idx) => {
            return 'id';
        },
        {
            header: 'id',
            omg: 'omg',
            id: 'idYo',
        } as any
    ),
    columnHelper.accessor('first_name', {
        header: 'first_name',
    }),
    columnHelper.accessor('last_name', {
        header: 'last_name',
        enableColumnFilter: false,
    }),
    columnHelper.accessor('email', {
        header: (info: any) => {
            // console.log('info', info);
            return 'email';
        },
    }),
    columnHelper.accessor((row) => `${row.id} and ${row.email}`, {
        id: 'mahMan',
        header: 'doesNotExist',
        cell: (info) => {
            // console.log('info', info.getValue());
            return info.getValue();
        },
        enableHiding: true,
    }),
];

export const columnDefSelectedRows = [
    {
        id: 'select row',
        header: (info: any) => <input type='checkbox' checked={info.table.getIsAllRowsSelected()} onChange={info.table.getToggleAllRowsSelectedHandler()} />,
        cell: (info: any) => <input type='checkbox' checked={info.row.getIsSelected()} onChange={info.row.getToggleSelectedHandler()} disabled={!info.row.getCanSelect()} />
    },
    columnHelper.accessor(
        (row, idx) => {
            return row.id;
        },
        {
            header: 'id',
            id: 'idYo',
        } as any
    ),
    columnHelper.accessor('first_name', {
        header: 'first_name',
    }),
    columnHelper.accessor('last_name', {
        header: 'last_name',
        enableColumnFilter: false,
    }),
    columnHelper.accessor('email', {
        header: (info: any) => {
            // console.log('info', info);
            return 'email';
        },
    }),
    columnHelper.accessor((row) => `${row.id} and ${row.email}`, {
        id: 'mahMan',
        header: 'doesNotExist',
        cell: (info) => {
            // console.log('info', info.getValue());
            return info.getValue();
        },
        enableHiding: true,
    }),
];

export const columnDefGrouped = [
    columnHelper.accessor(
        (row, idx) => {
            return 'id';
        },
        {
            header: 'id',
            omg: 'omg',
            id: 'idYo',
        } as any
    ),
    {
        header: 'info group',
        id: 'infoGroup',
        columns: [
            columnHelper.accessor('first_name', {
                header: 'First Name',
            }),
            columnHelper.accessor('last_name', {
                header: 'Last Name',
            }),
        ],
    },
    columnHelper.accessor('email', {
        header: (info: any) => {
            // console.log('info', info);
            return 'email';
        },
    }),
];
