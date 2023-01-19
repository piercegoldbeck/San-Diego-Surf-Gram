import * as React from "react";
import { Routes, Route } from "react-router-dom";

//components for app
import PageNotFound from "./NotFound";

import Home from "./pages/Home";

//materialUI imports

//styles for app.js
import "./styles.css";
function App() {
  // Api data

  return (
    <div class="all">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
