import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Checkout from "./Pages/Checkout";
import Listing from "./Pages/Listing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Search" element={<SearchResults />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
