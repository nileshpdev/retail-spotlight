import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const IbmStockChart = ({ibmStock, isLoading}) => {

 let date = ibmStock.map((item) => item.date.substring(0,10))
 let open = ibmStock.map((item) => item.open)
 let high = ibmStock.map((item) => item.high)
 let low = ibmStock.map((item) => item.low)
 let close = ibmStock.map((item) => item.close)
 let volume = ibmStock.map((item) => item.volume)


  const data = {
    type: 'line',
      labels: date,
      datasets: [
        {
          label: "Open",
          data: open,
          fill: false,
          borderColor: "#FEF601"
        },
        {
          label: "High",
          data: high,
          fill: false,
          borderColor: "#00BB00"
        },
        {
          label: "Low",
          data: low,
          fill: false,
          borderColor: "#DD0000"
        },
        {
          label: "Close",
          data: close,
          fill: false,
          borderColor: "#007EFE"
        },
        // {
        //   label: "Volume",
        //   data: volume,
        //   fill: false,
        //   borderColor: "#742774"
        // }
      ],
      options: {
        scales: {
          y: {
            ticks: {
              callback: (value, index, ticks) => {
                return '$' + IbmStockChart.Ticks.formatters.numeric.apply(this, [value, index, ticks]);
              }
            }
          }
        }
      }
    }
  return (
    isLoading ? (
        <h1>Loading...</h1> ): (
          <section className='IBM'>
          <Line data={data} />
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="left">Open $</TableCell>
              <TableCell align="left">High $</TableCell>
              <TableCell align="left">Low $</TableCell>
              <TableCell align="left">Close $</TableCell>
              <TableCell align="left">Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {ibmStock.map((item) => (
                <TableRow
                  key={item.date}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{item.date.substring(0,10)}</TableCell>
                  <TableCell align="left">{item.open}</TableCell>
                  <TableCell align="left">{item.high}</TableCell>
                  <TableCell align="left">{item.low}</TableCell>
                  <TableCell align="left">{item.close}</TableCell>
                  <TableCell align="left">{item.volume}</TableCell>
                </TableRow>
              ))}
          </TableBody>

        </Table>
      </TableContainer>
          </section>

  )
)}

export default IbmStockChart



