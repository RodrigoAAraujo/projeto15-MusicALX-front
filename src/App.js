import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import GlobalReset from './Assets/Styles/GlobalReset';
import ProductInfoPage from './Pages/ProductInfoPage';
import RegisterProductPage from "./Pages/RegisterProductPage";
import TermsPage from "./Pages/TermsPage";
import PaymentPage from "./Pages/PaymentPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalReset/>
    
      <Routes>
        <Route element={<LoginPage/>} path="/"/>
        <Route element={<SignUpPage/>} path="/sign-up"/>
        <Route element={<DashboardPage/>} path="/:name/dashboard"/>
        <Route element={<ProductInfoPage/>} path="/:name/produtos/:idProduto"/>
        <Route element={<RegisterProductPage/>} path="/:name/cadastrar-produto"/>
        <Route element={<TermsPage/>} path="/:name/termos_condicoes"/>
        <Route element={<PaymentPage/>} path="/:name/carrinho/pagamento"/>
      </Routes>
    </BrowserRouter>
  )
}

