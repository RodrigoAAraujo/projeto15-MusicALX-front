import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import GlobalReset from './Assets/Styles/GlobalReset';
import ProductInfo from './Pages/ProductInfo';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalReset/>
    
      <Routes>
        <Route element={<LoginPage/>} path="/"/>
        <Route element={<SignUpPage/>} path="/sign-up"/>
        <Route element={<DashboardPage/>} path="/:name/dashboard"/>
        <Route element={<ProductInfo/>} path="/:name/produtos/:idProduto"/>
      </Routes>
    </BrowserRouter>
  )
}

