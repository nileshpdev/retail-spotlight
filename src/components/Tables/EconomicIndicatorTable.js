import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const EconomicIndicatorTable = ({economicIndicators, isLoading}) => {
  let date = economicIndicators.map((item) => item.date.substring(0,4))
  let value = economicIndicators.map((item) => item.value)

  const data = {
    type: 'line',
      labels: date,
      datasets: [
        {
          label: "Value",
          data: value,
          fill: false,
          borderColor: "#FEF601"
        }
      ]
    }

  return isLoading ? (
    <h1>Loading...</h1> ): (
      <Grid container spacing={2}>
  <Grid item xs={6} md={4}>
  <TableContainer component={Paper} style={{ width: '300px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {economicIndicators.map((item) => (
                <TableRow
                  key={item.date}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.date.substring(0,4)}
                  </TableCell>
                  <TableCell align="left">{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </TableContainer>
  </Grid>
  <Grid item xs={6} md={8}>
  <Line data={data} />
  </Grid>
</Grid>

  )
}

export default EconomicIndicatorTable