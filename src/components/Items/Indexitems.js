import React, { useState } from 'react'
import styled from 'styled-components';
const Container = styled.div`
width: 200px;
height: 260px;
background: white;
margin-left: 44px;
margin-top: 40px;
border-radius: 10px;
border: 2px solid #675BF1;
`
const Button = styled.button`
width : 70px;
height: 30px;
margin-left: 62px;
border-radius: 10px;
background: #675BF1;
border : none;
text-align: center;
`
function Index(props) {
  const [status, setStatus] = useState('Start')
  const [statusone, setStatusone] = useState('New')
  const [color,setColor] = useState('#04BE00')

function handleStatus(){
    if(status=== 'Start'   &&  statusone === 'New'){
      setStatus('Done')
      setStatusone('Doing')
      setColor('red')
    }else if(status === 'Done'  && statusone === 'Doing'){
      setStatus('ReNew')
      setStatusone ('Done')
      setColor('#F88F14')
    } else if(status === 'ReNew'  && statusone === 'Done' ){
      setStatus('Start')
      setStatusone ('New')
      setColor('#675BF1')
    }
}
  return (
    <Container>
      <p style={{fontWeight: 'bold'}} >Title:{props.Title}</p>  
      <p>Creator:{props.Creator}</p>
      <p style={{color: color}}>Status : {statusone}</p>
      <hr></hr>
      <p>Desscription: <br></br>{props.Desscription}</p>
      <Button onClick={handleStatus}><p>{status}</p></Button>
    </Container>
  );
}

export default Index