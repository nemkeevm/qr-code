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
          <Route path="/generate" element={<QrCodeGenerator />} />
          <Route path="/scan" element={<QrCodeScanner />} />
          <Route path="/scanHistory" element={<ScanHistory />} />
          <Route path="/generateHistory" element={<GenerateHistory />} />
        </Routes>
    </div>
  )
}
export { Layout };