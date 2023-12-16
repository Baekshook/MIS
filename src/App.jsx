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
import Inventory from "./components/Inventory";
import Inventoryconfirm from "./components/Inventoryconfirm";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [inputValues, setInputValues] = useState({
    address: "",
    name: "",
    phoneNumber: "",
    request: "",
  });

  useEffect(() => {
    // 마운트 시 실행
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);

    // 언마운트 시 실행
    return () => {
      // 필요한 경우 정리 작업 수행
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
          <Route
            path="/deliver"
            element={
              <Deliver
                todos={todos}
                setTodos={setTodos}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            }
          />
          <Route
            path="/deliverConfirm"
            element={<Deliverconfirm todos={todos} />}
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventoryConfirm" element={<Inventoryconfirm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
