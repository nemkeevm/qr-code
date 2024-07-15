import { GENERATE_DATA } from '../constants';
import {QRCodeSVG} from 'qrcode.react';

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>
          {item}
          <QRCodeSVG value={item} />
          </p>
      ))}
      
    </div>
  )
}