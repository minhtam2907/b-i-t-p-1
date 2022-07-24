import React from 'react'
import styled from 'styled-components'
import Indexitems from '../Items/Indexitems'
import Navar from '../Navar/Navar';
const Container = styled.div`
display: flex;
flex-wrap: wrap;
`
const Index = () => {
  return (
    <Container>
     <Navar/>
     <Indexitems Title = 'Task 1' Creator = 'Author' Desscription = 'This is a task, This is a task, This is a task, This...' />
     <Indexitems Title = 'Task 2' Creator = 'Author' Desscription = 'This is a task, This is a task, This is a task, This...' />
     <Indexitems Title = 'Task 3' Creator = 'Author' Desscription = 'This is a task, This is a task, This is a task, This...' />
     <Indexitems Title = 'Task 4' Creator = 'Author' Desscription = 'This is a task, This is a task, This is a task, This...' />
     <Indexitems Title = 'Task 5' Creator = 'Author' Desscription = 'This is a task, This is a task, This is a task, This...' />
    </Container>
  )
}

export default Index