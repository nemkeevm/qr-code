import { Routes, Route } from "react-router-dom";
import { QrCodeGenerator } from "./components/generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/scan/QrCodeScanner";
import { Navigation } from "./components/navigation/Navigation"
import { GenerateHistory } from "./components/GenerateHistory"
import { ScanHistory } from "./components/ScanHistory"

const Layout = () => {
  return (
    <div>
        <Navigation />
        <Routes>
          <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
          <Route path="/qr-code/scan" element={<QrCodeScanner />} />
          <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
          <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
        </Routes>
    </div>
  )
}
export { Layout };