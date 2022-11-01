import React from 'react'
import './Calculator.css'

import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function Calculator() {
  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  //Pegar valores dos botoẽs numéricos
  function getButtonValue (e) {
    /*console.log(e.target.value)*/
    var input = e.target.value
    //Concatena os numeros
    if(num === 0) {
      setNum(input)
    }else {
      setNum(num + input)
    }
    
  }

  //Limpar todos numeros
  function clearAllNumber() {
    setNum(0)
  }

  //Função porcentagem
  function percentage(){
    setNum(num/100)
  }

  //Mudar sinal de vírgula positivo ou negativo
  function changeSign() {
    if(num > 0) {
      setNum(-num)
    }else {
      setNum(Math.abs(num))
    }
  }

  //Calculos principais
  function calculate() {
    if (operator === '/') {
      setNum(parseFloat(oldNum) / parseFloat(num))
    } else if (operator === 'x') {
      setNum(parseFloat(oldNum) * parseFloat(num))
    } else if (operator === '-') {
      setNum(parseFloat(oldNum) - parseFloat(num))
    } else if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    }else {
      setNum('Error')
    }
  }

  //Recebe valor da operação
  function operatorHandler(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth='xs'>
        <div className='wrapper'>
        <Box m={12} />
          <h1 className='result'>{num}</h1>
          <button onClick={clearAllNumber}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
          <button className='gray' onClick={getButtonValue} value={7}>7</button>
          <button className='gray' onClick={getButtonValue} value={8}>8</button>
          <button className='gray' onClick={getButtonValue} value={9}>9</button>
          <button className='orange' onClick={operatorHandler} value={'x'}>X</button>
          <button className='gray' onClick={getButtonValue} value={4}>4</button>
          <button className='gray' onClick={getButtonValue} value={5}>5</button>
          <button className='gray' onClick={getButtonValue} value={6}>6</button>
          <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
          <button className='gray' onClick={getButtonValue} value={1}>1</button>
          <button className='gray' onClick={getButtonValue} value={2}>2</button>
          <button className='gray' onClick={getButtonValue} value={3}>3</button>
          <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
          <button className='gray' onClick={getButtonValue} value={0}>0</button>
          <button className='gray' onClick={getButtonValue} value={'.'} >,</button>
          <button className='gray' style={{visibility:'hidden'}}>,</button>
          <button className='orange' onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
    
  )
}
