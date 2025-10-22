import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
//import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //For login page */}
        <Route path="/" element={<Login />} />

        {/* //For registration Page */}
        <Route path="/register" element={<Register />} />

        {/* //Landing page after successful login */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
