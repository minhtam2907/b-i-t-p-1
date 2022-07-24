import React from 'react'
import styled from 'styled-components'
import '../../App.css';

const Container = styled.div`
width: 200px;
height : 650px;
background:	#FF8C00;
`
const Navar = () => {
  return (
    <Container>
        <li>All Task</li>
        <hr></hr>
        <li>New Task</li>
        <hr></hr>
        <li>Doing Task</li>
        <hr></hr>
        <li>Done Task</li>
    </Container>
  )
}

export default Navar