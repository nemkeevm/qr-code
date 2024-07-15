import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav style={{display: 'flex', flexDirection: 'column'}}>
      <Link to="/generate">Генерировать qr</Link>
      <Link to="/scan">Сканировать qr</Link>
      <Link to="/scanHistory">История сканирования</Link>
      <Link to="/generateHistory">История генерирования</Link>
    </nav>
  )
}