import React from 'react'
import Section from './Sections'

const ResultsData = ({results}) => {
  return (
    <ul className='flex flex-col gap-4'>
      <Section results={results} />
    </ul>
  )
}

export default ResultsData