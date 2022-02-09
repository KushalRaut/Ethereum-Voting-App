import { useState } from 'react'
import './PieChart.css'
import DonutChart from 'react-donut-chart'

export default function PieChart({ candidates }) {

  const loadData = () => {
    let temp = []
    candidates.map((candidate) => {
      temp.push({
        label: candidate.name,
        value: Number(candidate.votecount),
      })
    })
    return temp
  }

  return (
    <DonutChart
      width={650}
      height={400}
      innerRadius={0.37}
      selectedOffset={0}
      outerRadius={0.6}
      strokeColor={'#DDDDDD'}
      colors={[
        '#00bcd4',
        '#FFEC21',
        '#378AFF',
        '#FFA32F',
        '#93F03B',
        '#9552EA',
        '#F54F52',
        '#EA5F89',
        '#64C2A6',
        '#3C9D4E',
        '#003F5C',
        '#AADEA7',
      ]}
      data={loadData()}
    />
  )
}
