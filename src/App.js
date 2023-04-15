import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import { Authentication } from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout";
import { Shop } from "./routes/shop/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
//test
export default App;