import { useState } from 'react'
import {QRCodeSVG} from 'qrcode.react';

import { GENERATE_DATA } from '../../constants'

import s from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))

    setResult(value)
    setValue('')
  } 
  const onChangeHandler = (e) => {
    setValue(e.target.value)
    setResult('') 
  }

  return (
    <div>
      {result !== '' &&  <QRCodeSVG value={result} /> }
      <input type="text" value={value} onChange={onChangeHandler} className={s.input} />
      <button type='button' onClick={onClickHandler }>Go</button>
    </div>
  )
}