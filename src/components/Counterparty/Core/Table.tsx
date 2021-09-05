import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import {StyledTableRow} from "./utils/TableRow";
import { StyledTableCell } from './utils/TableCell';
import InputFilterSelected from './FilterInputs/InputFilterSelected';
import InputFilterSearch from "./FilterInputs/InputFilterSearch";
import InputFilterDate from "./FilterInputs/InputFilterDate";

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'left';
    format?: (value: number) => string;
}
const currencies =  [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'left',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'left',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(name: string, code: string, population: number, size: number): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 394,
    },
    textField: {
     width:'75px',
        // padding:4
    },
    tableCell:{
        display:'flex',
        flexDirection:'column'
    }
});

export default function CounterpartiesTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [currency, setCurrency] = React.useState('All');
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
    return (
        <Paper className={classes.root}>
            <TablePagination style={{padding:0, border:'none'}}
                             rowsPerPageOptions={[5, 10, 25, { label: 'Все', value: -1 }]}
                             colSpan={3}
                             labelRowsPerPage='Строк на странице:'
                             count={rows.length}
                             rowsPerPage={rowsPerPage}
                             page={page}
                             SelectProps={{
                                 inputProps: { 'aria-label': 'rows per page' },
                                 native: true,
                             }}
                             onPageChange={handleChangePage}
                             onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Divider variant="middle" />

            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">N</StyledTableCell>
                            <StyledTableCell align="left"  >Тип
                                <InputFilterSelected handleChange={handleChange} currencies={currencies}/>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Наименование
                                <InputFilterSearch handleChange={handleChange}/>
                            </StyledTableCell>
                            <StyledTableCell align="left">Отрасль
                                <InputFilterSearch handleChange={handleChange}/>
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{minWidth:'145px'}}>Группа компаний
                                <InputFilterSearch handleChange={handleChange}/>
                            </StyledTableCell>
                            <StyledTableCell align="left">Ответственный
                                <InputFilterSearch handleChange={handleChange}/>
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{minWidth:'135px'}}>Автор записи
                                <InputFilterSelected handleChange={handleChange} currencies={currencies}/>
                            </StyledTableCell>
                            <StyledTableCell align="left">Создано
                              <InputFilterDate/>
                            </StyledTableCell>
                            <StyledTableCell align="left">Обновлено
                                <InputFilterDate/>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index:number) => {
                            return (
                                <StyledTableRow  role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column,index:number) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={index} align="left">
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}
