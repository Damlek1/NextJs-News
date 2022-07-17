import React from 'react'
import Image from 'next/image'
import loadingAnimation from '../../assets/loading.svg'
import ResultsData from './ResultsData'
import ResultsHeader from './ResultsHeader'


const ResultsSection = ({hasSearched, loading, results}) => {
  return (
    <div className='h-full'>
      {
        loading ? (
          <Image src={loadingAnimation} alt='loading animation' width={60} height={60} />
        ) : (
          <>
          <ResultsHeader hasSearched={hasSearched} />
          <ResultsData results={results} />

          </>
        )
      }
    </div>
  )
}

export default ResultsSection