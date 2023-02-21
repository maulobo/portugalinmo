import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
    padding: 0.8rem 2rem;
    color: #fff;
    margin: 1rem;
    border-radius: 3px;
    border: ${props => props.green ? "3px solid #285437": "3px solid #DBAB1E"};
    background: ${props => props.green ? "#285437" : "#DBAB1E"};
    transition: 1s ease-in-out;
    &:hover{
        background: transparent;
        border: ${props => props.green ? "3px solid #fff": "3px solid #DBAB1E"};
    }
`
const Btns = () => {
  return (
    <>
     <Button>CONTÁCTATE</Button>
    </>
  )
}

export {Btns}