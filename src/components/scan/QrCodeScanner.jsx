import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
  const scanHandler = (result) => {
    setValue(result[0].rawValue)

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
  }

  const [value, setValue] = useState('')

  const setting = {
    audio: false,
    finder: false
  }

  const stylesSetting = {
    container: {
      width: 350
    }
  }

  return (
    <div>
        <p>{value}</p>
        <Scanner 
          onScan={scanHandler}
          allowMultiple 
          components={setting} 
          styles={stylesSetting}
        />
    </div>
  )
}