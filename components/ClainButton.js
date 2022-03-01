import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ClainButton = () => {
  // Timer Button Clain
  const TOTAL_SECONDS_AMOUNT_PER_CLAIN = 60 * 60 * 24 //24hrs

  const [secondsAmount, setSecondsAmount] = useState(0)

  useEffect(() => {
    if(secondsAmount > 0) {
    setTimeout(() => {
     setSecondsAmount(state => state - 1)
     localStorage.setItem('secondsAmount', secondsAmount)
    }, 1000)
  }
  }, [secondsAmount])

  const minutes = localStorage.getItem('secondsAmount') % 60

  const hours = Math.floor(localStorage.getItem('secondsAmount') / (60 * 60))

  
  return(
    <Link href={'/?transfer=1'}>
    {
      secondsAmount == 0 ? (
        <Button onClick={() => setSecondsAmount(TOTAL_SECONDS_AMOUNT_PER_CLAIN)} 
        style = {{ backgroundColor: '#27ad75', color: '#fff', fontWeight: 'bold'}}>
          Clain
        </Button>
      ):(
        <Button onClick={() => console.log('clicked')} disabled='disabled'>
          {
            <>
            <span>{String(hours).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(minutes).padStart(2, '0')}</span>
            </>
          }
        </Button>
      )
    }
   </Link>
  )
}

export default ClainButton

const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  transition: filter 0.3s;
  background: none;
  color: #282b2f;
  
  &:hover{
    cursor: pointer; 
    filter: brightness(0.5)
  }
`