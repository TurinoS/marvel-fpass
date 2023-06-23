import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/StyleComponents/Wrapper.style"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home"
import HeroPage from "./components/pages/HeroPage";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heropage/:id" element={<HeroPage />} />
      </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
