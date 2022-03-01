import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

 const NodeButton = () => {
  return (
    <Link href={'/?transfer=1'}>
    {
      <Button style={{ backgroundColor: '#3773f5', color: '#000'}}>
      Node
    </Button>
    }
    </Link>
  )
}

export default NodeButton

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