import Home from "./routees/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navigation } from "./routees/navigation/navigation.component";
import Signin from "./routees/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am at the shop page.</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
