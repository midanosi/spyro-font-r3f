import React from 'react';
import {letterH} from './letterComponents'

const getLetterComponent = (letter: string) => {
  // if (['H', 'E', 'L', 'O'].includes(letter)) {
  //   return 
  // }
  
  if (letter === 'H') {
    return letterH
  }
}

export default ({ text }) => {
  console.log(text)
  return (
    <>
  <span>spyro text below</span>
  {text.split('').map(char => {})}
  </>
)}
