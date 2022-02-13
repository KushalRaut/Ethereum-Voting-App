import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarGraph = ({ candidates }) => {
  const colors = [
    'rgba(255, 99, 132)',
    'rgba(54, 162, 235)',
    'rgba(255, 206, 86)',
    'rgba(75, 192, 192)',
    'rgba(153, 102, 255)',
    'rgba(255, 159, 64)',
    'rgba(255, 99, 132)',
    'rgba(255, 99, 132)',
  ]
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: true,
        text: `Total Candidates:${candidates.length}`,
        position: 'top',
      },
    },
  }

  let temp = {
    labels: [],
    datasets: [{ label: 'Vote Count', data: [], backgroundColor: [] }],
  }
  const loadData = () => {
    if (candidates.length > 0) {
      candidates.forEach((candidate) => {
        temp.labels.push(candidate.name)
        temp.datasets[0].data.push(Number(candidate.votecount))
        temp.datasets[0].backgroundColor.push(colors[Number(candidate.id) - 1])
      })
    }
    console.log(temp)
  }
  loadData()
  const data = {
    labels: [
      'Boston',
      'Worcester',
      'Springfield',
      'Lowell',
      'Cambridge',
      'New Bedford',
    ],
    datasets: [
      {
        label: 'Election Leaders',
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
        ],
      },
    ],
  }

  return (
    <>
      <Bar options={options} data={temp} />
    </>
  )
}

export default BarGraph
