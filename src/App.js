import Home from "./pages/Home/Home";

import List from "./pages/List/List";
import New from "./pages/New/New";
import SinglePage from "./pages/SinglePage/SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "../src/formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productsId" element={<SinglePage />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
