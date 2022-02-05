import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = ({ candidates }) => {
  console.log(candidates)
  const partyNames = []
  const partyVotes = []

  const loadData = () => {
    candidates.forEach((candidate) => {
      partyNames.push(candidate.party)
      partyVotes.push(Number(candidate.votecount))
    })
  }
  loadData()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  }

  const data = {
    labels: partyNames,
    datasets: [
      {
        label: 'Votes',
        data: partyVotes,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default LineChart
