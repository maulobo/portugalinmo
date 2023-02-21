import React from 'react'
import logo from '../Images/logo.png'
import { Button } from './Btns'
import './style.css'

const Hero = () => {
  return (
    <>
    <header className='hero'>
      <img src={logo} className='hero-logo' alt="logo" />
      <h1 style={{display:"none"}}>Inmobiliaria Portugal</h1>
      <h3 className='hero-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea cumque illo dolores..</h3>
      <Button green >CONTACTÁTE</Button>
    </header>
    </>
  )
}

export {Hero}