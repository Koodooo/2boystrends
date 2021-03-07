import Home from "./pages/home";
import Header from "./components/header/index";
import NavMenu from "./components/navMenu/index";

import "./App.css";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <NavMenu />
      <Home />
      <div className="top30"></div>
      <Footer/>
    </>
  );
}

export default App;
