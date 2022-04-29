import Home from "./pages/Home/Home";

import List from "./pages/List/List";
import New from "./pages/New/New";
import SinglePage from "./pages/SinglePage/SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "../src/formSource";
import "./style/dark.scss";

function App() {
  return (
    <div className="app dark">
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
