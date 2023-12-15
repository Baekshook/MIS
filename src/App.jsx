import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Ceo from "./pages/Ceo";
import Account from "./pages/Account";
import Parcel from "./pages/Parcel";
import Order from "./components/Order";
import Orderconfirm from "./components/Orderconfirm";
import Deliver from "./components/Deliver";
import Deliverconfirm from "./components/Deliverconfirm";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/프롬댓 관리자" element={<Ceo />} />
          <Route path="/거래처 사장님" element={<Account />} />
          <Route path="/택배 기사님" element={<Parcel />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderConfirm" element={<Orderconfirm />} />
          <Route path="/deliver" element={<Deliver />} />
          <Route path="/deliverconfirm" element={<Deliverconfirm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
