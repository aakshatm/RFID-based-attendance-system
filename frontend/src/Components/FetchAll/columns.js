export const COLUMNS = [
    {
        Header : 'RFID',
        accessor : 'rfid'
    },
    {
        Header : 'Roll Number',
        accessor : 'roll_no'
    },
    {
        Header : 'Name',
        accessor : 'name'
    },
    {
        id:'isInside',
        Header : 'Is Inside',
        accessor: d => d.checkedIn.toString()
    },
];