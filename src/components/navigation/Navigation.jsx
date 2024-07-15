import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav style={{display: 'flex', flexDirection: 'column'}}>
      <Link to="/qr-code/generate">Генерировать qr</Link>
      <Link to="/qr-code/scan">Сканировать qr</Link>
      <Link to="/qr-code/scanHistory">История сканирования</Link>
      <Link to="/qr-code/generateHistory">История генерирования</Link>
    </nav>
  )
}