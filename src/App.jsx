import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routing from "./Routes/Routing";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
