import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className=' border-2 border-black rounded-lg'>
        <TableHead>
          <TableRow>
            <TableCell className=' bg-blue-200 text-blue-800 font-bold'>Programs</TableCell>
            <TableCell className=' bg-blue-200 text-blue-800 font-bold' align="right">Referrer Bonus</TableCell>
            <TableCell className=' bg-blue-200 text-blue-800 font-bold' align="right">Referee Bonus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.program}
              </TableCell>
              <TableCell align="right">{row.referrerBonus}</TableCell>
              <TableCell align="right">{row.refereeBonus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
