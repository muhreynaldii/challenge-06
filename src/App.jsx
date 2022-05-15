import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path="/">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
