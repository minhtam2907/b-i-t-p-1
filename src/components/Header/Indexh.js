import React from 'react'
import styled from 'styled-components'
import '../../App.css';
const Container = styled.div`
height: 60px;
background:#1642B1;
`

const Indexh = () => {
  return (
    <Container>
        <button className='btn'>Create New App</button>
        <button className='btn1'>Search</button>
        <input className='input1' placeholder='Type Some Thing To Search'></input>     
    </Container>
  )
}

export default Indexh