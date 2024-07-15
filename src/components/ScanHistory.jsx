import { SCAN_DATA } from '../constants';
import {QRCodeSVG} from 'qrcode.react';

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

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